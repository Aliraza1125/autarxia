"use client";
import React from 'react';
import HeroSection from '../components/HeroComponent/HeroSection';
import ContactBanner from '../components/ContactBanner/ContactBanner';
import Footer from '../components/Footer/Footer';
import CompanyValuesSection from './components/CompanyValuesSection'
import PageTransition from '../components/PageTransition/PageTransition';

const UnsereWerteV1Page = () => {
  return (
    <PageTransition>

    <main className='w-full'>
      <HeroSection
        backgroundImage="/Headerhome/hero-technician.jpg"
        imageAlt="Technician working"
        title="Unser Strom macht die"
        subtitle="Zukunft besser."
        brightness={90}
        titleSize="default"
      />

      {/* Content sections will go here */}
      <CompanyValuesSection />

      {/* Contact Banner */}
      <ContactBanner bgColor="#00c3f3"/>
      
      {/* Footer */}
      <Footer/>
    </main>
    </PageTransition>
  );
};

export default UnsereWerteV1Page;