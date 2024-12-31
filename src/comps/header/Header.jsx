import React, { useState, useEffect } from "react";  // Import useState and useEffect
import "./Header.scss";
import logo from "../../assets/white-logo.svg";

function Header() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 1220);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Add event listener

    // Cleanup event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

  return (
    <header className="parent header">
      {mobile ? (
        <div className="container header-containermobile">
          <a className="logo">
            <img src={logo} alt="Logo" />
          </a>
        </div>
      ) : (
        <div className="container header-container">
          <a href="#">Our Service</a>
          <a href="#">Our Works</a>
          <a className="logo">
            <img src={logo} alt="Logo" />
          </a>
          <a href="#">Why Choose Us</a>
          <button className="btn-c">
            <a href="#" className="b">
              Enquire Now
            </a>
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
