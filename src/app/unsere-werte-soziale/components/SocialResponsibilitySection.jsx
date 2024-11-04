"use client";
import React from 'react';
import Image from 'next/image';

const SocialResponsibilitySection = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16">
      {/* Title Section */}
      <div className="mb-8 sm:mb-12">
        <h2 className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3 text-3xl sm:text-4xl lg:text-5xl font-roboto font-light">
          <span className="text-[#aad343]">Über uns</span>
          <span className="text-gray-500 whitespace-nowrap">– Soziale Verantwortung</span>
        </h2>
      </div>

      {/* Content Section */}
      <div className="space-y-8 sm:space-y-12">
        {/* Text Content */}
        <div className="text-[15px] font-roboto leading-relaxed text-justify tracking-wider ">
          <p>
            Als Unternehmen nehmen wir unsere Verantwortung für unsere Gesellschaft sehr ernst. Wir sind überzeugt, dass jeder seinen kleinen Teil zum Wohl der Menschen auf diesem Planeten beitragen kann und sollte. Deshalb unterstützen wir tatkräftig das{' '}
            <span className="">nehemia team</span>
            {' '}– eine international tätige Entwicklungsorganisation:
          </p>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center w-full py-4 sm:py-6 lg:py-8">
          <div className="relative w-full sm:w-[400px] lg:w-[500px] h-[150px] sm:h-[200px] lg:h-[300px]">
            <Image
              src="/images/nehemia-team-logo.png"
              alt="Nehemia Team Logo"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 400px, 500px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialResponsibilitySection;