"use client";
import React, { useState } from "react";

const slides = [
  {
    title: "Zuverlässigkeit",
    content:
      "Die Sonne scheint nicht immer und auch der Wind weht, wo er will. Erneuerbare Energien sind daher schlecht steuerbar und benötigen bis heute die Ergänzung durch konventionelle Energiequellen. Wir stellen uns der Herausforderung einer zuverlässigen und durchgängig CO₂-neutralen Energieversorgung. Wir kombinieren unterschiedliche erneuerbare Energiequellen, wie z.B. Sonne, Wind, Biomasse, Abfallstoffe. Unser autarkes Hybridkraftwerk garantiert Zuverlässigkeit durch die Kombination funktionierender Technik. Photovoltaikanlage, Energiespeicher und Pflanzenblockheizkraftwerk mit optionaler Wärmepumpe bilden ein redundantes System, auf das Sie sich verlassen können!",
    bgColor: "bg-[#00c3f3]",
  },
  {
    title: "Regionalität",
    content:
      "Die Sonne scheint nicht immer und auch der Wind weht, wo er will. Erneuerbare Energien sind daher schlecht steuerbar und benötigen bis heute die Ergänzung durch konventionelle Energiequellen. Wir stellen uns der Herausforderung einer zuverlässigen und durchgängig CO₂-neutralen Energieversorgung. Wir kombinieren unterschiedliche erneuerbare Energiequellen, wie z.B. Sonne, Wind, Biomasse, Abfallstoffe. Unser autarkes Hybridkraftwerk garantiert Zuverlässigkeit durch die Kombination funktionierender Technik. Photovoltaikanlage, Energiespeicher und Pflanzenblockheizkraftwerk mit optionaler Wärmepumpe bilden ein redundantes System, auf das Sie sich verlassen können!",
    bgColor: "bg-[#ffbd1c]",
  },
  {
    title: "Zuverlässigkeit",
    content:
      "Die Sonne scheint nicht immer und auch der Wind weht, wo er will. Erneuerbare Energien sind daher schlecht steuerbar und benötigen bis heute die Ergänzung durch konventionelle Energiequellen. Wir stellen uns der Herausforderung einer zuverlässigen und durchgängig CO₂-neutralen Energieversorgung. Wir kombinieren unterschiedliche erneuerbare Energiequellen, wie z.B. Sonne, Wind, Biomasse, Abfallstoffe. Unser autarkes Hybridkraftwerk garantiert Zuverlässigkeit durch die Kombination funktionierender Technik. Photovoltaikanlage, Energiespeicher und Pflanzenblockheizkraftwerk mit optionaler Wärmepumpe bilden ein redundantes System, auf das Sie sich verlassen können!",
    bgColor: "bg-[#00c3f3]",
  },
];

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const ContentSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const isLastSlide = currentSlide === slides.length - 1;

  return (
    <div className="relative w-full">
      {/* Border top */}
      <div className="w-full h-[1px]" />

      <div className="py-4 sm:py-5 md:py-6 bg-[#dddede]">
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          <div className="absolute inset-0 flex">
            {/* Current Slide */}
            <div
              className={`relative ${
                isLastSlide ? "w-full" : "w-full md:w-[80%]"
              } h-full transition-all duration-500 ease-in-out overflow-hidden`}
            >
              <div
                className={`absolute inset-0 ${slides[currentSlide].bgColor} p-4 sm:p-8 md:p-16 lg:p-24 flex flex-col transition-all duration-500 ease-in-out`}
              >
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rotate-45 bg-white" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-white font-light">
                    {slides[currentSlide].title}
                  </h2>
                </div>
                <p className="text-white text-sm sm:text-base md:text-lg text-justify leading-relaxed overflow-y-auto md:overflow-y-visible">
                  {slides[currentSlide].content}
                </p>
              </div>
            </div>

            {/* Next Slide Preview - Hidden on mobile, visible from md breakpoint */}
            {!isLastSlide && (
              <div className="hidden md:block relative w-[20%] h-full overflow-hidden">
                <div
                  className={`absolute inset-0 ${
                    slides[(currentSlide + 1) % slides.length].bgColor
                  } p-16 lg:p-24 flex flex-col`}
                  style={{ width: "500%", marginRight: "-400%" }}
                >
                  <div className="flex items-center gap-8 mb-8">
                    <div className="w-8 h-8 rotate-45 bg-white" />
                    <h2 className="text-4xl lg:text-[48px] text-white font-light">
                      {slides[(currentSlide + 1) % slides.length].title}
                    </h2>
                  </div>
                  <p className="text-white text-lg text-justify leading-relaxed">
                    {slides[(currentSlide + 1) % slides.length].content}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/20 text-white p-1 sm:p-2 h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/20 text-white p-1 sm:p-2 h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      {/* Border bottom */}
      <div className="w-full h-[1px] bg-[#dddede]" />
    </div>
  );
};

export default ContentSlider;