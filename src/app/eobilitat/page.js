"use client";
import React from 'react';
import HeroSection from '../components/HeroComponent/HeroSection'
import WhyEMobilitySection from './components/WhyEMobilitySection'
import ContactBanner from '../components/ContactBanner/ContactBanner';
import Footer from '../components/Footer/Footer';

const EMobilitatPage = () => {
  return (
    <main className='w-full'>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/Headerhome/hero-technician.jpg"
        imageAlt="Technician working"
        title="Unser Strom macht die"
        subtitle="Zukunft besser."
        brightness={90}
        titleSize="default"
      />
      <WhyEMobilitySection/>
      <ContactBanner bgColor="#aad343"/>
      <Footer/>

   
    </main>
  );
};

export default EMobilitatPage;