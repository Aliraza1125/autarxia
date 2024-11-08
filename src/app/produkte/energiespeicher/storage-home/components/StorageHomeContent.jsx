"use client";
import React from "react";
import Image from "next/image";

const StorageHomeContent = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
      {/* Title Section */}
      <div className="mb-8 sm:mb-12">
        <h2 className="flex flex-col items-start gap-2">
          <span className="text-[#FFB300] text-2xl sm:text-3xl lg:text-[34px] font-mono font-light tracking-normal sm:tracking-widest">
            autarxia storage home
          </span>
          <span className="text-[#887c93] text-2xl sm:text-3xl lg:text-[38px] font-minion font-light tracking-wide">
            – Hier ist Energie gut aufgehoben!
          </span>
        </h2>
      </div>

      {/* First Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 mb-8 sm:mb-12 lg:mb-16">
        {/* Main Image - Order changes on mobile */}
        <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[600px] w-full overflow-hidden order-1">
          <Image
            src="/images/storage-system-image.jpg"
            alt="Storage System"
            fill
            priority
            className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6 sm:space-y-8 order-2">
          {/* Engineering Know-How Section */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-arial text-base sm:text-[18px] font-bold text-black">
              Spezialisiertes Ingenieure-Know-How
              <br />– für Sie verfügbar
            </h3>
            <p className="font-arial text-[15px] leading-[25px] text-justify tracking-wide">
              Eine sorgfältige Auslegung eines Energiespeichers ist für ein
              zweckmäßiges und kosteneffizientes Energie&#8209;pro&#8209;jekt
              von großer Bedeutung. – Unsere Ingenieure sind hierfür
              ausgebildet! Als erfah&#8209;rene Diplom&#8209;Ingenieure
              begleiten wir Ihr Projekt vom ersten Gespräch, über die Planung
              bis zur Angebotserstellung und Umsetzung. Welche Kapazität sollte
              Ihr Speicher besitzen? Welche Entladeleistung muss er haben? Und
              die wichtigste Frage: Welcher Autarkiegrad kann mit der Anlage
              er&#8209;reicht werden, d.h. welchen Anteil des verbrauchten
              Stroms können Sie mit der Anlage selbst bereitstellen? Diese
              Fragen klären wir im Vorfeld einer Installation durch ausführliche
              Simulationen Ihres Standorts mit Hilfe unser Simulationssoftware.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-arial text-base sm:text-[18px] font-bold text-black">
              Das Herzstück Ihrer Energiewende
            </h3>
            <p className="font-arial text-[15px] leading-[25px] text-justify tracking-wide">
              Mit <span className="">autarxia storage home</span> ist Ihre
              wertvolle Energie gut aufgehoben!{" "}
              <span className="">autarxia storage home</span> speichert den
              erzeugten überschüssigen Strom, so dass Sie ihn ver&#8209;
              brauchen können, wann immer Sie ihn benötigen. So bringt{" "}
              <span className="">autarxia storage home</span> Energieerzeugung
              und Verbrauch zusammen. Als Batterietechnologien stehen Ihnen
              bewährte Blei&#8209;Batterien oder platzsparende
              Lithium&#8209;Eisenphosphat&#8209;Batterien zur Verfügung.
            </p>
          </div>
        </div>
      </div>

      {/* Second Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="space-y-6 sm:space-y-8 order-2 md:order-1">
          <h3 className="font-arial text-base sm:text-[18px] font-bold text-black">
            Ersatzstrom bei Ausfall des öffentlichen Netzes
          </h3>
          <p className="font-arial text-[15px] leading-[25px] text-justify tracking-wide">
            Wussten Sie, dass herkömmliche Photovoltaikanla&#8209;ge mit
            Batteriespeicher beim Ausfall des öffentlichen Netzes nicht
            funktionsfähig sind? Da haben Sie viel Geld investiert und sitzen
            bei Stromausfall dennoch auf dem Trockenen.
           <br />
            Mit <span className="">autarxia sun</span>™ Anlagen ist das anders.
            Hier sind alle Anlagen ersatzstromfähig, es sei denn, Sie
            ver&#8209;zichten auf diese Funktion. Wählen Sie zwischen
            ver&#8209;schiedene Optionen:
          </p>

          <ul className="space-y-4 font-arial text-[15px] leading-[25px] text-justify tracking-wide">
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-[#00c3f3] font-bold mt-1.5">-</span>
              <p>
                kostengünstige Notstrom&#8209;Steckdosen – Bei
                Strom&#8209;ausfall können Sie einzelne Verbraucher mit Strom
                aus der Photovoltaikanlage oder dem Speicher versorgen
              </p>
            </li>

            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-[#00c3f3] font-bold mt-1.5">-</span>
              <p>
                Versorgung Ihres gesamten Hauses oder einiger Verbraucher mit
                Hilfe Ihrer Photovoltaikanlage. Der Ersatzstrom wird ca. 30
                Sekunden nach dem Strom&#8209;ausfall bereitgestellt.
              </p>
            </li>

            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-[#00c3f3] font-bold mt-1.5">-</span>
              <p>
                Versorgung Ihres gesamten Hauses oder einiger Verbraucher mit
                Hilfe Ihrer Photovoltaikanlage. Der Ersatzstrom wird
                unterbrechungsfrei nach dem Stromausfall bereitgestellt, d.h.
                Sie bemerken den Stromausfall u.U. gar nicht. Sofern
                Photovol&#8209;taik und Batterie&#8209;spei&#8209;cher nicht
                genügend Energie bereitstellen können, kann optional ein
                Notstromagg&#8209;regat integriert werden.
<br />
                Bei ausreichend großer Anlage ist auch ein dauer&#8209;hafter
            Betrieb ohne öffentliches Stromnetz möglich.
              </p>
            </li>
          </ul>

         
        </div>

        {/* Images Column */}
        <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full overflow-hidden">
            <Image
              src="/images/backup-power1.png"
              alt="Storage System Installation"
              fill
              className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative h-[150px] sm:h-[200px] md:h-[300px] w-[30%] md:w-[30%] overflow-hidden">
            <Image
              src="/images/backup-power2.png"
              alt="Storage System Components"
              fill
              className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
              sizes="(max-width: 768px) 100vw, 15vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorageHomeContent;