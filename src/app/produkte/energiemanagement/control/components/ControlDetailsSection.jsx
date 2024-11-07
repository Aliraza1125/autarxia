"use client";
import React from "react";
import Image from "next/image";

const ControlDetailsSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-4 py-8 sm:py-12 lg:py-16 text-justify">
      {/* Title Section */}
      <div className="mb-8 sm:mb-12">
        <h1 className="font-caviar text-2xl sm:text-3xl lg:text-[34px] leading-tight tracking-widest">
          <span className="text-[#262963]">autarxia control</span>
        </h1>
      </div>

      {/* Subtitle */}
      <div className="mb-4 sm:mb-6">
        <h2 className="font-arial text-base sm:text-[18px] font-bold text-black">
          autarxia control – Schafft Transparenz!
        </h2>
      </div>

      {/* First Paragraph - Full Width */}
      <div className="mb-6 sm:mb-8">
        <p className="font-arial text-[15px] leading-[25px] text-black tracking-wider">
          autarxia control <span className="">hält</span> Ihr autarxia
          Hybridkraftwerk zusammen und sorgt für tiefe Einblicke in Ihr
          Energiesystem: Kleine Elektronikkomponenten, welche in Ihrer
          Elektroinstallation verbaut werden, erfassen die Energieflüssen von
          allen Erzeugern sowie von allen Verbrauchern in Ihrem Netz. Dies Daten
          werden in autarxia control im Sekundentakt weiter&#8209;verarbeitet:
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 mb-8 sm:mb-12">
        {/* Left Column - Text Content */}
        <div className="space-y-4 tracking-wider">
          <p className="font-arial text-[15px] leading-[25px] text-black">
            Zum Einen werden die Energieflüsse webbasiert visu&#8209;alisiert
            indem die aktuelle Leistung dargestellt wird. Zum Anderen werden die
            erzeugten und verbrauchte Energiemengen in Echtzeit erfasst und als
            15min&#8209;Wert, Stundenwert, Tageswert, Monatswert und Jahreswert
            abgespeichert. Neben den Informationen zum Strom kann autarxia
            control auch Daten zur Wärmeerzeugung und &#8209;verbrauch sammeln
            sowie viele weitere Medien erfassen, wie z.B. Wasser, Druckluft, Gas
            etc.
          </p>

          <p className="font-arial text-[15px] leading-[25px] text-black">
            So wird Ihr Energiesystem transparent – Erzeugung und Verbrauch von
            Strom, Wärme und vielen ande&#8209;ren Medien lässt sich nun
            zuordnen und übersichtlich darstellen. Bereits im Vorfeld einer
            Installation eines autarxia Hybridkraftwerks sind dies wesentliche
            und sehr wichtige Informationen für die Auslegung der
            zu&#8209;künftigen Komponenten.
          </p>
        </div>

        {/* Right Column - Graph Image */}
        <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full overflow-hidden">
          <Image
            src="/images/energy-graph.jpg"
            alt="Energy consumption graph"
            fill
            priority
            className="object-contain w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Flow Diagram Section */}
      <div className="space-y-6 sm:space-y-8">
        <h2 className="font-arial text-base sm:text-[18px] font-bold text-black">
          autarxia control – Alles im Griff!
        </h2>

        {/* Flow Diagram Image */}
        <div className="relative h-[200px] sm:h-[300px] md:h-[400px] w-full overflow-hidden bg-white">
  <Image
    src="/images/control-flow-diagram.jpg"
    alt="Energy flow diagram showing system components"
    fill
    priority
    className="object-contain w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
    sizes="100vw"
  />
</div>

        <p className="font-arial text-[15px] leading-[25px] text-black tracking-wider">
          autarxia control hat alles im Griff. Und da gibt es in Ihrem autarxia
          Hybridkraftwerk so einige zu tun: <br className="hidden sm:block" />{" "}
          so müssen zum Beispiel der Oder die Batteriespeicher geregelt werden,
          damit überschüssige Energie gespeichert wer&#8209;den kann und zum
          richtigen Zeitpunkt und mit der richtigen Leistung abgegeben werden
          kann. Sind mehrere Batterie&#8209;speicher vorhanden, müssen diese
          miteinander zu einem virtuellen, größeren Speicher zusammengefasst
          werden. Darüber hinaus steuert autarxia control steuerbare Erzeuger
          Wie Z.B. das autarxia bhkw. so Wird ein strom&#8209; und
          wärme&#8209;geführter Betrieb ermöglicht und das autarxia bhkw kann
          effizient und punktgenau arbeiten. Alle Betriebsdaten werden im
          Sekundentakt erfasst und Sind für das autarxia Servicepersonal per
          Fernzugriff verfügbar.
        </p>
      </div>
    </div>
  );
};

export default ControlDetailsSection;
