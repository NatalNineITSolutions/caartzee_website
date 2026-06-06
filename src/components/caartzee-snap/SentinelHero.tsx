'use client';

import React, { Suspense } from 'react';
import { CheckCircle2 } from 'lucide-react';
import LinkButton from '../ui/button/LinkButton';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const SentinelHero = () => {
  return (
    <>
      <style>{`
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .sentinel-animate-fade-up {
          animation: fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .sentinel-animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>

      {/* FRONT CONTENT HERO (Spline 3D Section) */}
      <div className="min-h-screen bg-white dark:bg-[#141414] relative transition-colors duration-300">
        <section className="relative min-h-screen flex items-end overflow-hidden">
          
          {/* Spline 3D Background */}
          <div className="absolute inset-0 z-0">
            <Suspense fallback={<div className="absolute inset-0 bg-white dark:bg-[#141414]" />}>
              <Spline
                scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
                className="w-full h-full"
              />
            </Suspense>
          </div>

          {/* Adaptive overlay for readability */}
          <div className="absolute inset-0 bg-white/80 dark:bg-black/30 z-[1] pointer-events-none transition-colors duration-300" />

          {/* Content container */}
          <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-center lg:items-center px-6 md:px-10 pt-[140px] pb-20 md:pt-[180px] lg:pt-0 lg:pb-0 pointer-events-none">
            
            {/* Left Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start lg:justify-center max-w-[90%] sm:max-w-md lg:max-w-2xl h-full lg:h-auto">
              {/* Heading */}
              <h1 
                className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-[-0.02em] text-secondary dark:text-white mb-4 md:mb-6 opacity-0 sentinel-animate-fade-up mt-8 lg:mt-0"
                style={{ animationDelay: '0.2s' }}
              >
                Bring Your Catalog Into Every Conversation.
              </h1>

              {/* Subheading */}
              <p 
                className="text-secondary/70 dark:text-white/70 text-lg md:text-xl font-medium leading-relaxed mb-8 md:mb-10 opacity-0 sentinel-animate-fade-up"
                style={{ animationDelay: '0.4s' }}
              >
                Sync your Shopify and CaartZee products to WhatsApp in one click and let customers browse, discover, and purchase without leaving the chat.
              </p>

              {/* CTA buttons */}
              <div 
                className="flex flex-wrap gap-3 font-bold opacity-0 sentinel-animate-fade-up pointer-events-auto"
                style={{ animationDelay: '0.6s' }}
              >
                <LinkButton 
                  href="/caartzee-snap/catalog-sync" 
                  insideSpan={false}
                  className="inline-flex items-center gap-2 flex-nowrap whitespace-nowrap bg-primary-500 text-white px-6 py-3 md:px-10 md:py-4 text-sm md:text-base font-bold rounded-full cursor-pointer hover:bg-primary-600 transition-all active:scale-[0.97] hover:shadow-lg hover:shadow-primary-500/30"
                >
                  <span>Read more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="m9 18 6-6-6-6"/></svg>
                </LinkButton>
              </div>
            </div>

            {/* Right Image Content */}
            <div 
              className="hidden lg:flex lg:w-1/2 items-center justify-end relative z-10 opacity-0 sentinel-animate-fade-in pointer-events-auto"
              style={{ animationDelay: '1s' }}
            >
              <img 
                src="/images/sync.png" 
                alt="Catalog Sync Display" 
                className="w-full max-w-[600px] xl:max-w-[800px] object-contain drop-shadow-2xl translate-x-8 xl:translate-x-12" 
              />
            </div>
          </div>

        </section>
      </div>
    </>
  );
};

export default SentinelHero;
