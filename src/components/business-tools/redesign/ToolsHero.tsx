'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const ToolsHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0C10] pt-40 pb-24 md:pt-48 md:pb-32 xl:pt-60 xl:pb-40">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          src="/video/The_Caartzee_Business_Ecosyste.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="h-full w-full object-cover opacity-40"
        />
        {/* Gradient overlay to ensure text remains readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0C10]/80 via-[#0A0C10]/50 to-[#0A0C10]" />
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
