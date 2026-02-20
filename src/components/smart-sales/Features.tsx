import cardOneImg from '@public/images/ns-img-90.png';
import cardOneImgDark from '@public/images/ns-img-dark-63.png';

import cardTwoImg from '@public/images/ns-img-91.png';
import cardTwoImgDark from '@public/images/ns-img-dark-64.png';

import cardThreeImg from '@public/images/ns-img-92.png';
import cardThreeImgDark from '@public/images/ns-img-dark-65.png';

import cardFourImg from '@public/images/ns-img-93.png';
import cardFourImgDark from '@public/images/ns-img-dark-66.png';

import cardFiveImg from '@public/images/ns-img-94.png';
import cardFiveImgDark from '@public/images/ns-img-dark-67.png';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Features = () => {
  return (
    <section className="pt-[100px] pb-[100px] md:pt-[160px]" aria-label="Features">
      <div className="main-container">
        <div className="space-y-[70px]">
          
          {/* Feature Heading */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.3}>
              <h2 className="mx-auto max-w-[814px]">
                The Smart Sales Engine Built for Modern Commerce
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[734px]">
                Caartzee powers your entire selling ecosystem from multi channel commerce 
                and intelligent automation to real-time analytics and operational control.
                Everything you need to scale, unified in one platform.
              </p>
            </RevealAnimation>
          </div>

          {/* 1st Row */}
          <div className="flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:gap-x-8">

            {/* Card One */}
            <RevealAnimation delay={0.5}>
              <div className="space-y-3">
                <div className="dark:bg-background-5 w-full max-w-[409px] rounded-[20px] bg-white p-2.5">
                  <figure className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-4">
                    <Image
                      src={cardOneImg}
                      alt="Multi-channel selling feature"
                      className="h-full w-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardOneImgDark}
                      alt="Multi-channel selling feature"
                      className="hidden h-full w-full object-cover dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="space-y-1">
                  <h3 className="text-heading-5">Multi-Channel Selling</h3>
                  <p>Sell across storefronts, marketplaces, and social platforms from one unified dashboard.</p>
                </div>
              </div>
            </RevealAnimation>

            {/* Card Two */}
            <RevealAnimation delay={0.6}>
              <div className="space-y-3">
                <div className="dark:bg-background-5 w-full max-w-[409px] rounded-[20px] bg-white p-2.5">
                  <figure className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-4">
                    <Image
                      src={cardTwoImg}
                      alt="Automated sales workflows"
                      className="h-full w-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardTwoImgDark}
                      alt="Automated sales workflows"
                      className="hidden h-full w-full object-cover dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="space-y-1">
                  <h3 className="text-heading-5">Automated Sales Workflows</h3>
                  <p>Streamline orders, invoicing, payments, and fulfillment with intelligent automation.</p>
                </div>
              </div>
            </RevealAnimation>

            {/* Card Three */}
            <RevealAnimation delay={0.7}>
              <div className="space-y-3">
                <div className="dark:bg-background-5 w-full max-w-[409px] rounded-[20px] bg-white p-2.5">
                  <figure className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-4">
                    <Image
                      src={cardThreeImg}
                      alt="Revenue insights and analytics"
                      className="h-full w-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardThreeImgDark}
                      alt="Revenue insights and analytics"
                      className="hidden h-full w-full object-cover dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="space-y-1">
                  <h3 className="text-heading-5">Revenue Intelligence</h3>
                  <p>Track performance, customer behavior, and growth trends with real time analytics.</p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* 2nd Row */}
          <div className="flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:gap-x-8">

            {/* Card Four */}
            <RevealAnimation delay={0.8}>
              <div className="space-y-3">
                <div className="dark:bg-background-5 w-full max-w-[409px] rounded-[20px] bg-white p-2.5">
                  <figure className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-4">
                    <Image
                      src={cardFourImg}
                      alt="Vendor and team management"
                      className="h-full w-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardFourImgDark}
                      alt="Vendor and team management"
                      className="hidden h-full w-full object-cover dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="space-y-1">
                  <h3 className="text-heading-5">Vendor & Team Control</h3>
                  <p>Manage vendors, staff roles, and permissions with centralized operational control.</p>
                </div>
              </div>
            </RevealAnimation>

            {/* Card Five */}
            <RevealAnimation delay={0.9}>
              <div className="space-y-3">
                <div className="dark:bg-background-5 w-full max-w-[409px] rounded-[20px] bg-white p-2.5">
                  <figure className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-4">
                    <Image
                      src={cardFiveImg}
                      alt="Custom sales dashboards"
                      className="h-full w-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardFiveImgDark}
                      alt="Custom sales dashboards"
                      className="hidden h-full w-full object-cover dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="space-y-1">
                  <h3 className="text-heading-5">Custom Sales Dashboards</h3>
                  <p>Visualize revenue, orders, inventory, and growth metrics in dashboards tailored to your business.</p>
                </div>
              </div>
            </RevealAnimation>

          </div>
        </div>
      </div>
    </section>
  );
};

Features.displayName = 'Features';
export default Features;