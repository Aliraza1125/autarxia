"use client";
import React from 'react';
import HeroSection from '../components/HeroComponent/HeroSection';
import  ContactFormSection from './components/ContactFormSection'
import ContactBanner from '../components/ContactBanner/ContactBanner'
import Footer from '../components/Footer/Footer';
import PageTransition from '../components/PageTransition/PageTransition';
const KontaktePage = () => {
  return (
    <PageTransition>

    <main className='w-full'>
      <HeroSection
        backgroundImage="/images/typewriter-hero.jpg"
        imageAlt="Technician working"
        title=""
        subtitle=""
        brightness={90}
        titleSize="default"
      />
      <ContactFormSection/>
      <ContactBanner bgColor="#00c3f3" />
      <Footer/>
  
    </main>
        </PageTransition>
  );
};

export default KontaktePage;