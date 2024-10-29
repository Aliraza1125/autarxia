import Image from "next/image";

const EobilitatSection = () => {
    return (
      <section className="w-full bg-white py-8 md:py-12 lg:py-16">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="border-2 border-black px-4 sm:px-8 md:px-12 lg:px-20 py-6 md:py-8 min-h-[400px] md:min-h-[450px] lg:h-[500px] overflow-y-auto">
            {/* Title with Logo */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-3 space-y-3 sm:space-y-0 mb-6 md:mb-8">
              {/* Colored squares logo */}
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
  
  export default EobilitatSection;