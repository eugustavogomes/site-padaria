import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import OfferingsSection from './components/sections/OfferingsSection';
import ContactSection from './components/sections/ContactSection';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-800 text-beige-200 font-roboto">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;