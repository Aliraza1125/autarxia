"use client";
import React from 'react';
import Image from 'next/image';

const ContactFormSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16 text-justify">
      {/* Title Section */}
      <div className="mb-12 px-3">
        <h2 className="text-[#00c3f3] text-3xl font-roboto font-light mb-4 tracking-widest">
          Kontakt
        </h2>
        <h3 className="text-xl font-roboto mb-2 tracking-wide">
          Sie würden gerne mehr erfahren?
        </h3>
        <p className="text-[15px] font-roboto text-gray-700 tracking-wider">
          Gerne – Rufen Sie uns unter +49 375.2928765 an oder füllen Sie das folgende Formular aus. Kreuzen Sie einfach die Themen an, zu denen wir Sie kontaktieren dürfen. Wir werden uns dann schnellstmöglich bei Ihnen melden.
        </p>
      </div>

      {/* Form Image */}
      <div className="relative w-full h-[1700px] mb-8 ">
        <Image
          src="/images/contact-form.png"
          alt="Contact Form"
          fill
          className="object-fill"
          priority
        />
      </div>
    </div>
  );
};

export default ContactFormSection;