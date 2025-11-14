// --- src/components/ContactForm.jsx ---

import React from 'react';
import './ContactForm.css';

function ContactForm() {
  // !!! IMPORTANT: Replace this with your actual Google Form link !!!
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSe1eIYiuRby7xcR4MqjodREEkVJpLheQyT2s0FmPEISoNlOOw/viewform?usp=dialog";

  return (
    <section className="contact-form-section">
      <div className="container contact-form-content">
        <h2 className="section-title">Have a Specific Inquiry?</h2>
        <p className="contact-form-subtitle">
          For detailed quotes, bulk orders, or custom design requests,
          please fill out our inquiry form. We will get back to you shortly.
        </p>
        <a 
          href={googleFormLink}
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary form-btn"
        >
          Open Inquiry Form
        </a>
      </div>
    </section>
  );
}

export default ContactForm;