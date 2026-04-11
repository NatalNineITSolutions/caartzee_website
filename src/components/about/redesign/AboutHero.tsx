'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0C10] pt-40 pb-24 md:pt-48 md:pb-32 xl:pt-60 xl:pb-40">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden blur-[120px] opacity-20">
        <div className="size-[600px] rounded-full bg-primary-500/30" />
      </div>
      
      <div className="main-container relative z-10 text-center">
        <div className="mx-auto max-w-[900px]">
          <RevealAnimation direction="up" delay={0.1}>
            <h1 className="text-[40px] leading-tight font-bold text-white md:text-[64px] xl:text-[72px]">
              We are in the business of <br />
              building <span className="text-primary-500">entrepreneurs.</span>
            </h1>
          </RevealAnimation>
          
          <RevealAnimation direction="up" delay={0.3}>
            <p className="mx-auto mt-8 max-w-[700px] text-lg text-white/60 md:text-xl">
              We are a team of dark horses who believe that technology will ignite the next industrial revolution. 
              Our mission is to reshape the digital retail landscape by defining the future of commerce.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

AboutHero.displayName = 'AboutHero';
export default AboutHero;
