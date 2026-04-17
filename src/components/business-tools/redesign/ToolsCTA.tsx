'use client';
import workBg from '@public/images/ns-img-27.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';

const ToolsCTA = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-8">
      <div className="main-container">
        <RevealAnimation direction="up">
          <div className="bg-secondary relative z-0 mx-auto w-full overflow-hidden rounded-[48px] p-12 md:p-20 lg:p-28 shadow-2xl">
            {/* Background Image (The Purple Glow) */}
            <div className="absolute inset-0 -z-10 h-full w-full">
              <Image quality={100} src={workBg} alt="Background Glow" className="h-full w-full object-cover" />
            </div>

            <div className="flex flex-col items-center text-center">
              <h2 className="text-heading-3 md:text-heading-1 font-medium text-white leading-tight mb-8 tracking-tighter">
                Ready to power <br />
                your ecosystem?
              </h2>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/70 mb-12 leading-relaxed">
                Join thousands of modern merchants who scale their retail storefronts every day with Caartzee's specialized tool suite.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="https://cartly.zeedone.com/register" 
                  className="btn btn-xl btn-primary hover:btn-white dark:hover:btn-white-dark dark:btn-white w-full sm:w-60"
                >
                  <span>Start Free Trial</span>
                </Link>
                <Link 
                  href="/contact-us" 
                  className="btn btn-xl border border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-white/50 w-full sm:w-60"
                >
                  <span>Talk to Sales</span>
                </Link>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

ToolsCTA.displayName = 'ToolsCTA';
export default ToolsCTA;
