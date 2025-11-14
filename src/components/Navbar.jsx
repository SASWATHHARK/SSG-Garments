// --- src/components/Navbar.jsx ---

import React, { useState } from 'react';
import './Navbar.css';


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // This function toggles the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        
        {/* Logo */}
        <a href="/" className="navbar-logo">
          {/* 2. USE THE IMAGE INSTEAD OF TEXT */}
          <img src='public\comanylogo.png' alt="SSG Logo" /> 
        </a>

        {/* Mobile Menu Icon (Hamburger) */}
        <button className="navbar-toggle" onClick={toggleMobileMenu}>
          {/* This creates the 3-line hamburger icon */}
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Menu */}
        <div className={isMobileMenuOpen ? "navbar-menu active" : "navbar-menu"}>
          <a href="#home" className="navbar-link" onClick={toggleMobileMenu}>Home</a>
          <a href="#corporate" className="navbar-link" onClick={toggleMobileMenu}>Corporate T-shirt</a>
          <a href="#uniform" className="navbar-link" onClick={toggleMobileMenu}>Uniform</a>
          <a href="#about" className="navbar-link" onClick={toggleMobileMenu}>About Us</a>
          <a href="#contact" className="navbar-link" onClick={toggleMobileMenu}>Contact</a>
        </div>

        {/* Contact Number */}
        <div className="navbar-contact">
          <a href="tel:9944324252">Call Us: 9944324252</a>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;