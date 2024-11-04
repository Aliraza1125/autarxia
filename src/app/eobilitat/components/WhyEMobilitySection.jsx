"use client";
import React from "react";
import Image from "next/image";

const WhyEMobilitySection = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 py-16">
      {/* Title Section */}
      <h2 className="text-[#FFB300] text-5xl font-roboto font-light mb-12 tracking-widest pl-5">
        Eobilität
      </h2>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-20 items-start">
        {/* Image Column */}
        <div className="relative h-[720px] w-full ">
          <Image
            src="/images/mountain-view.jpg"
            alt="Mountain landscape"
            fill
            className="object-left  "
            priority
          />
        </div>

        {/* Text Column */}
        <div className="space-y-6">
          <h3 className="text-xl font-roboto font-medium text-black tracking-wide ">
            Warum Eobilität?
          </h3>
          <div className="text-[15px] font-roboto leading-[25px] tracking-widest text-justify">
            <p>
              Bisher war die Energiewende überwiegend von Rendite getrieben.
              Viele
              <span className=""> Akteure der Energiewende</span> haben Anlagen
              gebaut, weil man damit Geld verdienen konnte. Und groß musste
              sein, damit es sich auch richtig lohnt, egal ob man Strom oder
              Wärme vor Ort nutzen konnte oder nicht! Der Wunsch, etwas für die
              Umwelt zu tun, war immer da, musste jedoch im Zweifelsfall schnell
              hinter monetären Interessen zurücktreten.
            </p>
            <p>
              Rückblickend erkennen wir, dass die reine Erzeugung von
              umweltfreundlichem Strom und dessen Einspeisung ins öffentliche
              Netz unser Problem noch lange nicht löst. Solange wir den Strom
              nicht dort erzeugen, wo er gebraucht wird, müssen wir mit großen
              teuren Stromtrassen leben. Solange wir Erzeugung und Verbrauch
              nicht mit Hilfe von Energiespeichern zusammenbringen, können wir
              die konventionellen Kraftwerke letztlich nicht ersetzen.
            </p>
            <p>
              Solange wir auf die Energieressourcen anderer Regionen setzen,
              statt unsere regional verfügbaren Ressourcen zu nutzen werden wir
              immer gravierenderen Abhängigkeiten unterworfen sein. So bleiben
              wir, trotz immenser Anstrengungen weit hinter den gesteckten
              Zielen zurück. Der fortschreitende Klimawandel zeigt davon! – Es
              wird Zeit umzudenken!
            </p>
            <p>
              Was wäre, wenn jedes Einfamilienhaus oder jeder Gewerbetrieb
              seinen Strom- und Wärmebedarf auf umweltfreundliche Weise und
              möglichst weitgehend unter Verwendung der regional vorhandenen,
              erneuerbaren Energielager erzeugen könnte?
            </p>
            <p className="">
              Eine Utopie? – Nein!
              <br />
              Denken wir neu!
            </p>
          </div>
        </div>
      </div>

      {/* What is Eobilität Section */}
      <div className="space-y-8 mt-12">
        <h3 className="text-xl font-roboto font-medium text-black tracking-wide">
          Was ist Eobilität?
        </h3>
        <p className="text-[15px] font-roboto leading-[25px] tracking-wide text-justify">
          Eobilität ist die gleichzeitige Anwesenheit der Eigenschaften
        </p>

        {/* Properties List */}
        <ul className="space-y-2 pl-5">
          <li className="flex items-center gap-2">
            <span className="text-[#ffbd1c]">◆</span>
            <span className="text-[15px] font-roboto">Regionalität</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#aad343]">◆</span>
            <span className="text-[15px] font-roboto">
              Umweltfreundlichkeit
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#262963]">◆</span>
            <span className="text-[15px] font-roboto">Autarkie</span>
            <span className="text-[15px] font-roboto">und</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#00c3f3]">◆</span>
            <span className="text-[15px] font-roboto">Zuverlässigkeit.</span>
          </li>
        </ul>

        {/* Description */}
        <div className="space-y-1 text-[15px] font-roboto leading-[22px] tracking-wide text-justify">
          <p>
            Erfüllt ein Produkt alle diese Eigenschaften gleichzeitig, nennen
            wir es eobil.
          </p>
          <p>
            Unser autarxia Hybrid-Kleinkraftwerk ist ein solches eobiles
            Produkt:
          </p>
          <p>
            Umweltfreundlich, da bis zu 80% des benötigten Stroms und der
            überwiegenden Teil der benötigten Wärme aus regional verfügbarer
            erneuerbaren Energie vor Ort erzeugt wird.
          </p>
          <p>
            Regional, da wir zur Deckung des Strom- und Wärmebedarfs möglichst
            nur regional verfügbare Energieträger einsetzen.
          </p>
          <p>
            Autark, da Ihrem autarxia Hybrid-Kleinkraftwerk eine
            inselunabhängige Stromversorgung bereitstellt und somit auch ohne
            öffentliches Netz oder bei Ausfall des öffentlichen Netzes
            funktionsfähig ist.
          </p>
          <p>
            Zuverlässig, da die Kombination verschiedener Strom- und
            Wärmeerzeuger in Kombination mit dem öffentlichen Netz größtmögliche
            Versorgungssicherheit ermöglicht.
          </p>
        </div>

        {/* Values Section */}
        <div className="space-y-8 mt-12">
          <h3 className="text-xl font-roboto font-medium text-black tracking-wide mb-6">
            Der Wertezirkel eobilen Denkens
          </h3>
          <p className="text-[15px] font-roboto leading-[22px] tracking-wide text-justify mb-8">
            Wir wünschen uns sehr, dass mehr und mehr Kunden und Unternehmen
            Geschmack an Eobilität finden! Wir sind überzeugt, daß eobiles
            Denken und Handeln sowie eobile Produkte unsere Welt ein Stück
            besser machen können! Seien Sie dabei. Werden Sie eobil und machen
            Sie Eobilität zu Ihrem neuen Lebensstil! Was Sie davon haben? –
            Sehen Sie selbst:
          </p>

          <div className="space-y-6">
            {/* Value Items */}
            <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
              <h4 className="font-roboto font-medium">Verantwortung:</h4>
              <p className="text-[15px] font-roboto leading-[22px] tracking-wide text-justify">
                Sie übernehmen Verantwortung für Ihr Handeln und für unsere
                Umwelt, um diese Welt auch für die nächsten Generationen
                lebenswert zu erhalten. Werden Sie erheblich!
              </p>
            </div>

            <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
              <h4 className="font-roboto font-medium">Freiheit:</h4>
              <p className="text-[15px] font-roboto leading-[22px] tracking-wide text-justify">
                Sie werden ein Stück unabhängiger, in dem Sie für sich selbst
                sorgen. Das schafft ein Stück Freiheit!
              </p>
            </div>

            <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
              <h4 className="font-roboto font-medium">Vertrauen:</h4>
              <p className="text-[15px] font-roboto leading-[22px] tracking-wide text-justify">
                Sie stehen auf Ihren eigenen Beinen – und das funktioniert. So
                gewinnen Sie Vertrauen in sich und in Andere.
              </p>
            </div>

            <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
              <h4 className="font-roboto font-medium">Rücksicht:</h4>
              <p className="text-[15px] font-roboto leading-[22px] tracking-wide text-justify">
                Sie nehmen Rücksicht auf die Menschen in anderen Ländern, indem
                Sie die in Ihrer Region verfügbaren Ressourcen nutzen, anstatt
                als Teilnehmer eines globalisierten Marktes von den Ressourcen
                Anderer zu profitieren.
              </p>
            </div>
          </div>
        </div>

        {/* Circular Diagram */}
        <div className="flex justify-center ">
          <div className="relative w-[500px] h-[400px]">
            <Image
              src="/images/values-circle.png"
              alt="Values Circle Diagram"
              fill
              className="object-cover "
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyEMobilitySection;
