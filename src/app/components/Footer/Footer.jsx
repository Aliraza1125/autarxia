import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 md:py-12 lg:py-16 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-20">
        {/* Logo and Company Name */}
        <div className="flex flex-col items-center mb-6 md:mb-8">
          <div className="flex items-center">
           
            <Image 
              src="/images/Logoautarxia.png" 
              alt="Autarxia Logo" 
              width={200} 
              height={200}
              className="w-auto h-auto max-w-[150px] md:max-w-[200px]"
            />  
          </div>
          <p className="text-[#666666] text-xs md:text-[14px] font-roboto font-light mt-2">
            Autarxia Infrastruktursysteme GmbH
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs md:text-[14px] font-roboto font-light">
          <Link 
            href="/impressum-v1-ordner" 
            className="text-[#666666] hover:text-[#333333]"
          >
            Impressum
          </Link>
          <span className="text-[#666666] hidden sm:inline">|</span>
          <Link 
            href="/datenschutz" 
            className="text-[#666666] hover:text-[#333333]"
          >
            Datenschutzvereinbarungen
          </Link>
          <span className="text-[#666666] hidden sm:inline">|</span>
          <Link 
            href="/tracking" 
            className="text-[#666666] hover:text-[#333333]"
          >
            Tracking ausschalten
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;