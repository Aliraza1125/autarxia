"use client";
import React from 'react';
import Link from 'next/link';

const ContactBanner = ({ bgColor = '#ffbd1c' }) => {
  return (
    <>
  
    <div className="w-full py-8" style={{ backgroundColor: bgColor }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-white text-[34px] font-sans  mb-6 tracking-widest">
          INTERESSE? <span className="ml-2 font-light text-[32px]">– Sprechen Sie uns an!</span>
        </h2>

        {/* Contact Button */}
        <Link href="/kontakte">
          <button 
            className="bg-white text-[#555555] px-8 py-2.5 rounded-md font-roboto text-[15px] hover:bg-[#dddede] transition-colors"
          >
            <span className='tracking-widest'>

            Kontakt
            </span>
          </button>
        </Link>
      </div>
    </div>
     {/* Bottom border - responsive height */}
     <div className="w-full h-2 md:h-[15px] bg-[#dddede]" />
     </>
  );
};

export default ContactBanner;