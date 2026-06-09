"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const logos = [
  { name: 'Flipkart', src: '/images/icons/flipkart.svg' },
  { name: 'Shopify', src: '/images/icons/shopify.svg' },
  { name: 'Amazon', src: '/images/icons/chatgpt.png' },
  { name: 'Google', src: '/images/icons/google.svg' },
  { name: 'Gmail', src: '/images/icons/gmail.svg' },
  { name: 'DHL', src: '/images/icons/razorpay.png' },
];

export default function DigitalEpochSection() {
  return (
    <section className="w-full bg-[#f9fafb] py-16 md:py-24 font-sans overflow-hidden">
      {/* Main Hero Container */}
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">
        
        {/* Underlying Video Layer */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
          />
        </div>

        {/* Hero Text Content */}
        <div className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="mb-4">
              <span className="text-sm font-bold text-primary-500 uppercase tracking-widest inline-block">
                Start Your Next Chapter
              </span>
            </div>
            <h1 className="text-heading-4 md:text-heading-2 font-medium w-full text-secondary dark:text-accent transition-colors duration-500 mb-6">
              Build a Customers Love
            </h1>
            <div className="text-lg md:text-xl text-secondary/70 dark:text-accent/70 leading-relaxed max-w-xl mb-8 space-y-4 transition-colors duration-500">
              <p>
                Create a beautiful online store, showcase your products, and start selling with the tools trusted by growing brands.
              </p>
              <p>
                No complicated setup. No technical barriers.
              </p>
              <p>
                Just everything you need to launch, sell, and grow from day one.
              </p>
              <p className="font-medium text-secondary dark:text-accent">
                Start small. Grow big.
              </p>
            </div>
            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#0a152d] text-white px-8 py-3.5 rounded-full text-[14px] font-medium shadow-lg hover:bg-black transition-colors"
              >
                Build Now
              </motion.button>
            </Link>
          </motion.div>
        </div>


      </div>

      {/* Seamless Marquee Scroller */}
      <div 
        className="mt-14 relative w-full overflow-hidden" 
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
        }}
      >
        <div className="flex w-max animate-digital-marquee">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-none px-4 md:px-6">
              <div className="group h-20 w-20 md:h-24 md:w-24 shrink-0 flex items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
