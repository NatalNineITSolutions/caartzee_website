"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MentalityHero = () => {
  return (
    <section className="relative min-h-[110vh] sm:min-h-[140vh] w-full flex flex-col items-center justify-start overflow-hidden pt-12 sm:pt-16 pb-16">
      
      {/* Background Video Container */}
      <div className="absolute top-[5vh] sm:top-[8vh] left-0 w-full h-[95vh] sm:h-[120vh] z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-white dark:from-[#060010] to-transparent z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100 relative z-0"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4"
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 relative z-10 grid grid-cols-12 gap-x-4 md:gap-x-8">
        <div className="col-span-12 md:col-span-10 md:col-start-2 flex flex-col items-start text-left mt-8 md:mt-12">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl"
          >
            <div className="mb-4">
              <span className="text-sm font-bold text-primary-500 uppercase tracking-widest inline-block">
                Built For Brands
              </span>
            </div>
            
            <h1 className="text-heading-4 md:text-heading-2 font-medium w-full mb-6 text-secondary dark:text-accent transition-colors duration-500">
              Your Next Customer Is Already Online.
            </h1>
            
            <div className="space-y-4 text-lg md:text-xl text-secondary/70 dark:text-accent/70 leading-relaxed transition-colors duration-500 max-w-3xl">
              <p>
                Create a storefront that looks professional, works everywhere, and helps turn visitors into customers.
              </p>
              <p>
                From products and payments to marketing and fulfillment, everything you need to launch and grow is built into one platform.
              </p>
              <p className="font-medium text-secondary dark:text-accent">
                Start your journey today.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default function MentalitySection() {
  return (
    <div className="min-h-screen selection:bg-brand-green selection:text-black antialiased overflow-x-hidden transition-colors duration-500">
      <MentalityHero />
    </div>
  );
}
