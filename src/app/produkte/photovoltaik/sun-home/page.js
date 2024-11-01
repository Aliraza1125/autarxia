"use client";
import React from 'react';
// import HeroSection from './components/HeroSection';
import SunBusinessContent from './components/SunBusinessContent'
import ContactBanner from "../../../components/ContactBanner/ContactBanner"
import Footer from '../../../components/Footer/Footer';
import HeroSection from "../../../components/HeroComponent/HeroSection"

export default function SunHomePage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/Headerhome/hero-technician.jpg"
        imageAlt="Technician working"
        title="Unser Strom macht die"
        subtitle="Zukunft besser."
        brightness={90}
        titleSize="default"
      />
      <SunBusinessContent />
      <ContactBanner />
      <Footer />

    </main>
  );
}