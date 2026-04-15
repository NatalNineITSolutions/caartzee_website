'use client';
import WhatsAppChatMockup from './WhatsAppChatMockup';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const FeaturesV2 = () => {
  return (
    <section className="pt-14 pb-24 md:pt-16 md:pb-24 lg:pt-[88px] lg:pb-[140px] xl:pt-[100px] xl:pb-[150px]">
      <div className="main-container space-y-[100px] md:space-y-[150px] xl:space-y-[150px]">
        {/* AI Assistant Section */}

        {/* Features 2 Section */}
        <div className="flex flex-col-reverse items-center justify-between gap-x-5 gap-y-28 sm:gap-y-24 md:gap-x-10 md:gap-y-20 lg:flex-row-reverse lg:items-start lg:gap-x-16 2xl:gap-x-24">
          <div className="w-full lg:w-1/2">
            <div className="mb-8 space-y-3 px-4 text-center sm:px-0 md:text-left lg:mb-14">
              <RevealAnimation delay={0.3}>
                <h3 className="md:text-heading-3 lg:text-heading-2 font-black tracking-tight">
                  Your AI-powered sales assistant,{' '}<span className="text-primary-500">active 24/7.</span>
                </h3>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="lg:max-w-[596px] text-lg font-medium opacity-80">
                  Snap’s built-in AI handles customer questions, product recommendations, and order follow-ups automatically — even when you’re offline. Your business never sleeps.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.5}>
              <div className="flex justify-center md:justify-start">
                <LinkButton
                  href="https://cartly.zeedone.com/register"
                  className="btn btn-xl btn-primary rounded-2xl shadow-xl shadow-primary-500/10">
                  Start Your Free Trial
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          {/* Features Image -> WhatsApp Chat Mockup */}
          <div className="relative -mt-20 w-full md:-mt-36 lg:w-1/2">
            <RevealAnimation delay={0.4}>
              <div className="relative z-10 lg:max-w-[480px] lg:justify-self-end">
                <WhatsAppChatMockup />
              </div>
            </RevealAnimation>
            <div className="absolute top-[55%] -left-3 z-20 flex flex-col items-center md:-left-5 lg:-left-2 xl:-left-3 2xl:-left-8">
              {/* Decorative elements removed for cleaner 'Elite' UI focused on the interactive mockup */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
FeaturesV2.displayName = 'FeaturesV2';
export default FeaturesV2;
