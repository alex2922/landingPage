import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";

function Hero() {
  const monitorAnimation = {
    x: [0, 50, -50, 0], // Keyframes for x movement
  };

  const monitorTransition = {
    duration: 4,         // Total duration of the animation
    repeat: Infinity,    // Loops infinitely
    ease: "easeInOut",   // Easing for smooth transitions
  };

  return (
    <div className="parent hero magicpattern">
      <div className="hero-container container">
        <div className="hero-content">
          <h1>
            <div className="line">
              <motion.span
                className="icon1 bg-img-cover"
                animate={monitorAnimation}  // Passing the object directly
                transition={monitorTransition} // Passing the object directly
              ></motion.span>
              <motion.span className="we">we</motion.span>
              <motion.span className="build">BUILD</motion.span>
              <motion.span className="icon2 bg-img-cover" />
            </div>

            <div className="line">
              <motion.span className="future">Futures</motion.span>
              <motion.span className="not">Not</motion.span>
            </div>

            <div className="line">
              <motion.span className="icon3 bg-img-cover" />
              <motion.span className="just">Just</motion.span>
              <motion.span className="websites">Websites</motion.span>
              <motion.span className="icon4 bg-img-cover" />
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
