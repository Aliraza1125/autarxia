'use client'
import React from 'react';
import Image from 'next/image';

const HeroSection = ({ 
  backgroundImage,
  imageAlt = '',
  title,
  subtitle,
  brightness = 90,
  titleSize = 'default',
  logoUrl = '/images/Logoautarxia.png',
  websiteUrl = 'www.autarxia.de'
}) => {
  // Define text size classes based on the titleSize prop
  const textSizeClasses = {
    default: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    large: 'text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px]'
  };

  const textShadowStyle = {
    textShadow: `
      -1px -1px 0 #000,  
       1px -1px 0 #000,
      -1px  1px 0 #000,
       1px  1px 0 #000,
       2px 2px 8px rgba(0,0,0,0.6)
    `
  };

  return (
    <>
      <div className="w-full h-2 md:h-[50px]" />
      <div className="w-full h-2 md:h-[15px] bg-[#dddede]" />

      <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={imageAlt}
            fill
            className={`object-fill brightness-${brightness}`}
            priority
          />
        </div>

        <div className="relative h-full">
          <div className="max-w-[1200px] mx-auto h-full px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center h-full">
              <div className="absolute top-4 sm:top-6 right-0 lg:right-8">
                <div className="relative w-[100px] sm:w-[120px] h-[40px]">
                  <Image
                    src={logoUrl}
                    alt="Autarxia Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-8 sm:mt-0 relative z-10">
                <h1 className={`${textSizeClasses[titleSize]} text-white max-w-5xl font-roboto font-light leading-tight tracking-wide`}>
                  <span 
                    className="block mb-2 sm:mb-3"
                    style={textShadowStyle}
                  >
                    {title}
                  </span>
                  {subtitle && (
                    <span 
                      className="block text-6xl"
                      style={textShadowStyle}
                    >
                      {subtitle}
                    </span>
                  )}
                </h1>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-4 sm:-right-8 -rotate-90 text-white font-minion">
            <span className="text-sm sm:text-base">
              {websiteUrl.split('.').map((part, index) => (
                <span key={index} className={index === 1 ? 'font-light text-xl' : ''}>
                  {index === 0 ? part + '.' : index === 2 ? '.' + part : part}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-2 md:h-[15px] bg-[#dddede]" />
    </>
  );
};

export default HeroSection;