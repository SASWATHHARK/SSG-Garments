import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSections from './components/ProductSections';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>
      <Navbar />
      {<Hero />}
      {<ProductSections />}
      {<AboutUs />}
      {<WhyChooseUs />}
      { <ContactInfo /> }
      {<ContactForm />}
      {<Footer /> }
    </div>
  );
}

export default App;