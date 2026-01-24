import React from 'react';
import HeroSection from './Components/HeroSection';
import GallerySection from './Components/GallerySection';
import ContactSection from './Components/ContactSection';
import LocationSection from './Components/LocationSection';
import Footer from './Components/Footer';
import FloatingWhatsApp from './Components/FloatingWhatsApp';
import './App.css';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <GallerySection />
      <ContactSection />
      <LocationSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
