import React from "react";
import Image from "next/image";

const StorageBusinessContent = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Title Section */}
      <div className="mb-6 sm:mb-8 lg:mb-12">
        <h1 className="font-caviar text-2xl sm:text-3xl lg:text-[32px] leading-tight tracking-wide mb-1">
          <span className="text-[#FFB800]">autarxia storage business</span>
        </h1>
        <h2 className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-2xl sm:text-3xl lg:text-[38px] tracking-widest">
          <span className="text-[#6E6E6E] font-arial hidden sm:inline">–</span>
          <span className="text-[#6E6E6E] font-arial">
            Hier ist Energie gut aufgehoben!
          </span>
        </h2>
      </div>

      {/* First Section - Text Right, Image Left */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 mb-8 sm:mb-12 lg:mb-16">
        {/* Left Column - Text Content */}
        <div className="space-y-6 sm:space-y-8 text-justify tracking-widest order-2 lg:order-1">
          {/* Engineering Section */}
          <div>
            <h3 className="mb-3 sm:mb-4">
              <span className="font-arial text-base sm:text-lg lg:text-[18px] font-bold text-black">
                Spezialisiertes Ingenieurs-Know-How
              </span>
              <div className="font-arial text-base sm:text-lg lg:text-[18px] font-normal text-black">
                – für Sie verfügbar
              </div>
            </h3>
            <p className="font-arial text-sm sm:text-base lg:text-[15px] leading-relaxed text-black">
              Eine sorgfältige Auslegung eines Energiespeichers ist für ein
              zuverlässiges und kosteneffizientes Energiepro- jekt von großer
              Bedeutung. — Unsere Ingenieure sind hierfür ausgebildet! Als
              erfahrene Diplom-lngenieure begleiten wir Ihr Projekt vom ersten
              Gespräch, über die Planung bis zur Angebotserstellung und
              Umsetzung.
            </p>
            <p className="font-arial text-sm sm:text-base lg:text-[15px] leading-relaxed text-black mt-4">
              Welche Kapazität sollte Ihr Speicher besitzen? Welche
              Entladeleistung muss er haben um Ihre technischen Einrichtungen
              gut zu versorgen? Diese Fragen klären wir im Vorfeld einer
              Installation durch ausführliche Simulationen Ihres Standorts mit
              Hilfe unser Simula- tionssoftware-
            </p>
          </div>

          {/* Das Herzstück Section */}
          <div>
            <h3 className="font-arial text-base sm:text-lg lg:text-[18px] font-bold text-black mb-3 sm:mb-4">
              Das Herzstück Ihrer Energiewende
            </h3>
            <p className="font-arial text-sm sm:text-base lg:text-[15px] leading-relaxed text-black mb-4">
              Mit autarxia storage industry ist ihre wertvolle Energie gut
              aufgehoben! autarxia storage business speichert den erzeugten
              überschüssigen Strom, so dass Sie ihn verbrauchen können, wann
              immer Sie ihn benötigen. So bringt autarxia storage business
              Energieerzeugung und Verbrauch zusammen.
            </p>
            <p className="font-arial text-sm sm:text-base lg:text-[15px] leading-relaxed text-black">
              AIs Herzstück Ihres Hybrid-Kraftwerks speichert au- tarxia storage
              business Strom aus den Photovoltaikan-
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-48 sm:h-64 md:h-80 lg:h-[600px] w-full order-1 lg:order-2">
          <Image
            src="/images/technical-system.jpg"
            alt="Technical system installation"
            fill
            className="object-cover "
            priority
          />
        </div>
      </div>

      {/* Second Section - Image Left, Text Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
        {/* Left Column - Image */}
        <div className="relative h-48 sm:h-64 md:h-80 lg:h-[600px] w-full">
          <Image
            src="/images/storage-unit.jpg"
            alt="Storage cabinet installation"
            fill
            className="object-cover "
            priority
          />
        </div>

        {/* Right Column - Text Content */}
        <div className="space-y-4 text-justify tracking-widest">
          <p className="font-arial text-sm sm:text-base lg:text-[15px] leading-relaxed text-black">
            lagen und den überschüssigen Strom aus dem direkt auf der
            Gleichspannungsseite des Speichers angeschlossenen BHKW. So bleibt
            der Speicher stets optimal gefüllt und minimiert die Laufzeiten und
            den Verschleiß des BHKWs.
          </p>

          <p className="font-arial text-sm sm:text-base lg:text-[15px] leading-relaxed text-black">
            Als Batterietechnologien stehen Ihnen bewährte{" "}
            <span className="">Blei-Batterien</span> oder
            platzsparende{" "}
            <span className="">
              Lithium-Eisenphosphat-Batterien
            </span>{" "}
            zur Verfügung.
          </p>

          <p className="font-arial text-sm sm:text-base lg:text-[15px] leading-relaxed text-black">
            Viele technische Einrichtungen benötigen eine zuverlässige
            Stromversorgung, die auch über einen Ausfall des öffentlichen Netzes
            hinaus zur Verfügung steht. Ihr{" "}
            <span className="">autarxia storage business</span>{" "}
            versorgt Ihre kritische Infrastruktur auch beim Ausfall des
            öffentlichen Netzes. Er kann dabei unterbrechungsfrei zwischen
            netzparallelem und Inselbetrieb hin- und herschalten.
          </p>

          <p className="font-arial text-sm sm:text-base lg:text-[15px] leading-relaxed text-black">
            Der Energiespeicher ist als Containerlösung oder zum Einbau in einen
            elektrischen Anschlussraum verfügbar. Der Leistungsbereich beträgt
            12 bis 45kW mit Kapazitäten zwischen 20 und 200kWh.
          </p>

          <p className="font-arial text-sm sm:text-base lg:text-[15px] leading-relaxed">
            – Sprechen Sie uns an!
          </p>
        </div>
      </div>

      {/* Bottom Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 mt-8 sm:mt-12 lg:mt-20">
        <div className="relative h-48 sm:h-64 md:h-80 lg:h-[600px] w-full">
          <Image
            src="/images/control-system-1.jpg"
            alt="Storage cabinet installation"
            fill
            className="object-cover "
            priority
          />
        </div>
        <div className="relative h-48 sm:h-64 md:h-80 lg:h-[600px] w-full">
          <Image
            src="/images/control-system-2.jpg"
            alt="Storage cabinet installation"
            fill
            className="object-cover "
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default StorageBusinessContent;