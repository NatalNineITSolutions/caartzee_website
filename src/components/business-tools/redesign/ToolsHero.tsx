'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const ToolsHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0C10] pt-40 pb-24 md:pt-48 md:pb-32 xl:pt-60 xl:pb-40">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden blur-[120px] opacity-20">
        <div className="size-[600px] rounded-full bg-primary-500/30" />
      </div>
      
      <div className="main-container relative z-10 text-center">
        <div className="mx-auto max-w-[900px]">
          <RevealAnimation direction="up" delay={0.1}>
            <h1 className="text-heading-3 md:text-heading-1 leading-tight font-medium text-white tracking-tight">
              The <span className="text-primary-500">Caartzee</span> <br />
              Business Ecosystem
            </h1>
          </RevealAnimation>
          
          <RevealAnimation direction="up" delay={0.3}>
            <p className="mx-auto mt-8 max-w-[700px] text-lg text-white/60 md:text-xl leading-relaxed font-normal">
              Scale your retail operations with our suite of specialized tools. 
              From branding to operational syncing, we provide everything you need to sell smarter.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

ToolsHero.displayName = 'ToolsHero';
export default ToolsHero;
