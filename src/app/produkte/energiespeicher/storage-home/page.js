import React from 'react';
import Image from 'next/image';
import HeroSection from '../../../components/HeroComponent/HeroSection';
import ContactBanner from '../../../components/ContactBanner/ContactBanner';
import Footer from '../../../components/Footer/Footer';
import PageTransition from '../../../components/PageTransition/PageTransition';
import StorageHomeContent from './components/StorageHomeContent'
const StorageHomePage = () => {
  return (
    <PageTransition>

    <main className="w-full">
      {/* Hero Section */}
      <HeroSection 
        backgroundImage="/Headerhome/storage-home-hero.jpg"
        imageAlt="Thermal Energy Storage System"
        title=""
        subtitle=""
        brightness={85}
        titleSize="default"
      />
      <StorageHomeContent/>
      <ContactBanner bgColor='#00c3f3'/>
      <Footer/>

  
    </main>
    </PageTransition>
  );
};

export default StorageHomePage;