import Image from 'next/image';

const HomeGraph = () => {
  return (
    <section className="w-full bg-white py-8 md:py-12 lg:py-16 mt-8 md:mt-12 lg:mt-20">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Graph Image */}
        <div className="w-full">
          <Image
            src="/images/home-graph.png"
            alt="Baukasten autarxia home graph"
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HomeGraph;