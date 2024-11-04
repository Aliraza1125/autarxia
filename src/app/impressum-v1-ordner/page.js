"use client";
import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer/Footer';

const ImpressumPage = () => {
  return (
    <main>
      {/* Top Spacing */}
      <div className="w-full h-2 md:h-[50px]" />
      <div className="w-full h-2 md:h-[15px] bg-[#dddede]" />

      {/* Content Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-[#00c3f3] text-3xl sm:text-4xl font-roboto font-light mb-8 sm:mb-12 tracking-wide pl-0 sm:pl-0">
          Impressum
        </h1>

        {/* Company Details */}
        <div className="space-y-6 sm:space-y-8 text-[15px] font-roboto">
          {/* Company Info */}
          <div className="space-y-1">
            <p className="font-medium">Autarxia Infrastruktursysteme GmbH</p>
            <p>Am Heinrichsberg 16</p>
            <p>90587 Veitsbronn</p>
            <p>Handelsregister: HRB 15848</p>
            <p>Registergericht: Fürth</p>
          </div>

          {/* Representative */}
          <div className="space-y-1">
            <p className="font-medium">Vertreten durch:</p>
            <p>Dipl.-Ing. univ. Thomas Tschaftary</p>
          </div>

          {/* Contact */}
          <div className="space-y-1">
            <p className="font-medium">Kontakt</p>
            <p>Telefon: +49 (0) 175 5283795</p>
            <p>E-Mail: <Link 
              href="mailto:thomas.tschaftary@autarxia.de" 
              className="text-[#00c3f3] hover:underline break-words"
            >
              thomas.tschaftary@autarxia.de
            </Link></p>
          </div>

          {/* Tax ID */}
          <div className="space-y-1">
            <p className="font-medium">Umsatzsteuer-ID</p>
            <p className="break-words">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p>DE308795019</p>
          </div>

          {/* EU Dispute Resolution */}
          <div className="space-y-2">
            <p className="font-medium">EU-Streitschlichtung</p>
            <p className="break-words">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
            <Link 
              href="https://ec.europa.eu/consumers/odr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#00c3f3] hover:underline break-all inline-block"
            >
              https://ec.europa.eu/consumers/odr/
            </Link>
            <p className="mt-2">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </div>

          {/* Consumer Dispute Resolution */}
          <div className="space-y-2">
            <p className="font-medium">Verbraucherstreitbeilegung/Universalschlichtungsstelle</p>
            <p className="break-words">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </div>

          {/* Image Sources */}
          <div className="space-y-1">
            <p className="font-medium">Bildquellen</p>
            <p>für alle Header © stock.adobe.com</p>
            <p>Fahrzeug auf Seite Mobilität © stock.adobe.com</p>
            <p>alle weiteren © Autarxia Infrastruktursysteme GmbH</p>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="w-full h-2 md:h-[15px] bg-[#dddede]" />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default ImpressumPage;