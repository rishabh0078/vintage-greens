import React from 'react';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <GallerySection />
      <TestimonialSection />
      <ContactSection />
      <LocationSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
