"use client";
import React from 'react';
import Image from 'next/image';

const MobilityContent = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Title Section */}
      <h2 className="text-[#FFB300] text-[32px] font-roboto font-light mb-12">
        autarxia mobility
      </h2>

      {/* Main Content Section */}
      <div className="space-y-16">
        {/* First Section */}
        <div>
          <h3 className="text-[18px] font-roboto font-medium text-black mb-4">
            autarxia mobility – Strom macht mobil!
          </h3>
          <p className="text-[15px] leading-relaxed font-roboto text-black w-full tracking-wider ">
            Ein Elektroauto in Kombination mit einer{' '}
            <span className="text-[#FFB300]">autarxia sun</span>{' '}
            <span className="text-[#FFB300]">Photovoltaikanlage</span>{' '}
            ist eine ideale Kombination. Mit{' '}
            <span className="text-[#FFB300]">autarxia mobility</span>{' '}
            bieten wir Ihnen die passende Ladelösung für Ihr Elektroauto.
            Sofern Sie Gelegenheit haben unter Tags Ihr Elektroauto an die Ladestation zu stellen, haben Sie sehr gute Chancen den Strom für Ihr Auto vom eigenen Dach zu beziehen. Dann macht Elektro-Mobilität erst richtig Sinn, wenn ihr selbst erzeugter Strom ist wirklich nahezu CO2 neutral!
          </p>
        </div>

        {/* Second Section with Image */}
        <div className="grid md:grid-cols-2 gap-20 items-start text-justify">
          <div>
            <h3 className="flex flex-col space-y-3 text-[18px] font-roboto font-medium text-black mb-4">
             <span>
                
             autarxia mobility
                
                </span> 
         
              <span className="font-medium">– Dynamisches Überschussladen</span>
            </h3>
            <p className="text-[15px] leading-relaxed font-roboto text-black tracking-wider ">
              Das typische Elektroauto lädt heute mit 11kW. Jedoch ist diese Leistung nicht zu jeder Zeit und in voller Höhe von Ihrer{' '}
              <span className="text-[#FFB300]">autarxia sun</span>{' '}
              Photovoltaik-Anlage und ihrem{' '}
              <span className="text-[#FFB300]">autarxia storage</span>{' '}
              Batteriespeicher verfügbar. Hier hilft das dynamische Überschussladen von{' '}
              <span className="text-[#FFB300]">autarxia mobility</span>:
            </p>
            <p className="text-[15px] leading-relaxed font-roboto text-black mt-4">
              <span className="text-[#FFB300]">autarxia mobility</span>{' '}
              schiebt nur den Stromüberschuss, welcher nach Deckung des Hausverbrauches noch verfügbar ist, in Richtung Elektroauto. Das Laden des Autos dauert dann zwar länger, jedoch müssen Sie keinen Strom vom Netz zukaufen und fahren mit nahezu CO2 neutralem und kostengünstigem Strom.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px] w-full">
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