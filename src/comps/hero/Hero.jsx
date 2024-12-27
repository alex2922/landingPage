import React, { useState, useEffect } from "react";
import "./Hero.scss";
import { motion } from "framer-motion";

function Hero() {
  const futureTexts = ["Futures", "Experiences", "Legacies"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Cycle through the array every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % futureTexts.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="parent hero magicpattern">
      <div className="hero-container container">
        <div className="hero-content">
          <motion.div className="icon bg-img-cover"  animate={{
          y: [0, -10, 0, 10, 0], // Moves up and down
          x: [0, 10, 0, -10, 0], // Moves side to side
        }}
        transition={{
          duration: 6, // Duration of one complete cycle
          repeat: Infinity, // Loops indefinitely
          ease: "easeInOut",
        }}>

          </motion.div>
          <h1>
            <div className="line">
              <motion.span
                className="we"
                animate={{
                  scale: [1, 1.05, 1],
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              >
                we
              </motion.span>
              <motion.span
                className="build"
                animate={{
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              >
                BUILD
              </motion.span>
            </div>

            <div className="line">
              <motion.span
                className="future"
                key={currentTextIndex} // Trigger re-render on text change
                style={{
                  display: "inline-block",
                  transformOrigin: "top center", // Set top border as the anchor
                }}
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: 90 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                {futureTexts[currentTextIndex]}
              </motion.span>
              <motion.span
                className="not"
                animate={{
                  rotateX: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              >
                Not
              </motion.span>
            </div>

            <div className="line">
              <motion.span
                className="just"
                animate={{
                  scale: [1, 1.1, 1],
                  x: [0, -2, 2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: "easeInOut",
                }}
              >
                Just
              </motion.span>
              <motion.span
                className="websites"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              >
                Websites
              </motion.span>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
