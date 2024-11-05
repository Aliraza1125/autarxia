"use client";
import React from 'react';
import Image from 'next/image';

const MobilityContent = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-4 py-8 sm:py-12 lg:py-16 text-justify">
      {/* Title Section - Responsive text size */}
      <h2 className="text-[#FFB300] text-2xl sm:text-3xl lg:text-[32px] font-roboto font-light mb-6 sm:mb-8 lg:mb-12">
        autarxia mobility
      </h2>

      {/* Main Content Section */}
      <div className="space-y-8 sm:space-y-12 lg:space-y-16">
        {/* First Section - Adjusted spacing and text size */}
        <div>
          <h3 className="text-base sm:text-lg lg:text-[18px] font-roboto font-medium text-black mb-2 sm:mb-3 lg:mb-4">
            autarxia mobility – Strom macht mobil!
          </h3>
          <p className="text-sm sm:text-base lg:text-[15px] leading-relaxed font-roboto text-black w-full tracking-wider">
            Ein Elektroauto in Kombination mit einer{' '}
            <span className="">autarxia sun</span>{' '}
            <span className="">Photovoltaikanlage</span>{' '}
            ist eine ideale Kombination. Mit{' '}
            <span className="">autarxia mobility</span>{' '}
            bieten wir Ihnen die passende Ladelösung für Ihr Elektroauto.
            Sofern Sie Gelegenheit haben unter Tags Ihr Elektroauto an die Ladestation zu stellen, haben Sie sehr gute Chancen den Strom für Ihr Auto vom eigenen Dach zu beziehen. Dann macht Elektro-Mobilität erst richtig Sinn, wenn ihr selbst erzeugter Strom ist wirklich nahezu CO2 neutral!
          </p>
        </div>

        {/* Second Section with Image - Improved responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-20 items-start">
          <div className="order-2 md:order-1">
            <h3 className="flex flex-col space-y-2 sm:space-y-3 text-base sm:text-lg lg:text-[18px] font-roboto font-medium text-black mb-2 sm:mb-3 lg:mb-4">
              <span>autarxia mobility</span>
              <span className="font-medium">– Dynamisches Überschussladen</span>
            </h3>
            <p className="text-sm sm:text-base lg:text-[15px] leading-relaxed font-roboto text-black tracking-wider">
              Das typische Elektroauto lädt heute mit 11kW. Jedoch ist diese Leistung nicht zu jeder Zeit und in voller Höhe von Ihrer{' '}
              <span className="">autarxia sun</span>{' '}
              Photovoltaik-Anlage und ihrem{' '}
              <span className="">autarxia storage</span>{' '}
              Batteriespeicher verfügbar. Hier hilft das dynamische Überschussladen von{' '}
              <span className="">autarxia mobility</span>:
            </p>
            <p className="text-sm sm:text-base lg:text-[15px] leading-relaxed font-roboto text-black mt-3 sm:mt-4">
              <span className="">autarxia mobility</span>{' '}
              schiebt nur den Stromüberschuss, welcher nach Deckung des Hausverbrauches noch verfügbar ist, in Richtung Elektroauto. Das Laden des Autos dauert dann zwar länger, jedoch müssen Sie keinen Strom vom Netz zukaufen und fahren mit nahezu CO2 neutralem und kostengünstigem Strom.
            </p>
          </div>
          <div className="relative h-48 sm:h-64 md:h-80 lg:h-[400px] w-full order-1 md:order-2">
            <Image
              src="/images/charging-car.jpg"
              alt="Electric car charging"
              fill
              className="object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilityContent;