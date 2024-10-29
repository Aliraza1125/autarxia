import React from "react";
import Image from "next/image";

const ProductCard = ({
  title,
  subtitle,
  content,
  color,
  iconSrc,
  iconWidth = 100,
  iconHeight = 72,
  cardWidth = "full",
  cardHeight = 470,
}) => (
  <div
    style={{
      minHeight: `${cardHeight}px`,
    }}
    className={`
      ${color} 
      px-4 
      py-4 
      flex 
      flex-col 
      justify-between 
      w-full
      rounded-lg
      h-full
    `}
  >
    <div className="flex flex-col items-start space-y-4 sm:space-y-6">
      <div className="text-white">
        <span className="text-2xl sm:text-3xl lg:text-[36px] font-roboto font-semibold text-white tracking-[1px] sm:tracking-[2px]">
          autarxia
        </span>
        <span className="text-xl sm:text-2xl lg:text-3xl font-roboto font-light ml-2 tracking-normal">
          {title}
        </span>
      </div>
      <p className="text-white font-roboto font-light text-xs sm:text-sm leading-relaxed text-justify">
        {content}
      </p>
    </div>
    <div className="flex items-end justify-end p-2 sm:p-3">
      <Image
        src={iconSrc}
        alt={`${title} icon`}
        width={iconWidth}
        height={iconHeight}
        className="w-[60px] h-auto sm:w-[80px] lg:w-auto"
      />
    </div>
  </div>
);

const ProductGridSection = () => {
  const products = [
    {
      title: "sun",
      color: "bg-[#ffbd1c]",
      content: "Mit autarxia sun nutzen Sie die Kraft der Sonne zur Deckung eines großen Teils ihres Strombedarfs. Die Firmengebäude, Haus-dach, Freifläche oder Frostrückehaltehülle – unser Team plant und baut die passen-de Photovoltaik-Anlage zwischen 30 kWp und 200kWp für Sie!",
      iconSrc: "/images/sun-icon1.png",
      iconWidth: 120,
      iconHeight: 100,
    },
    {
      title: "powerstorage",
      color: "bg-[#00c3f3]",
      content: "autarxia storage ist ein Energiespeicher für alle Fälle, von Blei- oder Lithium bis hin zu stationären Batterien. Durch unser hohes Design, wir Erzeugung und Verbrauch zusammen und stellen eine Batteriereserve im Falle einer stromlosenzukunft zur Verfügung. Also eine berechtigter freien Stromversorgung im Leistungsbereich zwischen 3 und 50kW sowie Speicher Einfamilienhaus oder Gewerbebe-trieb - wir bieten Ihnen die passende Lösung für Ihre Bedürfnisse",
      iconSrc: "/images/battery-icon1.png",
      iconWidth: 100,
      iconHeight: 72,
    },
    {
      title: "bhkw",
      color: "bg-[#aad343]",
      content: "Unser selbstentwickeltes Mini-Blockheiz-kraftwerk mit extra bhkw liefert ihnen Strom und Wärme nach Be darf. Es läuft dann, wenn ein Wärmebedarf besteht und der Strombedarf von der Sonne nicht ge-deckt werden kann. Mit dem Energieträger aus regionalen Ener-gieträger Pflanzenöl aus regionalen An-bau, HVO-Diesel oder Altfett erzeugen Sie ihren eigenen, wetterunabhängigen und CO2-neutralen Strom.",
      iconSrc: "/images/leaf-icon1.png",
      iconWidth: 82,
      iconHeight: 92,
    },
    {
      title: "heatpump",
      color: "bg-[#e7853b]",
      content: "Sie brauchen Strom, jedoch keine Wär-me? Mit energy generator bieten wir Ihnen Stromversorgung im wirtschaftlichen Größen und mit verschiedenen Brennstoffen. Heiz-öl, Diesel, Erdgas, Pflanzenöl und authenti-sches Altpflanzeröl. Sie erzeugen Sie den Strom, den Ihnen Sonne und Wind nicht liefern.",
      iconSrc: "/images/heatpump-icon.png",
      iconWidth: 72,
      iconHeight: 72,
    },
    {
      title: "heat storage",
      color: "bg-[#8d9091]",
      content: "Für den Betrieb eines Mini-BHKW-, einer Wärmepumpe oder für die Wärmereze-ugung aus überschüssigem Photovoltaik-strom benötigen Sie den autarxia heat sto-rage. Er speichert die anfallende Wärme und gibt diese bei Bedarf an ihr Heizsystem ab. So können die Laufzeiten der Erzeugungs-einheiten optimiert werden und anfallende Wärme für den Zeitpunkt der Nutzung bereit gestellt werden.",
      iconSrc: "/images/storage-icon1.png",
      iconWidth: 100,
      iconHeight: 100,
    },
    {
      title: "mobility",
      color: "bg-[#e04c5a]",
      content: "Die E-Mobilität nimmt trotz aller Hindernisse ständig zu. Mit einem autarxia Hybrid-kraftwerk können Sie einen großen Teil des Strom für Ihr Elektrofahrzeug selbst er-zeugen. So fahren Sie besonders umwelt-freundlich und kostengünstig!",
      iconSrc: "/images/car-icon1.png",
      iconWidth: 100,
      iconHeight: 100,
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="px-4 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              cardHeight={470}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGridSection;