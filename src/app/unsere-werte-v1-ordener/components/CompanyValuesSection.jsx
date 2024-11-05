"use client";
import React from "react";
import Image from "next/image";

const CompanyValuesSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16">
      {/* Title Section */}
      <div className="mb-8 sm:mb-12">
        <h2 className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3 text-3xl sm:text-4xl font-roboto font-light">
          <span className="text-[#00c3f3]">Über uns</span>
          <span className="text-gray-500">– Unsere Werte</span>
        </h2>
      </div>

      {/* Eobil Section */}
      <div className="mb-8 sm:mb-12">
        <h3 className="text-xl font-roboto font-medium mb-3 sm:mb-4">
          Eobil denken
        </h3>
        <p className="text-[15px] font-roboto leading-relaxed text-justify tracking-wide">
          Als Team haben wir uns auf den Weg gemacht, zu entdecken, welcher
          Perspektivwechsel heute im Bereich der erneuerbaren Energien notwendig
          ist, um einen Systemwandel hin zu einer umweltfreundlichen,
          regionalen, autarken und zuverlässigen Zukunft der Energieversorgung
          zu erreichen. Diesen Perspektivwechsel nennen wir{" "}
          <span className="text-[#aad343]">Eobilität</span>.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
        {/* Left Column - Philosophy */}
        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-xl font-roboto font-medium">
            Unsere Unternehmensphilosophie
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-[#aad343] font-medium mb-2">Verantwortung</h4>
              <p className="text-[15px] font-roboto leading-relaxed text-justify tracking-wide">
                Wir wollen Verantwortung für unser Handeln und für unsere Umwelt
                übernehmen, um unsere Welt auch für die nächsten Generationen
                lebenswert zu machen.
              </p>
            </div>

            <div>
              <h4 className="text-[#aad343] font-medium mb-2">Rücksicht</h4>
              <p className="text-[15px] font-roboto leading-relaxed text-justify tracking-wide">
                Wir wollen genügsam leben und die Ressourcen nutzen, die uns
                regional zur Verfügung stehen – und das aus Rücksicht gegenüber
                unseren Mitmenschen weltweit.
              </p>
            </div>

            <div>
              <h4 className="text-[#aad343] font-medium mb-2">Freiheit</h4>
              <p className="text-[15px] font-roboto leading-relaxed text-justify tracking-wide">
                Wir wollen frei sein und in Selbstbestimmtheit unser Leben in
                die Hand nehmen.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Logo & Image */}
        <div className="space-y-6 sm:space-y-8">
          {/* Eobil Logo */}
          <div className="flex justify-center sm:justify-center items-start mb-6 sm:mb-12">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-3xl sm:text-[36px] font-caviar text-black tracking-wider">
                eobil
              </span>
              <div className="flex items-center gap-1">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rotate-45 bg-[#ffbd1c]" />
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rotate-45 bg-[#aad343]" />
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rotate-45 bg-[#262963]" />
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rotate-45 bg-[#00c3f3]" />
              </div>
            </div>
          </div>

          {/* Sticky Notes Image */}
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full">
            <Image
              src="/images/sticky-notes.jpg"
              alt="Our Values Sticky Notes"
              fill
              className="object-cover "
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="mt-6 sm:mt-8">
        <h4 className="text-[#00c3f3] font-medium mb-2">Vertrauen</h4>
        <p className="text-[15px] font-roboto leading-relaxed text-justify tracking-wide">
          Wir wollen unserem Produkt, uns selbst und anderen vertrauen können
          und aus diesem Vertrauen über uns selbst hinauswachsen.
        </p>
      </div>
    </div>
  );
};

export default CompanyValuesSection;