// --- src/components/Footer.jsx ---

import React from 'react';
import './Footer.css';

function Footer() {
  
  // A simple function to scroll to the top
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Makes the scroll smooth
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container container">
        
        <div className="footer-top">
          {/* Column 1: About SSG */}
          <div className="footer-col">
            <h3 className="footer-logo">SSG</h3>
            <p>
              Your trusted partner for high-quality, customized 
              Corporate T-shirts, Uniforms, and Accessories.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#corporate">Corporate T-shirt</a></li>
              <li><a href="#uniform">Uniform</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <p>9944324252</p>
            <p>9629934669</p>
            <p>Tirupur-641,603</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} SSG. All Rights Reserved.
          </p>
          <a href="#top" onClick={scrollToTop} className="footer-back-to-top">
            Back to Top &uarr;
          </a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;