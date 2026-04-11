'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const backers = ['LIGHTSPEED', 'MATRIX', 'OXFORD VENTURES'];
const founders = ['PRODUCT HUNT', 'CRED', 'RAZORPAY', 'OYO', 'KNOWLARITY', 'SNAPDEAL'];

const AboutPartners = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-8">
      <div className="main-container max-w-[1000px]">
        {/* Backed By */}
        <div className="text-center mb-12">
          <RevealAnimation>
            <h2 className="text-xl font-bold text-secondary/40 dark:text-accent/40 uppercase tracking-[0.2em] mb-12">We are backed by</h2>
          </RevealAnimation>
          
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {backers.map((name, index) => (
              <RevealAnimation key={name} delay={0.1 * index}>
                <span className="text-2xl md:text-3xl font-black text-secondary/20 dark:text-accent/20 hover:text-secondary/80 dark:hover:text-accent/80 transition-colors cursor-default">
                  {name}
                </span>
              </RevealAnimation>
            ))}
          </div>
        </div>

        {/* Founders */}
        <div className="text-center mt-24">
          <RevealAnimation>
            <p className="text-sm font-semibold text-secondary/40 dark:text-accent/40 mb-12 italic">and the founders of</p>
          </RevealAnimation>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-center opacity-40">
             {founders.map((name, index) => (
              <RevealAnimation key={name} delay={0.05 * index}>
                 <span className="text-[14px] font-bold text-secondary hover:text-primary-500 transition-colors cursor-default whitespace-nowrap">
                  {name}
                </span>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPartners.displayName = 'AboutPartners';
export default AboutPartners;
