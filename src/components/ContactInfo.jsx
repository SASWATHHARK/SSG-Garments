// --- src/components/ContactInfo.jsx ---

import React from 'react';
import './ContactInfo.css';

// SVGs for social media icons (as React components)
// This is a common way to handle icons in React
const FacebookIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.24 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.018A9.954 9.954 0 0 0 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.053 1.98.227 2.65.48c.67.253 1.14.59 1.61.96.47.37.81.84 1.06 1.61.25.67.42 1.48.48 2.65.058 1.26.07 1.64.07 4.85s-.012 3.58-.07 4.85c-.053 1.17-.227 1.98-.48 2.65c-.25.67-.59 1.14-.96 1.61c-.37.47-.84.81-1.61 1.06c-.67.25-1.48.42-2.65.48c-1.26.058-1.64.07-4.85.07s-3.58-.012-4.85-.07c-1.17-.053-1.98-.227-2.65-.48c-.67-.25-1.14-.59-1.61-.96c-.47-.37-.81-.84-1.06-1.61c-.25-.67-.42-1.48-.48-2.65c-.058-1.26-.07-1.64-.07-4.85s.012-3.58.07-4.85c.053-1.17.227-1.98.48-2.65c.25-.67.59-1.14.96-1.61c.37-.47.84-.81 1.61-1.06c.67-.25 1.48-.42 2.65-.48C8.42 2.175 8.8 2.163 12 2.163zm0 1.8c-3.17 0-3.5.01-4.72.07-1.08.05-1.73.22-2.2.4-c.48.18-.88.42-1.2.9-.32.48-.55.88-.73 1.36-.18.47-.35 1.12-.4 2.2-.06 1.22-.07 1.55-.07 4.72s.01 3.5.07 4.72c.05 1.08.22 1.73.4 2.2c.18.48.42.88.73 1.2c.32.32.72.55 1.2.73c.47.18 1.12.35 2.2.4c1.22.06 1.55.07 4.72.07s3.5-.01 4.72-.07c1.08-.05 1.73-.22 2.2-.4c.48-.18.88-.42 1.2-.73c.32-.32.55-.72.73-1.2c.18-.47.35-1.12.4-2.2c.06-1.22.07-1.55.07-4.72s-.01-3.5-.07-4.72c-.05-1.08-.22-1.73-.4-2.2c-.18-.48-.42-.88-.73-1.2c-.32-.32-.72-.55-1.2-.73c-.47-.18-1.12-.35-2.2-.4C15.5 3.973 15.17 3.963 12 3.963zM12 7.2c-2.65 0-4.8 2.15-4.8 4.8s2.15 4.8 4.8 4.8s4.8-2.15 4.8-4.8S14.65 7.2 12 7.2zm0 8c-1.77 0-3.2-1.43-3.2-3.2s1.43-3.2 3.2-3.2s3.2 1.43 3.2 3.2S13.77 15.2 12 15.2zm6.16-6.96c-.41 0-.75-.34-.75-.75s.34-.75.75-.75s.75.34.75.75s-.34.75-.75.75z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12.01 2C6.48 2 2 6.48 2 12s4.48 10 10.01 10c1.7 0 3.32-.42 4.77-1.15l3.46 1.15-1.15-3.46c.73-1.45 1.15-3.07 1.15-4.77C22 6.48 17.52 2 12.01 2zm0 18.01c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.9-5.91c-.5-2.48-3.4-4.32-6.89-4.32-3.48 0-6.38 1.84-6.89 4.32-.13.62.35 1.2 1 1.2h11.77c.65 0 1.13-.58.99-1.2z" />
  </svg>
);


function ContactInfo() {
  return (
    <section className="contact-info-section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          
          {/* Column 1: Phone */}
          <div className="contact-card">
            <h3>Call Us</h3>
            <p>Ready to start your project? Give us a call.</p>
            <a href="tel:9944324252" className="contact-link">9944324252</a>
            <a href="tel:9629934669" className="contact-link">9629934669</a>
          </div>
          
          {/* Column 2: Address */}
          <div className="contact-card">
            <h3>Visit Us</h3>
            <p>42/55, Rajammal lay-out, Murungapalayam, Gandhi Nagar (post), Tirupur-641,603</p>
            <a 
              href="https://maps.google.com/?q=42/55, Rajammal lay-out,Murungapalayam,Gandhi Nagar (post), Tirupur-641,603" 
              className="contact-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>

          {/* Column 3: Social Media */}
          <div className="contact-card">
            <h3>Follow Us</h3>
            <p>See our latest work and updates.</p>
            <div className="social-media-links">
              {/* Add your real links here */}
              <a href="#" className="social-link" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" className="social-link" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" className="social-link" aria-label="WhatsApp"><WhatsAppIcon /></a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;