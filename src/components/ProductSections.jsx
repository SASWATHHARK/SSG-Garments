// --- src/components/ProductSections.jsx ---

import React from 'react';
import './ProductSections.css';

function ProductSections() {
  return (
    <section className="product-section container" id="products">
      <h2 className="section-title">Our Products</h2>
      <div className="product-grid">
        
        {/* Card 1: Corporate T-shirt */}
        <div className="product-card" id="corporate">
          <img 
            src="https://placehold.co/600x400/007bff/FFF?text=Corporate+T-shirt" 
            alt="Corporate T-shirt" 
            className="product-image"
          />
          <div className="product-content">
            <h3 className="product-title">Corporate T-shirt</h3>
            <p className="product-description">
              High-quality, custom-branded t-shirts for your team, event, or promotion. 
              We offer a wide range of colors, fabrics, and printing options.
            </p>
            <a href="#contact" className="btn product-btn">Inquire Now</a>
          </div>
        </div>

        {/* Card 2: Uniform */}
        <div className="product-card" id="uniform">
          <img 
            src="https://placehold.co/600x400/333/FFF?text=Uniforms" 
            alt="Uniforms" 
            className="product-image"
          />
          <div className="product-content">
            <h3 className="product-title">Uniforms</h3>
            <p className="product-description">
              Durable and professional uniforms for schools, hospitals, and various industries. 
              We provide tailored solutions to meet your specific requirements.
            </p>
            <a href="#contact" className="btn product-btn">Inquire Now</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProductSections;