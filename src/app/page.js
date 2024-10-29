
import HeroSection from "./components/HeroSection/HeroSection";
import ContentSection from "./components/ContentSection/ContentSection";
import FeatureSlider from "./components/FeatureSlider/FeatureSlider";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import BuildingOptions from "./components/BuildingOptions/BuildingOptions"
import HomeGraph from "./components/HomeGraph/HomeGraph"
import Footer from "./components/Footer/Footer"
import EobilitatSection from "./components/EobilitatSection/EobilitatSection"
import AutorkieSection from "./components/AutorkieSection/AutorkieSection"
import UmweltfreundlichkeitSection from "./components/UmweltfreundlichkeitSection/UmweltfreundlichkeitSection"
import RegionalitatSection from "./components/RegionalitatSection/RegionalitatSection"
import ProductGridSection from "./components/ProductGridSection/ProductGridSection"
import ControlSection from "./components/ControlSection/ControlSection"
export default function Home() {
  return (
    <>
    <HeroSection/>
    <ContentSection/>
    <FeatureSlider/>
    <ServicesSection/>
    <ProductGridSection />
    <ControlSection />
    <BuildingOptions />
    <Footer/>
    <HomeGraph/>
    <EobilitatSection/>
    <AutorkieSection />
    <UmweltfreundlichkeitSection />
    <RegionalitatSection />
    
    </>
  );
}
