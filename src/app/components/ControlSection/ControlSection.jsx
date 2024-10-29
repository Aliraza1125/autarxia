import React from 'react';
import Image from 'next/image';

const ControlSection = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-20">
      <div className="bg-[#262963] rounded-lg p-4 md:p-6 lg:p-8">
        {/* Text Container */}
        <div className="w-full">
          <div className="flex flex-row sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mb-4">
            <span className="text-2xl md:text-3xl lg:text-[36px] font-roboto font-semibold text-white tracking-[2px]">
              autarxia
            </span>
            <span className="text-xl md:text-2xl lg:text-3xl font-roboto font-light text-white tracking-widest">
              control
            </span>
          </div>
         
          <div className="text-white space-y-3 md:space-y-1 font-roboto font-light text-sm leading-relaxed tracking-widest">
            <p>
              autarxia control ist Ihr persönlicher Energie-Manager! Er behält stets den Überblick und steuert Ihre Anlagenkomponenten optimal.
            </p>
            <p>
              Die laufende Erfassung aller Strom-und Wärmebedarfe von Ihren wichtigsten Verbrauchern sowie die laufende Aufzeichnung der erzeugten Energien schafft eine solide, webbasierte Datengrundlage für Abrechnung und Anlagenüberwachung. Erst durch diese Transparenz wird Energieeffizienz möglich. Darüber hinaus regelt autarxia control die Energieflüsse um eine optimale Ausnutzung der erneuerbaren Energiequellen und -speicher zu gewährleisten.
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-0">
              <p className="w-full sm:max-w-[85%] order-2 sm:order-1">
                Machen Sie doch was Sie wollen - autarxia control kümmert sich um Ihre zuverlässige, umweltfreundliche und nachhaltige Stromversorgung - und das vollautomatisch und webbasiert.
              </p>
              <Image
                src="/images/network-icon.png"
                alt="Network Control Icon"
                width={150}
                height={150}
                className="w-24 sm:w-32 md:w-40 lg:w-[150px] object-contain order-1 sm:order-2 sm:ml-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlSection;