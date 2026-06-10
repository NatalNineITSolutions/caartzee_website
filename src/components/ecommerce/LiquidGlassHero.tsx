'use client';

import React from 'react';
import Link from 'next/link';

const LiquidGlassHero = () => {
  return (
    <section className="relative w-full bg-white dark:bg-background-8 overflow-hidden min-h-screen flex flex-col pt-10 pb-20 transition-colors duration-500">
      {/* Background Layered Gradient Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#60B1FF] opacity-30 blur-[120px]"></div>
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-[#319AFF] opacity-20 blur-[100px]"></div>
      </div>


      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 mt-20 gap-10">
        
        {/* Hero Left: Content */}
        <div className="flex-1 max-w-2xl" style={{ WebkitFontSmoothing: 'antialiased' }}>

          {/* Headline */}
          <h1 
            className="text-heading-3 md:text-heading-1 font-medium mb-6 text-black dark:text-white tracking-[-2px] transition-colors duration-500"
          >
            Start Selling Today.
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-[540px] transition-colors duration-500"
          >
            Launch a beautiful online store and give customers a place to discover and buy your products.
          </p>

          {/* Primary CTA */}
          <Link 
            href="/contact-us"
            className="flex w-fit items-center px-10 py-4 font-medium text-white transition-transform hover:scale-[1.02] duration-300 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED]"
          >
            Start Today
          </Link>
        </div>

        {/* Hero Right: Glassy Orb */}
        <div className="flex-1 relative flex justify-center items-center w-full mt-10 lg:mt-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full max-w-[600px] scale-125 mix-blend-screen"
            style={{
              filter: 'hue-rotate(-55deg) saturate(250%) brightness(1.2) contrast(1.1)',
            }}
          >
            <source src="https://future.co/images/homepage/glassy-orb/orb-purple.webm" type="video/webm" />
          </video>
        </div>
      </div>


    </section>
  );
};

export default LiquidGlassHero;
