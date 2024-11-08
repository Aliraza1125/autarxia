"use client";
import React from 'react';

import EngineeringSection from './components/EngineeringSection'
import HeroSection from '../../../components/HeroComponent/HeroSection';
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import Footer from '../../../components/Footer/Footer'

const SunHomePage = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <HeroSection 
        backgroundImage="/Headerhome/hero-headphones.jpg"
        imageAlt="Woman with headphones"
        title="Mein Strom pfeift auf Atomkraft..."
        subtitle=""
        brightness={90}
        titleSize="default"
      
      />

      <EngineeringSection />

      {/* Contact Banner */}
      <ContactBanner bgColor="#FFB300" />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default SunHomePage;