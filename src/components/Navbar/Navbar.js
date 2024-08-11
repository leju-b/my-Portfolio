import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-left">
        <strong><span>Spider</span>.</strong>
      </div>
      <div className="navbar-right">
        <div className="hamburger-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="my-Portfolio/public/My_Resume.pdf" download="My_Resume.pdf" className="resume-button" onClick={toggleMenu}>Resume</a></li>
          <li><a href="#getintouch" onClick={toggleMenu}>Get In Touch</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
