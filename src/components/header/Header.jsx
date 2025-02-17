import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        NorEdin<span className="dot">.</span>
      </div>
      <nav className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        <a className="active" href="#Home" onClick={() => setIsMenuOpen(false)}>
          HOME
        </a>
        <a className="active" href="#Services" onClick={() => setIsMenuOpen(false)}>
          SERVICES
        </a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>
          PROJECTS
        </a>
        <a href="#Skills" onClick={() => setIsMenuOpen(false)}>
          SKILLS
        </a>
        <a href="#About" onClick={() => setIsMenuOpen(false)}>
          ABOUT ME
        </a>
        <a href="#Contact" onClick={() => setIsMenuOpen(false)}>
          CONTACT
        </a>
      </nav>
      <a href="#Contact" className="talk-btn">Let's Talk</a>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </header>
  );
};

export default Header;
