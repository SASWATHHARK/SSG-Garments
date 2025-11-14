// --- src/components/AboutUs.jsx ---

import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-section container" id="about">
      <div className="about-content">
        <h2 className="section-title">About SSG</h2>
        <p className="about-description">
          Sri Sakthi Garments is a leading manufacturer of high-quality knitted garments
          and woven products. Based in the textile hub of Tirupur, we specialize in
          creating customized apparel for corporations, schools, and industries.
        </p>
        <p className="about-description">
          Our mission is to deliver excellence in every stitch, combining innovative
          design with durable materials and timely delivery to meet your exact needs.
        </p>
        <h3 className="about-subtitle">What we Provide?</h3>
        <ul className="about-features">
            <li>
                <span>✓</span>
                <strong>Quality Assurance:</strong> Rigorous checks at every stage.
            </li>

            <li>
                <span>✓</span>
                <strong>Custom Solutions:</strong> Tailored designs, fabrics, and branding.
            </li>

            <li>
                <span>✓</span>
                <strong>Competitive Pricing:</strong> B2B-focused value.
            </li>

            <li>
                <span>✓</span>
                <strong>Timely Delivery:</strong> We understand your deadlines.
            </li>
        </ul>
      </div>
      <div className="about-image">
        <img src="https://placehold.co/500x500/f0f0f0/333?text=Our+Factory" alt="About SSG" />
      </div>
    </section>
  );
}

export default AboutUs;