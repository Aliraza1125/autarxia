// src/app/pages/HeroSection/index.jsx
'use client'
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Responsive height container */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-market.png"
            alt="Market scene with apples"
            fill
            sizes="(max-width: 640px) 100vw, 
                   (max-width: 768px) 100vw, 
                   (max-width: 1024px) 100vw, 
                   100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        
    
        
        
      </div>
    </div>
  );
};

export default HeroSection;