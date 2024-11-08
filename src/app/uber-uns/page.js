"use client";
import React from 'react';
import HeroSection from '../components/HeroComponent/HeroSection'
import AboutUsContent from './components/AboutUsContent'
import ContactBanner from '../components/ContactBanner/ContactBanner';
import Footer from '../components/Footer/Footer';
import PageTransition from '../components/PageTransition/PageTransition';

const AboutUsPage = () => {
  return (
    <PageTransition>
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
        <AboutUsContent />
        <ContactBanner bgColor='#00c3f3' />
        <Footer/>
      </main>
    </PageTransition>
  );
};

export default AboutUsPage;