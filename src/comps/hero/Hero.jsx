import React, { useState, useEffect } from "react";
import "./Hero.scss";

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
          <h1>
            <div className="line">
              <span className="we">we</span>
              <span className="build">BUILD</span>
            </div>

            <div className="line">
              <span
                className="future"
                style={{
                  display: "inline-block",
                }}
              >
                {futureTexts[currentTextIndex]}
              </span>
              <span className="not">Not</span>
            </div>

            <div className="line">
              <span className="just">Just</span>
              <span className="websites">Websites</span>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
