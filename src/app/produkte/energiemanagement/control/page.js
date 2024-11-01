import HeroSection from '../../../components/HeroComponent/HeroSection'
import ControlDetailsSection  from './components/ControlDetailsSection'
import ContactBanner from '../../../components/ContactBanner/ContactBanner';
import Footer from '../../../components/Footer/Footer';
export default function ControlPage() {
    return (
        <main className="w-full">
            <HeroSection
                backgroundImage="/Headerhome/control-hero.jpg"
                imageAlt="Professional businessman in office"
                title="Mein Strom, mein Unternehmen,"
                subtitle="meine Unabhängigkeit..."
                brightness={95}
                titleSize="default"
            />
            <ControlDetailsSection />
            <ContactBanner bgColor="#262963" />
            <Footer/>

        </main>
    );
}