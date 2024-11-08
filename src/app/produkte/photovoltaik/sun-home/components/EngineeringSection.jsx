"use client";
import React from "react";
import Image from "next/image";
const EngineeringSection = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-20 bg-white text-justify">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h1 className="font-caviar text-[#FFA500] text-3xl mb-12">
          autarxia sun home
        </h1>

        {/* Specialized Engineering Section */}
        <div className="mb-12">
          <h2 className="font-arial text-xl font-bold mb-6 text-black">
            Spezialisiertes Ingenieur-Know-How – für Sie verfügbar
          </h2>
          <p className="font-roboto text-base leading-relaxed text-black">
            Bei der Errichtung von <span className="">Photovoltaikanlagen</span>{" "}
            und <span className="">Energiespeichern</span> müssen eine Vielzahl
            von <span className="">technischen Regelwerken</span> beachtet
            werden, die mechanische, elektrische und photovoltaische
            Gesichtspunkte behandeln – Ingenieure sind hier­für ausgebildet! Als
            erfahrene Diplom-Ingenieure begleiten wir Ihr Projekt vom ersten
            Gespräch, über die Planung bis zur Angebotserstellung und Umsetzung.
            Bei der Montage ist ein Ingenieur zumeist anwesend und unterstützt
            tatkräftig, um von Anfang an die gewünschte Qualität der Anlage
            sicherzustellen. Auch nach der Inbetriebnahme ist der jeweilige
            Projektingenieur weiterhin für Sie als alleiniger Ansprechpartner
            für Fragen oder Probleme verfügbar. – Wo bekommen Sie anderweitig
            einen solchen Zugang zu qualifiziertem Ingenieur-Know How?
          </p>
        </div>

        {/* Planning with Aerial Images Section */}
        <div className="grid md:grid-cols-2 gap-20">
          <div className="pr-8">
            <h2 className="font-arial text-xl  mb-6 text-black font-bold ">
              Anlagenplanung mit Luftbildern und
              <br />
              Laser-Messtechnik
            </h2>
            <div className="font-roboto text-base leading-[25px] tracking-wider text-black ">
              <p>
                Eine <span className="">Photovoltaikanlage</span> ist ein{" "}
                <span className="">komplexes</span> Bauvorhaben.
              </p>
              <p>
                Wollen Sie sich hierbei wirklich auf eine aus der Ferne z.B. via
                Google Maps erstellte Modulplanung auf Ihrem Dach verlassen? Was
                passiert, wenn der Montagetrupp am Tag der Montage vor Ihrem
                Dach steht und die Anla­ge nicht darauf Platz findet oder die
                Dachsparren für die Befestigung nicht zur Verfügung stehen? Das
                passiert leider oft genug und lässt sich meist nicht mehr ohne
                Modulleistungsreduzierung oder Nicht-Einhaltung der
                Montageregeln heilen.
              </p>
            </div>
          </div>
          <div className="relative h-48 sm:h-64 md:h-[270px] w-full overflow-hidden">
            <Image
              src="/images/Luftbild_sun.jpg"
              alt="Aerial view of solar panel installation"
              fill
              priority
              className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="font-roboto text-base leading-[25px] tracking-wider text-black space-y-1">
          <p className="">
            Wir leben hier eine ganz andere Unternehmenskultur: Ei­ner unserer{" "}
            <span className="">Ingenieure</span> –
            Vertriebsmitarbeiter gibt es bei uns nicht – kommt bei Ihnen vorbei
            und nimmt Ihren Standort mit den vielen notwendigen Details auf.
            Eine Drohne erstellt Luftbilder Ihrer Dächer aus der richtigen
            Perspektive als Grundlage für eine maßstabliche Projektion der
            geplanten PV-Anlage auf Ihr Dach. Mit einem professionellen
            Laser-Messsystem vermessen wir alle notwendigen Dachmaße wie
            Firstlänge, Dachschrägenlänge, Neigungswinkel, Sparren, Störobjekte
            etc. Nur mit diesen Informationen können wir ein sinnvolles Layout
            sowie eine gültige Statikberechnung für das Befestigungssystem der
            PV-Anlage erstellen.
          </p>
          <p>
            Auf Basis dieser Daten bekommen Sie im Angebot bereits eine
            zuverlässige und umsetzbare Planung und können in der Regel sehr
            sicher sein, dass die Anlage so wie geplant auch auf Ihr Dach passt
            und regelkonform und sturmfest be­festigt werden kann. Zudem
            bekommen Sie einen ersten Eindruck, wie Ihr Dach mit der PV-Anlage
            aussehen wird und können noch Änderungen vornehmen.
          </p>
        </div>
        {/* Yield Simulations Section */}
        <div className="mt-16">
          <h2 className="font-arial text-xl mb-6 text-black font-bold">
            Ertragssimulationen mit professioneller Simulationssoftware
          </h2>
          <div className="font-roboto text-base leading-[25px] tracking-wider text-black space-y-1">
            <p>
              Sie möchten eine Photovoltaikanlage installieren. Doch wissen Sie,
              welche Technologien es heute gibt? Wie groß muss diese Anlage samt
              Speicher sein? Wieviel Strom wird sie an Ihrem Standort erzeugen?
              Wieviel werden Sie davon selbst nutzen können? Wie wird sich
              zukünftig Ihre Stromrechnung reduzieren? Wieviel Strom können Sie
              für Ihr E-Auto selbst erzeugen? Wann wird sich diese Anlage
              amortisieren? Wieviel Strom werde ich einspeisen können? Kann ich
              mit dem PV-Strom heizen? Wie wirkt sich eine Verschattung aus?
              Fragen über Fragen...
            </p>
            <p>
              Nun liegen Ihnen vielleicht bereits einige Angebote für PV-Anlagen
              vor. Werden dort Ihre Fragen beantwortet oder sehen Sie lediglich
              eine Auflistung von Komponenten und einen Preis? Was wird die
              Anlage nun für Sie bringen und macht eine solch große Investition
              für Sie wirklich Sinn?
            </p>
            <p>
              Alle diese Fragen lassen sich im Vorfeld nur klären, wenn Ihr
              Anlagenstandort, bestehend aus Standort, Ausrichtungen,
              Flächengrößen, Neigungen, eingesetzte Technologie, Stromverbrauch,
              Bewohneranzahl, Fahrtkilometer, Ladezeiten, Not­strombedarf etc.
              mit Hilfe von professioneller Simulationssoftware simuliert wird.
              Sie erhalten fundierte Abschätzungen über Ihren Autarkiegrad und
              Eigenverbrauch, die zukünftigen Stromkosten, und die zu
              erwartenden Einspeiseerlöse. Wie verändern sich diese Größen, wenn
              Sie eine größere oder kleinere Anlage bauen? Alle diese Antworten
              erhalten Sie von unseren Ingenieuren auch schon im Vorfeld. – Nun
              haben Sie eine Entscheidungsgrundlage und müssen nicht mehr nur
              auf die Einschätzung eines Vertriebsmitarbeiters vertrauen.
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-9 pr-8">
            <h2 className="font-arial text-xl mb-6 text-black font-bold">
              Photovoltaik-Module und Wechselrichter in Premium Qualität
            </h2>
            <div className="font-roboto text-base leading-[25px] tracking-wider text-black">
              <p>
                Die Wahl der Photovoltaik-Module sowie des Wechselrichters hat
                einen entscheidenden Ein­fluss auf die Leistungsfähigkeit und
                Langlebigkeit der Anlage. Deshalb legen wir auf die Qua­lität
                dieser Komponenten einen großen Wert. Hierbei spielen nicht nur
                die Leistung sondern auch Service und Gewährleistungszeiten eine
                Rolle. So können Sie für Ihre autarxia sun Photo­voltaikanlage
                zwischen PV-Modulen von Premium-Herstellern aus Fern-Ost oder
                aus deutscher Produktion wählen. Als Wechselrichter Ihrer Anlage
                hat sich die Fa. Fronius als Premium-Her­steller in punkto
                Leistung, Qualität und Service bewährt.
              </p>
            </div>
          </div>
          <div className="md:col-span-3 relative h-48 sm:h-64 md:h-[300px] w-full overflow-hidden">
            <Image
              src="/images/inverter.jpg"
              alt="Premium quality inverter installation"
              fill
              priority
              className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>
        </div>
        {/* Module Mounting Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5 space-y-6">
            <div className="relative h-48 sm:h-64 md:h-[300px] w-full overflow-hidden mb-4">
              <Image
                src="/images/tile-mount-1.jpg"
                alt="Roof tile mounting detail - top view"
                fill
                priority
                className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="relative h-48 sm:h-64 md:h-[300px] w-full overflow-hidden">
              <Image
                src="/images/tile-mount-2.jpg"
                alt="Roof tile mounting detail - close up"
                fill
                priority
                className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="md:col-span-7 pl-12">
            <h2 className="font-arial text-xl mb-6 text-black font-bold">
              Modulmontage ohne „Ziegel-Flexen"
            </h2>
            <div className="font-roboto text-base leading-[25px] tracking-wider text-black space-y-2 ">
              <p>
                Die überwiegende Anzahl der PV-Anlagen auf privaten Dächern wird
                mit Hilfe von Dachhaken montiert, welche in den Dachsparren
                hineingeschraubt werden. Damit der Dachhaken zwischen den
                Ziegeln durchgeführt werden kann, muss in die meisten Ziegel ein
                entsprechender Kanal gefräst werden.
              </p>
              <p>
                Zum Einen wird der Ziegel durch die Ausfräsung geschwächt und
                zum Anderen besteht die Gefahr, dass der Dachhaken bei hoher
                Sturm- oder Schneelast den unterhalb des Dachhakens liegenden
                Ziegel bricht. Dies könnte bei nicht fachgerechter Montage des
                Hakens zu Undichtigkeiten des Daches führen.
              </p>
              <p>
                Dieses „Ausflexen" der Ziegel ist zwar offiziell noch erlaubt
                jedoch in­zwischen umstritten. Aus diesem Grund bemühen wir uns
                die PV-Anlage ohne Flexen der Ziegel auf dem Dach zu montieren.
                Hierzu kommen verschiedene Ausführungen von Blechziegeln zum
                Einsatz, welche den unterhalb des Dachhakens liegenden Ziegel
                ersetzen. Somit ist ein Ziegelbruch ausgeschlossen. Zudem wird
                der Dachhaken im „Berg" des Ziegels montiert, so dass auch das
                „Ausflexen" des oberen Ziegels entfällt. Eine flexible
                Abdichtung unterhalb des oberen Ziegels verhindert den Wasser-
                oder Schneeeintrag unter das Dach bei Sturmereignissen.
              </p>
              <p className="text-sm italic">Quelle: prokusol</p>
            </div>
          </div>
        </div>
        {/* Network Implementation Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-6">
            <h2 className="font-arial text-xl mb-6 text-black font-bold">
              Schlüsselfertige Umsetzung im Netzwerk
              <br />
              von Fachbetrieben
            </h2>
            <div className="font-roboto text-base leading-[25px] tracking-wider text-black space-y-1">
              <p>
                Besonders große Solarteur-Betriebe erwecken oft den Anschein die
                Projekte mit eigenen Montage-Mitarbeitern umzusetzen. Jedoch
                sind dies oft von Verleihfirmen zum Festpreis zugeteilte Teams
                aus mehr oder weniger ge­lernten Arbeitern, welche im Namen des
                Unternehmens auftreten. Der Zeitdruck auf der Baustelle ist oft
                hoch. Zudem müssen die Arbeiter meist einen geringen
                Stun­denlohn sowie unangenehme Übernachtungen vor Ort in Kauf
                nehmen. Auf das Dach kommt die Anlage sicher­lich. Die Frage ist
                nur wie fachmännisch die Arbeiten da­bei ausge­führt werden.
              </p>
              <p>
                Andere Solarteur-Unternehmen beschäftigen eigenes Personal. Hier
                sind die Arbeitsbedingungen oft sehr viel besser und das
                Personal gut qualifiziert. Eigenes Perso­nal zwingt jedoch auch,
                die Auslastung des Unterneh­mens ständig hoch zu halten, damit
                das Personal auch in der Schlechtwetterperiode finanziert werden
                kann.
              </p>
              <p>
                Auch Elektrounternehmen bieten oft PV-Anlagen an­schließlich ja
                auch. Die Arbeit ist ja auch elektrisch. Hier gibt es von den
                Großhändlern fertige Sets zum Einbau beim Kunden. Nur ist das
                Arbeitssprektrum eines nieder­gelassenen Elektrikers so breit,
                dass die speziellen The­men der Photovoltaik und der
                Energiespeicher nur eines von vielen Themen sind, mit denen sich
                ein Fachbetrieb auseinandersetzen muss. Dazu braucht es noch die
                not­wendige Ausrüstung mit Werkzeug und Software. Im Team mit
                erfahrenen Solateuren sind Elektriker jedoch für den
                Projekterfolg unersetzlich.
              </p>
              <p>Wir bei Autarxia verfolgen hier einen gänzlich anderen .</p>
            </div>
          </div>

          <div className="md:col-span-6 space-y-8">
            <div className="relative h-48 sm:h-64 md:h-[350px] w-full overflow-hidden mb-4">
              <Image
                src="/images/network-1.jpg"
                alt="Professional solar installation network - view 1"
                fill
                priority
                className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="relative h-48 sm:h-64 md:h-[350px] w-full overflow-hidden">
              <Image
                src="/images/network-2.jpg"
                alt="Professional solar installation network - view 2"
                fill
                priority
                className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
        {/* Approach and Installation Section */}
        <div className=" grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-6 space-y-8">
            <div className="relative h-48 sm:h-64 md:h-[350px] w-full overflow-hidden mb-4">
              <Image
                src="/images/house-1.jpg"
                alt="Professional solar installation network - view 1"
                fill
                priority
                className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="relative h-48 sm:h-64 md:h-[350px] w-full overflow-hidden">
              <Image
                src="/images/house-2.jpg"
                alt="Professional solar installation network - view 2"
                fill
                priority
                className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="mt-8">
              <div className="font-roboto text-base leading-[25px] tracking-wider text-black">
                <p>
                  Ansatz: Wir setzen voll auf ausgesuchte, lokale klei­nere
                  Fachbetriebe, die sehr gut qualifizierte Fach­arbeiter aus der
                  Region beschäftigen. So besteht unser Montageteam aus einem
                  tatkräftig zupacken­den Projektingenieur (Maschinenbau oder
                  Elektro­technik) und Bauleiter von Autarxia, zwei bis drei
                  Facharbeitern aus dem Dachbereich (Dachdecker, Schreiner,
                  Zimmerleute etc.) und einem Elektroinstal­ter bzw. Elektriker.
                  Somit kann jeder in seinem Fach­bereich arbeiten und jederzeit
                  auf das Know How der anderen Gewerke zugreifen. Dass wir
                  höchste Qua­lität anstreben, versteht sich von selbst –
                  schließ­lich haben wir als regional arbeitendes Unternehmen
                  unseren guten Ruf zu verlieren! Sollte doch mal eine
                  Nachbesserung nötig sein, sind in aller Regel diesel­ben
                  Mitarbeiter noch auf Jahre hinaus greifbar. Wer könnte besser
                  helfen, als die, die die Anlage gebaut haben und genau kennen?
                </p>
              </div>

              <div className="mt-12">
                <h2 className="font-arial text-xl mb-6 text-black font-bold">
                  Ausrichtung und Aufstellung – angepasst an Ihre Gegebenheiten
                </h2>
                <div className="font-roboto text-base leading-[25px] tracking-wider text-black">
                  <p>
                    Sie haben kein Dach mit Südausrichtung? Kein Prob­lem!
                    Bestücken Sie das West- und/oder das Ostdach mit eine
                    Photovoltaikanlage. Die jährlichen Erträge sind zwar etwas
                    geringer, jedoch sind Ost/ Westan­lagen wesentlich besser
                    zur Abdeckung des Eigen­verbrauchs geeignet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-arial text-xl mt-12 mb-6 text-black font-bold text-center">
          Ob Flachdach, Steildach oder Freiflächenaufstellung – wir haben die
          passende Lösung für Sie!
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;
