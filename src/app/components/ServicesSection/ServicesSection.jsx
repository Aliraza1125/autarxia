const ServicesSection = () => {
  return (
    <section className="w-full bg-white py-6 sm:py-10 md:py-12 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
        <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-roboto font-medium text-[#333333] mb-4 sm:mb-6 lg:mb-8">
          Was bieten wir Ihnen?
        </h2>

        <div className="space-y-4 sm:space-y-3 lg:space-y-1 text-[14px] sm:text-[15px] lg:text-[16px] font-roboto font-light text-justify leading-relaxed text-[#333333] tracking-wider">
          <p>
            autarxia bietet Ihnen aus einer Hand ein neuartiges Baukastensystem aus verschiedenen Komponenten: Photovoltaik-Anlagen, Strom- und Wärmespeicher, Wärmepumpen sowie Mini-Blockheizkraftwerke Mini-Blockheizkraftwerke auf der Basis unterschiedlicher Energieträger, z.B. Pflanzenöl oder Altfett.
          </p>

          <p>
            Selbstverständlich können Sie jede Komponente auch einzeln einsetzen, jedoch entfaltet nur die Kombination aus
            <span className=""> Photo­voltaik</span>,
            <span className=""> Stromspeicher</span> und
            <span className=""> Blockheizkraftwerk</span> evtl. in Kombination mit einer
            <span className=""> Wärmepumpe</span> entscheidende Vorteile und eine hohe Autarkie.
          </p>

          <p>
            Dabei haben wir immer Ihre maximal mögliche Strom-Autarkie im Blick. Deshalb bieten wir Ihnen alle Komponenten als Inselsystem oder als netzparallele Ergänzung zum öffentlichen Netz an. Und das Beste: Sie werden den Wechsel zwischen Inselsystem und netzparallelem Betrieb gar nicht bemerken – er passiert unterbrechungsfrei und automatisch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;