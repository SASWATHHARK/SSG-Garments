// --- src/components/WhyChooseUs.jsx ---

import React from 'react';
import './WhyChooseUs.css';

// A simple Checkmark Icon component
const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

function WhyChooseUs() {
  return (
    <section className="why-choose-us container">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="why-choose-us-grid">
        
        {/* Column 1: Image */}
        <div className="why-choose-us-image">
          <img 
            src="https://placehold.co/500x500/ffc107/333?text=Professional+Team" 
            alt="Why Choose SSG" 
          />
        </div>

        {/* Column 2: Feature List */}
        <div className="why-choose-us-list">
          <ul>
            <li>
              <CheckIcon />
              <span>Tailored Solutions</span>
            </li>
            <li>
              <CheckIcon />
              <span>Quality Assurance</span>
            </li>
            <li>
              <CheckIcon />
              <span>Innovative Designs</span>
            </li>
            <li>
              <CheckIcon />
              <span>Timely Delivery</span>
            </li>
            <li>
              <CheckIcon />
              <span>Environmentally Conscious</span>
            </li>
            <li>
              <CheckIcon />
              <span>Competitive Pricing</span>
            </li>
            <li>
              <CheckIcon />
              <span>Protective Team</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;