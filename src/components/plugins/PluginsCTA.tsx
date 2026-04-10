'use client';

import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const PluginsCTA = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="relative flex flex-col items-center justify-between gap-10 overflow-hidden rounded-[40px] bg-gradient-to-r from-ns-linen to-[#FEA1B8] p-10 md:flex-row md:p-20 shadow-2xl shadow-ns-linen/20">
            {/* Background Decorative Shapes */}
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white/5 blur-2xl"></div>
            
            <div className="relative z-10 max-w-[650px] text-left">
              <h2 className="mb-6 text-heading-3 font-semibold text-white md:text-heading-2 leading-tight">
                Build & Sell Your <br />
                Own Caartzee Plugins
              </h2>
              <p className="text-xl text-white/90 font-medium">
                Join our developer ecosystem and reach thousands of merchants looking to enhance their stores. Turn your code into a recurring revenue stream.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <LinkButton
                href="https://cartly.zeedone.com/register"
                className="btn btn-xl-v2 rounded-2xl bg-white text-ns-linen hover:bg-secondary hover:text-white dark:bg-white dark:text-ns-linen border-none shadow-lg shadow-black/10 transition-all font-bold">
                Become a Partner
              </LinkButton>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default PluginsCTA;
