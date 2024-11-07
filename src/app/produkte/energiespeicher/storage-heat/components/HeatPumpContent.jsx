"use client";
import React from 'react';
import Image from 'next/image';

const HeatPumpContent = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16">
      {/* Title Section */}
      <div className="mb-6 sm:mb-8">
        <h1 className="font-caviar font-light text-2xl sm:text-3xl lg:text-[36px] leading-tight tracking-wide sm:tracking-widest mb-1">
          <span className="text-[#aad343]">autarxia heat pump</span>
        </h1>
      </div>

      {/* Main Content with Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
        {/* Left Column - Text Content */}
        <div className="space-y-4 sm:space-y-6 text-justify pr-0 md:pr-5 order-2 md:order-1">
          <h2 className="font-arial text-base sm:text-[18px] font-bold text-black tracking-wide sm:tracking-wider">
            autarxia heatpump – Strom macht mobil!
          </h2>

          <div className="space-y-4 tracking-wide sm:tracking-wider">
            <p className="font-arial text-[15px] leading-[25px] text-black">
              Eine <span className="">Wärmepumpe</span> von autarxia ist die ideale Ergän&#8209;zung für <span className="">Ihre Photovoltaik&#8209;Anlage</span> mit Energiespeicher. Besonders in der Übergangszeit arbeiten <span className="">Photovoltaik&#8209;Anlage</span> mit Energiespeicher und die Wärmepumpe gut zusammen, denn hier sind noch Stromüberschüsse zu erwarten, die in der Wärmepumpe verbraucht werden können.
            </p>

            <p className="font-arial text-[15px] leading-[25px] text-black">
              Auch für unser autarxia bhkw kann eine Wärmepumpe eine sehr sinnvolle Ergänzung sein. Zusammen mit der erzeugten Wärme aus dem bhkw und der Wärme aus der Umgebung der Wärmepumpe kann sehr effizient geheizt werden.
            </p>

            <p className="font-arial text-[15px] leading-[25px] text-black">
              Selbstverständlich können wir auch Ihre bereits beste&#8209;hende Wärmepumpe in Ihr neues autarxia Hybridkraft&#8209;werk integrieren!
            </p>
          </div>
        </div>

        <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full order-1 md:order-2 mb-6 md:mb-0 overflow-hidden">
  <Image
    src="/images/heat-pump.jpg"
    alt="Heat pump installation"
    fill
    priority
    className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
      </div>
    </div>
  );
};

export default HeatPumpContent;