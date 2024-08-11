// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-left">
         <strong><span>Spider</span>.</strong>
      </div>
      <div className="navbar-right">
        
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          {/* <li><a href="#projects">Projects</a></li> */}
          <li><a href="#getintouch">Get In Touch</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
