import React, { useEffect } from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import Button from "../button/Button";

// Subtle looping animations for icons
const iconAnimations = {
  icon1: {
    animate: { x: [0, 5, 0], y: [0, 5, 0] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
  icon2: {
    animate: { x: [0, -5, 0], y: [0, -5, 0] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
  icon3: {
    animate: { x: [0, 3, 0], y: [0, -3, 0] },
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
  icon4: {
    animate: { x: [0, -3, 0], y: [0, 3, 0] },
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

// Subtle looping animations for text
const textAnimations = {
  we: {
    animate: { scale: [1, 1.02, 1] },
    transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
  },
  build: {
    animate: { rotate: [0, 3, -3, 0] },
    transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
  },
  future: {
    animate: { y: [0, -5, 0] },
    transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
  },
  not: {
    animate: { x: [0, 3, 0, -3, 0] },
    transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
  },
  just: {
    animate: { rotate: [0, 2, -2, 0] },
    transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
  },
  websites: {
    animate: { scale: [1, 1.01, 1] },
    transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
  },
};






function Hero() {


  const  texts = [ "Futures" , "Experiences" , "Legacies"]

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * texts.length);
      const randomText = texts[randomIndex];
      document.querySelector(".future").textContent = randomText;
    }, 3000);

    return () => clearInterval(interval);
  }, []);






  return (
    <div className="parent hero magicpattern">
      <div className="hero-container container">
        <div className="hero-content">
          <h1>
            <div className="line">
              <motion.span
                className="icon1 bg-img-cover"
                {...iconAnimations.icon1}
              />
              <motion.span className="we" {...textAnimations.we}>
                we
              </motion.span>
              <motion.span className="build" {...textAnimations.build}>
                BUILD
              </motion.span>
              <motion.span
                className="icon2 bg-img-cover"
                {...iconAnimations.icon2}
              />
            </div>

            <div className="line">
              <motion.span className="future" {...textAnimations.future}>
                Futures
              </motion.span>
              <motion.span className="not" {...textAnimations.not}>
                Not
              </motion.span>
            </div>

            <div className="line">
              <motion.span
                className="icon3 bg-img-cover"
                {...iconAnimations.icon3}
              />
              <motion.span className="just" {...textAnimations.just}>
                Just
              </motion.span>
              <motion.span className="websites" {...textAnimations.websites}>
                Websites
              </motion.span>
              <motion.span
                className="icon4 bg-img-cover"
                {...iconAnimations.icon4}
              />
            </div>
          </h1>
        </div>
       <Button text="Enquire Now" onClick={() => alert('Styled button clicked!')} />
      </div>
    </div>
  );
}

export default Hero;
