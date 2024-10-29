import Image from "next/image";

const UmweltfreundlichkeitSection = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-start space-y-4 md:space-y-5 px-4 sm:px-8 md:px-12 lg:px-20 py-6 md:py-12 bg-[#aad343] min-h-[300px] sm:min-h-[350px] md:min-h-[400px] overflow-y-auto">
          
          {/* Title with Logo */}
          <div className="flex items-center justify-start space-x-3 sm:space-x-5 mb-4 sm:mb-6 md:mb-8">
            {/* Colored squares logo */}
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

export default UmweltfreundlichkeitSection;