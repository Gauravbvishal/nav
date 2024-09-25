import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll event to collapse the navbar into hamburger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);  // Collapses navbar
      } else {
        setIsScrolled(false); // Full navbar shown
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle hamburger menu
  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the state to show/hide nav-links
  };

  return (
    <header>
      <nav className={`navbar ${isScrolled ? 'collapsed' : ''}`}>
        <div className="logo">LOGO</div>
        
        {/* Hamburger Menu */}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Nav Links (Toggled by scroll and hamburger) */}
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
