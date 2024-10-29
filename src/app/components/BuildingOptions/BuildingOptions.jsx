import Image from "next/image";

const BuildingOptions = () => {
  return (
    <section className="w-full bg-white">
      {/* Top Border */}
      <div className="w-full h-2 md:h-[15px] bg-[#dddede]" />      
      
      <div className="py-8 md:py-12 lg:py-16">
        <div className="px-4 md:px-8 lg:px-20">
          {/* Title and Options */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-base md:text-[18px] font-roboto font-semibold text-[#333333] mb-3 md:mb-4">
              Umsetzungsvarianten
            </h3>

            <p className="text-sm md:text-[16px] font-roboto font-light leading-relaxed text-[#333333] mb-3 md:mb-4">
              Ob Ein- oder Mehrfamilienhaus oder Gewerbebetrieb – autarxia hat die
              passende Energielösung parat.
              <br className="hidden md:block" />
              Unten finden Sie einige Varianten – Bitte machen Sie Angaben über
              das zu versorgende Objekt:
            </p>

            {/* Radio Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center mt-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="buildingType"
                  className="form-radio w-5 h-5 md:w-7 md:h-7 appearance-none border-2 border-[#b8da60]
                  checked:bg-[#b8da60] rounded-full"
                />
                <span className="text-sm md:text-[16px] font-roboto">
                  Ein- oder Mehrfamilienhaus
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="buildingType"
                  className="form-radio w-5 h-5 md:w-7 md:h-7 appearance-none border-2 border-[#b8da60] checked:bg-[#b8da60] rounded-full"
                />
                <span className="text-sm md:text-[16px] font-roboto">
                  Gewerbebetrieb
                </span>
              </label>
            </div>
          </div>

          {/* Graph Image */}
          <div className="relative w-full mt-6 md:mt-8">
            <Image
              src="/images/building-graph.png"
              alt="Autarxia Building Solutions Graph"
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="w-full h-2 md:h-[15px] bg-[#dddede]" />   
    </section>
  );
};

export default BuildingOptions;