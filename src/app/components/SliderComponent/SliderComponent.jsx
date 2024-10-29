'use client'
import React from 'react';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// Individual section components
const EobilitatSection = () => {
  return (
    <section className="w-full bg-white py-6 md:py-12 lg:py-16">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="border-2 border-black px-4 sm:px-8 md:px-12 lg:px-20 py-6 md:py-8 h-[500px] overflow-y-auto">
          {/* Title with Logo */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-3 space-y-3 sm:space-y-0 mb-6 md:mb-8">
            <Image
              src="/images/logo.png"
              alt="Autarxia Logo"
              width={34}
              height={34}
              className="w-8 h-8 md:w-[34px] md:h-[34px]"
            />
            <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-roboto font-light text-[#333333] tracking-wider text-center sm:text-left">
              Eobilität: Ein neues Denken!
            </h2>
          </div>
          {/* Quote */}
          <div className="text-center mb-6 md:mb-8 tracking-wider px-2">
            <p className="text-sm md:text-[16px] font-roboto font-light italic mb-2">
              "Die reinste Form des Wahnsinns ist es, alles beim Alten zu belassen und zu hoffen,
              <br className="hidden sm:block" />
              dass sich etwas ändert"
            </p>
            <p className="text-sm md:text-[16px] font-roboto">
              Albert Einstein
            </p>
          </div>
          {/* Main Text */}
          <p className="text-sm md:text-[16px] font-roboto font-light leading-relaxed text-left sm:text-justify tracking-[0.5px] md:tracking-[1px] px-2">
            Das haben wir uns zu Herzen genommen! Unser neu gedachtes{" "}
            <span className="">autarxia Hybridkraftwerk</span> bringt nicht nur{" "}
            <span className="">Photovoltaikanlage</span>,{" "}
            <span className="">Energiespeicher</span> und{" "}
            <span className="">Pflanzenölblockheizkraftwerke</span>{" "}
            in einer einzigen, zeitgemäßen Energielösung zusammen, sondern vereint auch{" "}
            <span className="">Umweltfreundlichkeit</span>,{" "}
            <span className="">Regionalität</span>,{" "}
            <span className="">Autarkie</span> und{" "}
            <span className="">Zuverlässigkeit</span>! Diese Kombination nennen wir{" "}
            <span className="">Eobilität</span>. Wir sind überzeugt, dass eobile Produkte
            unsere Zukunft ein Stück besser machen werden!
          </p>
        </div>
      </div>
    </section>
  );
};

const AutarkieSection = () => {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-start space-y-4 md:space-y-5 px-4 sm:px-8 md:px-12 lg:px-20 py-6 md:py-12 bg-[#262963] h-[500px] overflow-y-auto">
          {/* Title with Logo */}
          <div className="flex items-center justify-start space-x-3 sm:space-x-5 mb-4 sm:mb-6 md:mb-8">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rotate-45 bg-white ml-0.5 sm:ml-1" />
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-roboto font-light text-white tracking-[1px] sm:tracking-[2px]">
              Autarkie
            </h2>
          </div>
          {/* Main Text */}
          <p className="text-sm md:text-[16px] font-roboto font-light leading-relaxed text-left sm:text-justify text-white tracking-wide md:tracking-wider">
            In Zeiten der politischen Globalisierung werden Entscheidungen meist „von oben nach unten" getroffen. 
            Lobbyinteressen und Profit werden auch vor dem Feld der Energieversorgung keine Halt. Mit dem autarxia Hybridkraftwerk beschreiten wir neue Wege der Stromerzeugung und nehmen unsere Energieversorgung selbst in die Hand. In kleinen Schritten über die Autarkie als Insellösung bis hin zur Netzparallelen Energieversorgung!
          </p>
        </div>
      </div>
    </section>
  );
};

const UmweltfreundlichkeitSection = () => {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-start space-y-4 md:space-y-5 px-4 sm:px-8 md:px-12 lg:px-20 py-6 md:py-12 bg-[#aad343] h-[500px] overflow-y-auto">
          {/* Title with Logo */}
          <div className="flex items-center justify-start space-x-3 sm:space-x-5 mb-4 sm:mb-6 md:mb-8">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rotate-45 bg-white ml-0.5 sm:ml-1" />
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-roboto font-light text-white tracking-[1px] sm:tracking-[2px]">
              Umweltfreundlichkeit
            </h2>
          </div>
          {/* Main Text */}
          <p className="text-sm md:text-[16px] font-roboto font-light leading-relaxed text-left sm:text-justify text-white tracking-wide md:tracking-wider">
            Wenn alle Menschen so leben würden wie wir in Deutschland, bräuchten wir 3 Erden. Wir verbrauchen 
            die darin vorkommenden Rohstoffe in die Wirtschaft steuern, versteckte CO₂-Komponenten bedeuten fossile 
            Freundlichkeit für uns heißt in der Energieversorgung kein neues CO₂ mehr in die Atmosphäre auszustoßen. 
            Durch die Kombination der Energiequellen Sonne und Pflanzenöl ermöglicht das autarxia Hybridkraftwerk 
            einen Weg hin zu einem versorgungssicheren und enkeltauglichen Energieversorgungskonzept – heute und morgen.
          </p>
        </div>
      </div>
    </section>
  );
};

const RegionalitatSection = () => {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-start space-y-4 md:space-y-5 px-4 sm:px-8 md:px-12 lg:px-20 py-6 md:py-12 bg-[#00bfee] h-[500px] overflow-y-auto">
          {/* Title with Logo */}
          <div className="flex items-center justify-start space-x-3 sm:space-x-5 mb-4 sm:mb-6 md:mb-8">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rotate-45 bg-white ml-0.5 sm:ml-1" />
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-roboto font-light text-white tracking-[1px] sm:tracking-[2px]">
              Regionalität
            </h2>
          </div>
          {/* Main Text */}
          <p className="text-sm md:text-[16px] font-roboto font-light leading-relaxed text-left sm:text-justify text-white tracking-wide md:tracking-wider">
            Die Globalisierung macht auch vor der erneuerbaren Energien nicht halt um globale weite wie bei Bio 
            Agrar oder Spirituelle denken wir radikal neu das im globalen Sinnen sehen durch photovoltaik und Co 
            Nachhaltigkeit. Eine die lokale Produktion von Strom und Wärme der Ort des Verbrauchs kann künftig 
            Neubau oder bei einen bisher teil oder autarxia Hybridkraftwerk oder die alles was er für eine nachhaltige 
            in jeweils Person Leben die in Weite haben Region.
          </p>
        </div>
      </div>
    </section>
  );
};

// Main Carousel Component
const SliderComponent  = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Carousel {...settings}>
      <EobilitatSection />
      <AutarkieSection />
      <UmweltfreundlichkeitSection />
      <RegionalitatSection />
    </Carousel>
  );
};

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-20 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-300 rounded-full p-2 opacity-75 hover:bg-gray-500"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-20 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-300 rounded-full p-2 opacity-75 hover:bg-gray-500"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

export default SliderComponent ;
