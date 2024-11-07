"use client";
import React from "react";
import Image from "next/image";

const SunBusinessContent = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Title Section */}
        <h2 className="text-[#FFB300] text-2xl sm:text-3xl lg:text-4xl font-roboto font-light mb-6 sm:mb-8 lg:mb-12 ml-0 sm:ml-5">
          autarxia sun business
        </h2>

        {/* Specialized Engineering Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-20 mb-8 sm:mb-12 lg:mb-16">
          <div className="relative h-48 sm:h-64 md:h-[300px] w-full overflow-hidden">
  <Image
    src="/images/aerial-pv.jpg"
    alt="Aerial view of solar installation"
    fill
    priority
    className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
            <div>
              <h3 className="text-lg sm:text-xl font-roboto font-medium mb-3 sm:mb-4 text-black">
                Spezialisiertes Ingenieure-Know-How – für Sie verfügbar
              </h3>
              <p className="mb-4 text-sm sm:text-base font-roboto leading-relaxed text-justify">
                Bei der{" "}
                <span className="text-[#FFB300]">
                  Errichtung von Photovoltaikanlagen
                </span>{" "}
                und <span className="text-[#FFB300]">Energiespeichern</span>{" "}
                müssen eine Vielzahl von technischen Regelwerken beachtet
                werden, die mechanische, elektrische und photovoltaische
                Gesichtspunkte behandeln – Ingenieure sind hierfür ausgebildet!
                Als erfahrene Diplom-Ingenieure begleiten wir Ihr Projekt vom
                ersten Gespräch, über die Planung bis zur Angebotserstellung und
                Umsetzung. Bei der Montage ist ein Ingenieur zumindest anwesend
                und unterstützt tatkräftig, um von Anfang an die gewünschte
                Qualität der Anlage sicherzustellen. Auch nach der
                Inbetriebnahme ist der jeweilige Projektingenieur weiterhin für
                Sie als alleiniger Ansprechpartner für Fragen oder Probleme
                verfügbar. – Wie bekommen Sie selber schnellstmöglich Zugang zu
                qualifiziertem Ingenieur-Know-How?
              </p>
            </div>
          </div>
        </div>

        {/* System Planning Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div>
            <h3 className="text-lg sm:text-xl font-roboto font-medium mb-3 sm:mb-4 text-black">
              Anlagenplanung mit Luftbildern und Laser-Messtechnik
            </h3>
            <div className="text-sm sm:text-base font-roboto leading-relaxed text-justify space-y-1">
              <p>
                Eine <span className="text-[#FFB300]">Photovoltaikanlage</span>{" "}
                ist ein komplexes Bauvorhaben. Wollen Sie sich hierbei wirklich
                auf eine aus der Ferne z.B. via Google Maps erstellte
                Modulplanung und Ihrem Dach verlassen? Was passiert, wenn der
                Montagetrupp am Tag der Montage vor Ihrem Dach steht und die
                Anlage nicht darauf Platz findet oder die Dachsparren für die
                Befestigung nicht zur Verfügung stehen? Das passiert leider oft
                genug und lässt sich meist nicht mehr ohne
                Modulleistungsreduzierung oder Nicht-Einhaltung der
                Montageregeln heilen.
              </p>
              <p>
                Wir leben hier eine ganz andere Unternehmenskultur. Einer
                unserer Ingenieure – Vertriebsmitarbeiter gibt es bei uns nicht
                – kommt bei Ihnen vorbei und nimmt Ihren Standort mit den vielen
                notwendigen Details auf. Eine Drohne erstellt Luftbilder ihrer
                Dächer aus der richtigen Perspektive als Grundlage für eine
                realitätsnahe Projektion der geplanten PV Anlage auf Ihr Dach.
                Mit einem professionellen Laser-Messsystem vermessen wir alle
                notwendigen Dachmaße wie Firsthöhe, Dachstuhlneigung,
                Sparrungswinkel, Sparren, Dachständer etc. Nur mit diesen
                Informationen können wir ein sinnvolles Layout sowie eine
                gültige Statikberechnung für das Befestigungssystem der
                PV-Anlage erstellen.
              </p>
              <p>
                Auf Basis dieser Daten bekommen Sie im Angebot bereits eine
                zuverlässige und umsetzbare Planung und können in der Regel Sehr
                sicher sein, dass die Anlage so wie geplant auch auf Ihr Dach
                passt und regelkonform und sturmfest be- festigt werden kann.
                Zudem bekommen Sie einen ersten Eindruck, wie Ihr Dach mit der
                PV•Anlage aussehen Wird und können noch Änderungen vornehmen.
              </p>
            </div>
          </div>
        </div>

        {/* Yield Simulations Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-20 mb-8 sm:mb-12 lg:mb-2">
          <div>
            <h3 className="text-lg sm:text-xl font-roboto font-medium mb-3 sm:mb-4 text-black">
              Ertragssimulationen mit professioneller Simulationssoftware
            </h3>
            <div className="text-sm sm:text-base font-roboto leading-relaxed text-justify space-y-2">
              <p>
                Sie möchten eine{" "}
                <span className="text-[#FFB300]">Photovoltaikanlage</span> für
                Ihren Betrieb installieren. Doch wissen Sie, welche Technologien
                es heute gibt? Wie groß muss diese Anlage sein? Soll sie sicher
                sein? Wieviel Strom wird sie an Ihrem Standort erzeugen können?
                Wie wird sich zukünftig Ihre Stromrechnung reduzieren? Wieviel
                Strom können Sie für Ihren E-Auto Fuhrpark selbst erzeugen? Wann
                wird sich diese Anlage amortisieren? Wieviel CO₂ werden Sie
                einsparen können? Fragen über Fragen.
              </p>
              <p>
                Nun liegen Ihnen vielleicht bereits einige Angebote für
                PV-Anlagen vor- Werden dort Ihre Fragen beantwortet Oder sehen
                Sie lediglich eine Auflistung von Kompo- nenten und einen Preis?
                Was Wird die Anlage nun für Sie bringen und macht eine solch
                große Investition für Sie wirklich Sinn?
              </p>
            </div>
          </div>
          <div className="relative h-48 sm:h-64 md:h-[350px] w-full overflow-hidden">
  <Image
    src="/images/solar-installation.jpg"
    alt="Solar panel installation"
    fill
    priority
    className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
        </div>

        {/* Full width text below */}
        <div className="text-sm sm:text-base leading-relaxed mb-8 sm:mb-12 lg:mb-16 text-justify">
          <p>
            Alle diese Fragen lassen sich im Vorfeld nur klären, wenn im
            Anlagenstandort bestehend aus Standort, Ausrichtungen,
            Flächengrößen, Neigungen, eingesetzte Technologie, Stromverbrauche
            anhand einer Lastgangmessung, Netzanbindarf etc. mit Hilfe von
            professioneller Simulationssoftware simuliert wird. Sie erhalten
            fundierte Aussichten über Ihren zukünftigen Stromverbrauch, die
            zukünftigen Stromkosten und die zu erwartende Einspeisevergütung.
            Wie verändert sich diese Größen, wenn Sie eine größere oder kleinere
            Anlage bauen? Alle diese Grafiken erhalten Sie von unseren
            Ingenieuren auch schon im Vorfeld. – Nun haben Sie eine
            Entscheidungsgrundlage und müssen nicht mehr nur auf die
            Einschätzung eines Vertriebsmitarbeiters vertrauen.
          </p>
        </div>

        {/* Premium Quality Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h3 className="text-lg sm:text-xl font-roboto font-medium mb-3 sm:mb-4 text-black">
            Photovoltaik-Module und Wechselrichter in Premium Qualität
          </h3>
          <div className="text-sm sm:text-base font-roboto leading-relaxed text-justify">
            <p className="mb-4">
              Die Wahl der Photovoltaik-Module sowie des Wechselrichters hat
              einen entscheidenden Ein­fluss auf die Leistungsfähigkeit und
              Langlebigkeit der Anlage. Deshalb legen wir auf die Qualität
              dieser Komponenten einen großen Wert. Hierbei spielen nicht nur
              die Leistung sondern auch Service und Gewährleistungszeiten eine
              Rolle. So können Sie für Ihre autarxia sun business Anlage
              ausschließlich zwischen PV-Modulen von Premium-Herstellern aus
              Fern-Ost oder aus deutscher Produktion wählen. Als Wechselrichter
              ihrer Anlage hat sich die Fa. Fronius als Premium-Hersteller in
              punkto Leistung, Qualität und Service bewährt.
            </p>
          </div>
        </div>

        {/* Facades Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-roboto font-medium mb-3 sm:mb-4 text-black">
            Fassaden und Freiflächenanlagen – Jeder Fläche sollte genutzt
            werden!
          </h3>
          <div className="text-sm sm:text-base font-roboto leading-relaxed text-justify mb-6 sm:mb-8">
            <p>
              Zur Erreichung eines möglichst hohen Autarkiegrad Ihres
              Unternehmens sollten alle zur Verfügung stehenden Flächen zur
              Stromproduktion mit Photovoltaik genutzt werden. Hier kommen neben
              Dachflächen je nach Gegebenheiten auch Gebäudefassaden, Carports
              oder Freiflächen in Frage. Auch für diese speziellen Fälle haben
              die Ingenieure von autarxia das entsprechende Know-How sowie das
              Team für die Umsetzung zur Verfügung. – Sprechen Sie uns an!
            </p>
          </div>
        {/* Bottom Grid Images */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
  {/* Ground Mount Image */}
  <div className="relative h-48 sm:h-64 md:h-[350px] w-full overflow-hidden">
    <Image
      src="/images/ground-mount.jpg"
      alt="Ground mounted solar installation"
      fill
      priority
      className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
      sizes="(max-width: 640px) 100vw, 50vw"
    />
  </div>
  
  {/* Facade Mount Image */}
  <div className="relative h-48 sm:h-64 md:h-[350px] w-full overflow-hidden">
    <Image
      src="/images/facade-mount.jpg"
      alt="Facade mounted solar installation"
      fill
      priority
      className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
      sizes="(max-width: 640px) 100vw, 50vw"
    />
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default SunBusinessContent;
