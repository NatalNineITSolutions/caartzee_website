'use client';
import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import WhatsAppDashboardMockup from './WhatsAppDashboardMockup';
import LinkButton from '../ui/button/LinkButton';
import RevealAnimation from '../animation/RevealAnimation';
import HeroDotBg from '../shared/HeroDotBg';
import HeroShapes from './HeroShapes';

export interface HeroShapesProps {
  className?: string;
}

const Hero = () => {
  const sceneRef = useParallaxEffect();
  return (
    <section
      ref={sceneRef}
      className="relative pt-[140px] pb-16 md:pt-[200px] md:pb-20 lg:pb-[140px] 2xl:pt-[250px]"
      id="scene">
      <HeroDotBg className="lg:top-[120px]" />
      <HeroShapes />
      <div className="main-container relative z-30 text-center">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-green-v2 mb-5 px-6 py-2">Smart WhatsApp Commerce Platform</span>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h1 className="mb-4 font-black tracking-tight leading-none text-4xl md:text-6xl lg:text-7xl">
            Sell More on <span className="text-primary-500 font-bold">WhatsApp</span>. <br className="hidden md:block" /> Serve Customers Instantly.
          </h1>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <p className="mx-auto mb-10 max-w-[700px] md:mb-14 text-lg md:text-xl font-medium opacity-60 leading-relaxed">
            Turn WhatsApp into your sales channel with AI-powered conversations, automated support, and seamless order management all from one place.
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.4}>
          <div className="mx-auto flex w-full flex-col items-center justify-center gap-x-3 gap-y-4 md:flex-row mb-12">
            <LinkButton
              href="https://cartly.zeedone.com/register"
              className="btn btn-xl bg-primary-500 text-white hover:bg-primary-600 flex h-14 px-10 items-center justify-center rounded-2xl shadow-xl shadow-primary-500/20 transition-all hover:scale-105">
              <span>Start Free Trial</span>
            </LinkButton>
            <LinkButton
              href="#pricing"
              className="btn btn-xl bg-white text-black border border-black/10 hover:bg-black/5 flex h-14 px-10 items-center justify-center rounded-2xl transition-all">
              <span>Book a Demo</span>
            </LinkButton>
          </div>
        </RevealAnimation>

        {/* Floating Stats Bar */}
        <RevealAnimation delay={0.5}>
          <div className="mx-auto max-w-[900px] bg-white/80 dark:bg-white/5 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-black/5 p-4 md:p-6 mb-16 relative z-40 backdrop-blur-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/5">
              <StatItem value="100+" label="Happy Sellers" />
              <StatItem value="200+" label="Stores Created" />
              <StatItem value="92%" label="Satisfaction" />
              <StatItem value="10 Days" label="Avg. Launch" />
            </div>
          </div>
        </RevealAnimation>

        {/* Dashboard Mockup Integration */}
        <div className="mt-16 md:mt-24 lg:mt-[120px]">
           <RevealAnimation delay={0.6} instant>
             <div className="rounded-[24px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-black/5 dark:border-white/5 ring-1 ring-black/5 mx-auto max-w-[1200px] transform-gpu transition-transform hover:scale-[1.01]">
               <img src="/images/image00.png" alt="WhatsApp Commerce Dashboard" className="w-full h-auto object-cover block" />
             </div>
           </RevealAnimation>
        </div>
      </div>
      <RevealAnimation delay={1} offset={0}>
        <div className="absolute top-0 left-0 hidden h-full w-full before:absolute before:top-0 before:left-[6%] before:z-0 before:h-[98%] before:w-[1px] before:bg-[linear-gradient(180deg,#ECE8FF_0%,#FAF9FC_100%)] before:content-[''] after:absolute after:top-0 after:right-[6%] after:-z-10 after:h-[98%] after:w-[1px] after:bg-[linear-gradient(180deg,#ECE8FF_0%,#FAF9FC_100%)] after:content-[''] md:block dark:before:bg-[linear-gradient(180deg,_#1b232f_0%,#13171E_100%)] dark:after:bg-[linear-gradient(180deg,_#1b232f_0%,#13171E_100%)]">
          <RevealAnimation delay={1} offset={0}>
            <div className="bg-stroke-1 dark:bg-stroke-5 before:bg-stroke-1 dark:before:bg-stroke-5 before:ring-background-2 dark:before:ring-background-5 after:bg-stroke-1 dark:after:bg-stroke-5 after:ring-background-2 dark:after:ring-background-5 absolute top-[6.5%] h-[1px] w-[100%] before:absolute before:-top-1 before:left-[5.8%] before:z-20 before:h-2 before:w-2 before:rotate-45 before:ring-8 before:content-[''] after:absolute after:-top-1 after:right-[5.8%] after:z-20 after:h-2 after:w-2 after:rotate-[-45deg] after:ring-8 after:content-['']" />
          </RevealAnimation>
        </div>
      </RevealAnimation>
    </section>
  );
};
Hero.displayName = 'Hero';

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center py-4 md:py-0">
    <h3 className="text-2xl font-black text-black dark:text-white leading-none mb-1">{value}</h3>
    <p className="text-[11px] font-bold text-black/40 dark:text-white/40 uppercase tracking-widest">{label}</p>
  </div>
);

export default Hero;
