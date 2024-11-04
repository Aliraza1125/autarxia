"use client";
import React from "react";
import Image from "next/image";

const AboutUsContent = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      {/* Title Section */}
      <div className="mb-12">
        <h2 className="flex items-center gap-2 text-4xl font-roboto font-light tracking-wide">
          <span className="text-[#00c3f3]">Über uns</span>
          <span className="text-gray-600 font-light">– Wer sind wir?</span>
        </h2>
      </div>

      {/* Team Section */}
      <div className="mb-14">
        <h3 className="text-xl font-roboto font-medium mb-4">Das Team</h3>
        <p className="text-[15px] font-roboto leading-relaxed text-justify tracking-wide">
          Wie sind ein kleines Team engagierter Menschen, die ihre
          unterschiedlichen Fähigkeiten — in den Bereichen{" "}
          <span className="">
            {" "}
            Elektrotechnik, Entwicklung, Marketing und Kommunikation einsetzen,
            um einen Beitrag zu einer nachhaltigen Zukunft zu leisten. Ergänzt
            werden wir durch ein Netzwerk an Ingenieuren, Elektrofachbetrieben,
            Fachhandwerkern im Bereich SHK und Architekten.{" "}
          </span>
        </p>
      </div>

      {/* Founder Section */}
      <div>
        <h3 className="text-xl font-roboto font-medium mb-6">Der Gründer</h3>
        <div className="grid md:grid-cols-2 gap-20">
          {/* Text Column */}
          <div className="text-[15px] font-roboto leading-relaxed text-justify tracking-widest space-y-6">
            <p>
              Mein Name ist Thomas Tschaftary und ich bin seit den 1990er Jahren
              im Bereich der erneuerbaren Energien tätig. Ausschlaggebend für
              meinen Schritt in dieses Feld waren für mich als Elektroingenieur
              damals Reiseerfahrungen im tiefsten Sibirien im Kontext der
              Entwicklungszusammenarbeit. Zu sehen wie die Umgebung einerseits
              kohleverbannt und überseucht roch, und andererseits wegen der
              teuren Energiekosten in vielen der kleinen Hütten selbst die
              einzige Glühbirne nicht brannte. Das hat mich sehr zum Nachdenken
              gebracht. Seitdem beschäftige ich mich mit der Frage, wie Menschen
              – in Deutschland, aber auch weltweit – die Ressourcen ihrer Region
              für die Energiegewinnung nutzbar machen können, um so sowohl
              umweltfreundlich als auch kostengünstig und effizient ihre
              Energieversorgung in die Hand zu nehmen.
            </p>
            <p>
              Inspiriert durch das Sibirien-Erlebnis habe ich meine Fähigkeiten
              zunächst in die Entwicklung von Biomasse-Blockheizkraftwerken zur
              Strom- und Wärmegewinnung gesteckt und war sieben Jahre in diesem
              Bereich als Geschäftsführer eines kleinen mittelständischen
              Unternehmens tätig.
            </p>
         
          </div>

          {/* Image Column */}
          <div className="relative h-[600px] md:h-[500px]">
            <div className="relative w-full h-full ">
              <Image
                src="/images/founder.jpg"
                alt="Thomas Tschaftary - Founder"
                fill
                className="object-cover"
              />
            </div>
           
          </div>
          
        </div>
        <div className="text-[15px] font-roboto leading-relaxed text-justify tracking-widest space-y-6 mt-6">
        <p>
              Seit einigen Jahren mache ich nun meine langjährige Erfahrung <br /> aus
              diversen Entwicklungsabteilungen im Maschinen- und Anlagenbau im
              Rahmen von Entwicklung, Bau und Vertrieb von Photovoltaikanlage,
              Energiespeichern sowie hybriden Kleinkraftwerken nutzbar.
            </p>
            <p>
              Ich bin verheiratet und habe drei Kinder. Neben meiner Tätigkeit
              als Geschäftsführer der Autarxia GmbH, berate ich als Coach
              technologieorientierte Unternehmen und Start-Ups in Deutschland.
              Als Vorstandsvorsitzender der Entwicklungshilfeorganisation
              nehemia team e.V. engagiere ich mich in Entwicklungshilfeprojekten
              in über 11 Ländern.
            </p>
            </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
