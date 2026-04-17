'use client';

import gradientImg from '@public/images/ns-img-509.png';
import Image from 'next/image';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import { cn } from '@/utils/cn';
import PricingCard from './PricingCard';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="pt-14 pb-14 max-2xl:px-4 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px] bg-background-2 overflow-hidden relative">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-[70px] py-16 sm:px-5 md:px-10 md:py-[100px] lg:px-5 xl:px-[67px]">
        <div className="relative flex flex-col items-center text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge bg-primary-50 text-primary-500 mb-5 border-none px-6 py-2 text-sm font-bold uppercase tracking-widest">Pricing & Plans</span>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <h2 className="mx-auto mb-8 max-w-[800px] text-black max-md:px-4 text-4xl md:text-6xl font-black tracking-tight leading-none">
              Simple pricing,<span className="text-primary-500 leading-tight"><br></br>no surprises.</span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.4} direction="up" offset={200} start={'top 93%'}>
            <span className="badge bg-ns-yellow text-black text-tagline-2 absolute top-[70%] z-30 ms-60 rotate-[20deg] rounded-[36px] px-4 py-2 font-bold capitalize shadow-lg">
              save 40%
            </span>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="rounded-full bg-black/5 px-1.5 py-1.5 border border-black/5 backdrop-blur-md">
              <div className="relative flex items-center">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={cn(
                    "relative z-10 px-8 py-3 text-sm font-bold transition-all duration-300 rounded-full",
                    !isAnnual ? "text-white" : "text-black/60"
                  )}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={cn(
                    "relative z-10 px-8 py-3 text-sm font-bold transition-all duration-300 rounded-full",
                    isAnnual ? "text-white" : "text-black/60"
                  )}
                >
                  Yearly
                </button>
                {/* Active Slider */}
                <div
                  className={cn(
                    "absolute h-full w-1/2 bg-black rounded-full transition-all duration-300 ease-in-out shadow-lg",
                    isAnnual ? "translate-x-full" : "translate-x-0"
                  )}
                />
              </div>
            </div>
          </RevealAnimation>
        </div>

        <div className="relative z-10 px-5 sm:px-0">
          <PricingCard isAnnual={isAnnual} />
        </div>
      </div>
    </section>
  );
};

Pricing.displayName = 'Pricing';
export default Pricing;
