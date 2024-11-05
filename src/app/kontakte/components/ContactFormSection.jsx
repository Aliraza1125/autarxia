"use client";
import React from 'react';
import Image from 'next/image';

const ContactFormSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-4 py-8 sm:py-12 lg:py-16 text-justify">
      {/* Title Section */}
      <div className="mb-8 sm:mb-12 px-0 sm:px-3">
        <h2 className="text-[#00c3f3] text-2xl sm:text-3xl font-roboto font-light mb-3 sm:mb-4 tracking-wide sm:tracking-widest">
          Kontakt
        </h2>
        <h3 className="text-lg sm:text-xl font-roboto mb-2 sm:mb-3 tracking-wide">
          Sie würden gerne mehr erfahren?
        </h3>
        <p className="text-[15px] font-roboto text-gray-700 tracking-wide sm:tracking-wider leading-relaxed">
          Gerne – Rufen Sie uns unter{' '}
          <a 
            href="tel:+49375.2928765" 
            className="text-[#00c3f3] hover:underline whitespace-nowrap"
          >
            +49 375.2928765
          </a>{' '}
          an oder füllen Sie das folgende Formular aus. Kreuzen Sie einfach die Themen an, zu denen wir Sie kontaktieren dürfen. Wir werden uns dann schnellstmöglich bei Ihnen melden.
        </p>
      </div>

      {/* Form Image - Responsive height based on viewport */}
      <div className="relative w-full mb-6 sm:mb-8">
        <div className="relative w-full" style={{ 
          height: 'clamp(1000px, 180vw, 1700px)'  // Responsive height that scales with viewport width
        }}>
          <Image
            src="/images/contact-form.png"
            alt="Contact Form"
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;