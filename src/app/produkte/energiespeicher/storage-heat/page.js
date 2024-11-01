import React from 'react';
import Image from 'next/image';
import HeroSection from '../../../components/HeroComponent/HeroSection';
import HeatPumpContent from './components/HeatPumpContent'
import ContactBanner from '../../../components/ContactBanner/ContactBanner';
import Footer from '../../../components/Footer/Footer';
const StorageHeatPage = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <HeroSection 
        backgroundImage="/Headerhome/storage-heat-hero.jpg"
        imageAlt="Thermal Energy Storage System"
        title="Mein Strom ist umweltfreundlich..."
        subtitle=""
        brightness={85}
        titleSize="default"
      />
      <HeatPumpContent />
      <ContactBanner/>
      <Footer/>

  
    </main>
  );
};

export default StorageHeatPage;