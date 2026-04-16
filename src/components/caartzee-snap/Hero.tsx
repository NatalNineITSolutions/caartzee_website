'use client';
import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import WhatsAppDashboardMockup from './WhatsAppDashboardMockup';
import RevealAnimation from '../animation/RevealAnimation';
import HeroDotBg from '../shared/HeroDotBg';
import HeroShapes from './HeroShapes';
import LinkButton from '../ui/button/LinkButton';
import Image from 'next/image';

const Hero = () => {
  const sceneRef = useParallaxEffect();
  return (
    <section
      ref={sceneRef}
      className="relative pt-[100px] pb-16 md:pt-[140px] md:pb-20 lg:pb-[140px] 2xl:pt-[200px]"
      id="scene">
      <HeroDotBg className="lg:top-[120px]" />
      <HeroShapes />
      <div className="main-container relative z-30 text-center">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-green-v2 mb-5">Caartzee Snap</span>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h1 className="mb-4 font-black tracking-tight text-heading-3 md:text-heading-1">
            Sell More on <span className="text-primary-500">WhatsApp</span><br />Without the Hassle
          </h1>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <p className="mx-auto mb-10 max-w-[650px] text-lg font-medium opacity-80 md:mb-14">
            Caartzee Snap turns your WhatsApp into a 24/7 sales machine. Showcase your products, take orders, and collect payments without leaving WhatsApp. No tech skills needed.
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.4}>
          <div className="mx-auto flex w-full flex-col items-center justify-center gap-x-5 gap-y-4 md:mx-0 md:w-auto md:flex-row">
            <LinkButton
              href="https://cartly.zeedone.com/register"
              className="btn btn-xl btn-primary rounded-2xl px-10 shadow-xl shadow-primary-500/20">
              <span>Start Your Free Trial</span>
            </LinkButton>
            <LinkButton
              href="/contact-us"
              className="btn btn-xl btn-white dark:btn-transparent rounded-2xl px-10 border-2">
              <span>Talk to an Expert</span>
            </LinkButton>
          </div>
        </RevealAnimation>
        
        {/* Stats Bar */}
        <RevealAnimation delay={0.45}>
          <div className="mx-auto mt-12 flex max-w-[800px] flex-wrap items-center justify-center gap-8 rounded-[28px] bg-white/40 dark:bg-black/20 p-6 backdrop-blur-3xl shadow-2xl border border-white/50 dark:border-white/10 md:mt-16">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-secondary dark:text-accent">15,500+</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-secondary/40 dark:text-accent/40">Attendees</span>
            </div>
            <div className="h-10 w-px bg-stroke-1 dark:bg-white/10 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-secondary dark:text-accent">2,400+</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-secondary/40 dark:text-accent/40">Active Users</span>
            </div>
            <div className="h-10 w-px bg-stroke-1 dark:bg-white/10 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-primary-500 underline decoration-primary-500/30 decoration-4 underline-offset-4">92%</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-secondary/40 dark:text-accent/40">Retention</span>
            </div>
            <div className="h-10 w-px bg-stroke-1 dark:bg-white/10 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-secondary dark:text-accent">20 days</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-secondary/40 dark:text-accent/40">Free Trial</span>
            </div>
          </div>
        </RevealAnimation>

        {/* Dynamic Dashboard UI Showcase */}
        <div className="mt-16 md:mt-24 lg:mt-32 relative group">
          <WhatsAppDashboardMockup />
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
export default Hero;
