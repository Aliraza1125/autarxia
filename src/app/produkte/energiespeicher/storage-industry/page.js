"use client";
import React from 'react';

import HeroSection from '../../../components/HeroComponent/HeroSection';
import StorageBusinessContent from './components/StorageBusinessContent'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import Footer from '../../../components/Footer/Footer';
import PageTransition from '../../../components/PageTransition/PageTransition';
const StorageIndustryPage = () => {
  return (
    <PageTransition>

    <main className="w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/Headerhome/hero-technician.jpg"
        imageAlt="Technician working"
        title="Unser Strom macht die"
        subtitle="Zukunft besser."
        brightness={90}
        titleSize="default"
      />
        <StorageBusinessContent />
        <ContactBanner />
        <Footer/>
      
    </main>
    </PageTransition>
  );
};

export default StorageIndustryPage;