'use client';
import { useState, useEffect } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const regions = [
  { id: 'Google', icon: '/images/icons/google.png', image: '/images/sales_dashboard_tablet.png' },
  { id: 'ChatGPT', icon: '/images/icons/chatgpt.png', image: '/images/whatapp inbox1.png' },
  { id: 'Shopify', icon: '/images/icons/shopify.png', image: '/images/campaign2.png' },
  { id: 'Amazon', icon: '/images/icons/amazon.png', image: '/images/flowbuilder1.png' },
  { id: 'Meta', icon: '/images/icons/meta.png', image: '/images/marketting1.png' },
];

const GlobalGrowthSection = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % regions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white dark:bg-background-8 pb-12 pt-12 md:pb-20 md:pt-20 overflow-hidden">
      <div className="main-container mx-auto w-[95%] sm:w-full">
        <RevealAnimation delay={0.1}>
          <h2 className="mb-6 text-heading-4 md:text-heading-3 text-gray-900 dark:text-white">
            Grow around the world
          </h2>
        </RevealAnimation>

        <div className="relative rounded-[2.5rem] bg-[#022e22] px-8 py-10 md:px-14 md:py-16 shadow-2xl min-h-[600px] flex items-end overflow-hidden">
          
          {/* Actual Map Background from project */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <img 
              src="/images/delivery/map.png" 
              alt="World Map" 
              className="w-full h-full object-cover opacity-60" 
            />
          </div>

          {/* Fade gradient from left to mimic screenshot lighting */}
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#022e22] via-[#022e22]/80 to-transparent pointer-events-none z-0"></div>

          {/* Map subtle glow */}
          <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none z-0"></div>

          {/* Auto-scrolling Integration Icons Column (Left) */}
          <div className="absolute left-6 md:left-14 top-1/2 -translate-y-1/2 h-[280px] w-20 overflow-hidden z-20">
            <div 
              className="absolute left-0 w-full flex flex-col gap-3 transition-transform duration-700 ease-out"
              style={{ top: '50%', transform: `translateY(calc(-50% - ${activeIndex * 60}px))` }}
            >
              {regions.map((region, idx) => (
                <div 
                  key={region.id} 
                  className={`h-12 w-16 mx-auto flex shrink-0 items-center justify-center rounded-xl transition-all duration-700 ease-out cursor-pointer ${
                    idx === activeIndex 
                      ? 'bg-white/20 ring-1 ring-white/50 backdrop-blur-md scale-110 shadow-lg' 
                      : 'bg-white/5 opacity-40 hover:opacity-100 hover:bg-white/10 scale-90 backdrop-blur-sm'
                  }`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <img src={region.icon} alt={region.id} className="w-8 h-8 object-contain drop-shadow-sm" />
                </div>
              ))}
            </div>
            {/* Top/Bottom gradient fades for the icon column */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#022e22] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#022e22] to-transparent z-10 pointer-events-none"></div>
          </div>

          {/* 3D Product Carousel */}
          <div className="absolute left-36 md:left-56 lg:left-64 top-12 md:top-20 lg:top-24 w-[160px] md:w-[200px] lg:w-[240px] h-[220px] md:h-[280px] lg:h-[340px] z-30 hidden sm:block perspective-1000">
            {regions.map((region, idx) => {
              const diff = idx - activeIndex;
              const isActive = diff === 0;
              const isPrev = diff === -1 || (activeIndex === 0 && idx === regions.length - 1);
              const isNext = diff === 1 || (activeIndex === regions.length - 1 && idx === 0);
              
              let transform = 'translateX(100%) scale(0.8) rotateY(15deg) opacity-0';
              let zIndex = 0;

              if (isActive) {
                transform = 'translateX(0) scale(1) rotateY(0deg) opacity-100';
                zIndex = 30;
              } else if (isPrev) {
                transform = 'translateX(-50px) scale(0.85) rotateY(-8deg) opacity-60';
                zIndex = 20;
              } else if (isNext) {
                transform = 'translateX(50px) scale(0.85) rotateY(8deg) opacity-60';
                zIndex = 20;
              }

              return (
                <div 
                  key={region.id}
                  className="absolute inset-0 transition-all duration-700 ease-out origin-center"
                  style={{ transform, zIndex, opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0 }}
                >
                  <div className={`w-full h-full rounded-lg bg-white p-2.5 transition-shadow duration-700 ${isActive ? 'shadow-[0_40px_80px_rgba(0,0,0,0.6)] border-[8px] border-white' : 'shadow-none'}`}>
                    <div className="w-full h-full rounded-md bg-gray-50 flex items-center justify-center p-8 relative">
                      <img src={region.icon} alt={region.id} className="w-full h-full object-contain drop-shadow-md" />
                    </div>
                  </div>
                </div>
              );
            })}


          </div>

          {/* Caartzee Logo (Right side) */}
          <RevealAnimation delay={0.5} className="absolute right-8 md:right-16 lg:right-32 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
            <div className="w-[300px] xl:w-[350px] aspect-video flex items-center justify-center rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] p-8 group">
              <img src="/images/shared/main-logo-light.svg" alt="Caartzee Logo" className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" />
            </div>
          </RevealAnimation>

          {/* Bottom Left Text */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-14 z-50 max-w-xl pr-8">
            <h3 className="mb-3 text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-100 tracking-tight drop-shadow-lg">
              Scale your business globally
            </h3>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-lg font-medium drop-shadow-md">
              Caartzee streamlines your entire digital ecosystem, from managing complex operations and marketing to unifying customer experiences with the <span className="text-emerald-400 font-bold border-b border-emerald-400/50 cursor-pointer hover:border-emerald-400 transition-colors">Caartzee Platform</span>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalGrowthSection;
