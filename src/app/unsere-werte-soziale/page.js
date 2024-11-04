"use client";
import React from 'react';
import HeroSection from '../components/HeroComponent/HeroSection';
import ContactBanner from '../components/ContactBanner/ContactBanner';
import Footer from '../components/Footer/Footer';
import SocialResponsibilitySection  from './components/SocialResponsibilitySection'
const UnsereWerteSozialePage = () => {
  return (
    <main className='w-full'>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/Headerhome/vr-hero.jpg"  // Make sure to add this image
        imageAlt="Person with VR headset"
        title="Mein Strom ist"
        subtitle="zukunftsorientiert..."
        brightness={110}
        titleSize="default"
     
      />

     <SocialResponsibilitySection />

      {/* Contact Banner */}
      <ContactBanner bgColor="#aad343"/>

      {/* Footer */}
      <Footer/>
    </main>
  );
};

export default UnsereWerteSozialePage;