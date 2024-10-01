 import React, { useState, useEffect } from 'react';
import './navbar.css';
import logoImage from './RSB-LOGO.png'; // Adjust the path to your logo image

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className={`navbar ${isScrolled ? 'collapsed' : ''}`}>
        <div className="logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isScrolled ? 'hide' : ''} ${isOpen ? 'show' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#carrier">Carrier</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
