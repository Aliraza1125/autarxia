"use client";
import React from 'react';
// import HeroSection from './components/HeroSection';
import MobilityContent from './components/MobilityContent'
import ContactBanner from '../../../components/ContactBanner/ContactBanner';
import Footer from '../../../components/Footer/Footer';
import HeroSection from '../../../components/HeroComponent/HeroSection';

const MobilityPage = () => {
    return (
        <main className="w-full">
       
            <HeroSection
                backgroundImage="/Headerhome/laundry-hero.jpg"
                imageAlt="Woman doing laundry"
                title="Mein Strom ist mehr"
                subtitle="als Greenwashing..."
                brightness={80}
                titleSize="large"
            />
            <MobilityContent />
            <ContactBanner />
            <Footer />
        </main>
    );
};

export default MobilityPage;