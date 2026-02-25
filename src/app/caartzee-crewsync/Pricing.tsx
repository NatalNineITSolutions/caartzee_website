'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { useState } from 'react';
import PricingCard from './PricingCard';

interface PricingPlan {
  id: string;
  title: string;
  description: string;
  features: string[];
  monthlyPrice: number;
  yearlyPrice: number;
  yearlySavings?: number;
  buttonText: string;
  buttonHref: string;
  highlight: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'Starter Plan',
    title: 'Starter Plan ',
    description: ' High Margin Entry',
    features: ['3 AI Agents', '8 Campaigns', '300 Contacts', 'C5 Flow Automations', '5 Knowledge Bases', '3 Phone Numbers', '200 Included Credits', 'Basic Support'],
    monthlyPrice: 2999,
    yearlyPrice: 29999,
    buttonText: 'Get started',
    buttonHref: '/contact-us',
    highlight: false,
  },
  {
    id: 'Growth Plan ',
    title: 'Growth Plan',
    description: 'Core Profit Driver',
    features: [
      '15 AI Agents',
      '30 Campaigns',
      '2,000 Contacts',
      '15 Flow Automations',
      '15 Knowledge Bases',
      '8 Phone Numbers',
      'Choose Your LLM',
      '800 Included Credits',
      'Call Recording + Analytics',
      'Priority Support',
    ],
    monthlyPrice: 6999,
    yearlyPrice: 69999,
    yearlySavings: 13989,
    buttonText: 'Get started',
    buttonHref: '/contact-us',
    highlight: true,
  },
  {
    id: 'Scale Plan',
    title: 'Scale Plan',
    description: 'Enterprise Margin Expansion',
    features: ['40 AI Agents', 'Unlimited Campaigns', '10,000 Contacts', 'Unlimited Flow Automations', 'Unlimited Knowledge Bases', '20 Phone Numbers', 'API Access', 'White Label Option', '2,000 Included Credits', 'Dedicated Account Manager', 'Premium Support + SLA'],
    monthlyPrice: 14999,
    yearlyPrice: 149999,
    yearlySavings: 60000,
    buttonText: 'Get started',
    buttonHref: '/contact-us',
    highlight: false,
  },
  {
    id: 'usage-and-credits',
    title: 'Usage & Credits',
    description: 'Pay as you grow with flexible credits.',
    features: [
      '1 Outbound AI Call (1 min) – 1 Credit',
      '1 Inbound Call (1 min) – 1 Credit',
      'Call Recording – +0.2 Credit',
      'Transcription – +0.3 Credit',
      '500 Credits – ₹999 Top-Up',
      '1,000 Credits – ₹1,799 Top-Up',
      '5,000 Credits – ₹7,999 Top-Up'
    ],
    monthlyPrice: 0,
    yearlyPrice: 0,
    buttonText: 'Contact Sales',
    buttonHref: '/contact-us',
    highlight: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-[80px] md:py-[150px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="space-y-7">
            {/* heading  */}
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-ivory dark:bg-background-6 dark:text-accent">Pricing plan</span>
              </RevealAnimation>
              <div className="space-y-3 text-center">
                <RevealAnimation delay={0.2}>
                  <h2 className="font-normal dark:text-accent">
                    Flexible <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">pricing</span> for every stage
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-tagline-1 text-secondary dark:text-accent/80 font-normal">
                    Choose a plan that fits your content goals—no hidden fees.
                  </p>
                </RevealAnimation>
              </div>
            </div>

            {/* pricing-toggle  */}
            <RevealAnimation delay={0.4}>
              <div className="relative z-0 mx-auto w-full max-w-[293px]">
                <RevealAnimation delay={1} duration={1} direction="up" offset={200}>
                  <span className="bg-secondary text-tagline-2 absolute -top-2.5 -right-6 z-11 inline-block w-[90px] rotate-20 rounded-[36px] px-3.5 py-1.5 font-medium text-white capitalize shadow-xs">
                    save 40%
                  </span>
                </RevealAnimation>
                <label className="shadow-1 bg-ns-ivory dark:bg-background-6 relative z-10 inline-flex cursor-pointer items-center rounded-full px-[57px] py-6">
                  <span className="pr-2.5 text-base font-normal text-black dark:text-white">Monthly</span>
                  <input
                    type="checkbox"
                    id="priceCheck"
                    className="peer sr-only"
                    aria-label="Toggle between monthly and yearly pricing"
                    checked={isYearly}
                    onChange={(e) => setIsYearly(e.target.checked)}
                  />
                  <span className="border-stroke-1/30 dark:border-stroke-6 after:bg-accent before:bg-secondary relative h-[28px] w-13 rounded-[34px] border bg-transparent before:absolute before:-top-[5px] before:-left-[6px] before:-z-10 before:h-[36px] before:w-[62px] before:rounded-[34px] before:p-[5px] before:transition-all before:content-[''] after:absolute after:start-[2px] after:top-1/2 after:size-6 after:-translate-y-1/2 after:rounded-full after:transition-all after:content-[''] peer-checked:after:start-[2px] peer-checked:after:translate-x-[94%]"></span>
                  <span className="ps-2.5 text-base font-normal text-black dark:text-white">Yearly</span>
                </label>
              </div>
            </RevealAnimation>
          </div>

          {/* plans  */}
          <div className="relative">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
              {pricingPlans.map((plan, index) => (
                <RevealAnimation key={plan.id} delay={0.4 + index * 0.1}>
                  <PricingCard
                    title={plan.title}
                    description={plan.description}
                    features={plan.features}
                    monthlyPrice={plan.monthlyPrice}
                    yearlyPrice={plan.yearlyPrice}
                    buttonText={plan.buttonText}
                    buttonHref={plan.buttonHref}
                    highlight={plan.highlight}
                    isYearly={isYearly}
                  />
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
