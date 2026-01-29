import React from 'react';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import GallerySection from './Components/GallerySection';
import TestimonialSection from './Components/TestimonialSection';
import ContactSection from './Components/ContactSection';
import LocationSection from './Components/LocationSection';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <TestimonialSection />
      <ContactSection />
      <LocationSection />
      <Footer />
    </div>
  );
}

export default App;
