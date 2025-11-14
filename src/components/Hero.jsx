// --- src/components/Hero.jsx ---

import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content container">
        <h1 className="hero-title">
          Your Trusted Partner for Custom Garments
        </h1>
        <p className="hero-subtitle">
          We manufacture high-quality, customized Corporate T-shirts, 
          Uniforms, and Accessories for your business.
        </p>
        <a href="#contact" className="btn btn-primary hero-btn">
          View Our Products
        </a>
      </div>
    </section>
  );
}

export default Hero;