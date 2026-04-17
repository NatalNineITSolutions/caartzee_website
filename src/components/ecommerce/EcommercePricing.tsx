'use client';
import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import Link from 'next/link';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter Package',
    price: '₹499',
    period: '/month',
    highlight: "Launch your full ecommerce store online within 24 hours.",
    description: 'Perfect for small businesses starting their digital journey with all essential setup tools included.',
    features: [
      { text: 'Up to 100 Products', link: undefined, badge: undefined },
      { text: '50 GB Storage', link: undefined, badge: undefined },
      { text: '7 Premium Themes included', link: undefined, badge: undefined },
      { text: 'Full Ecommerce Setup within 24 hours', link: undefined, badge: undefined },
      { text: 'Basic Inventory Management', link: undefined, badge: undefined },
      { text: 'Coupon & Discount System', link: undefined, badge: undefined },
    ],
    buttonText: 'Get Started Now',
    buttonLink: '/contact-us',
    accentColor: 'border-ns-yellow',
  },
  {
    id: 'professional',
    name: 'Professional Package',
    price: '₹1,024',
    period: '/month',
    highlight: "Customizable themes and advanced management tools.",
    description: 'Everything you need to scale your growing brand with customized features and faster turnaround.',
    features: [
      { text: 'Up to 300 Products', link: undefined, badge: undefined },
      { text: '100 GB Storage', link: undefined, badge: undefined },
      { text: 'Customizable Store Themes', link: undefined, badge: undefined },
      { text: 'Launch ready within 48 hours', link: undefined, badge: undefined },
      { text: 'Advanced Inventory Management', link: undefined, badge: undefined },
      { text: 'Campaign & Marketing Tools', link: undefined, badge: undefined },
      { text: 'Custom Domain Support', link: undefined, badge: undefined },
    ],
    buttonText: 'Upgrade to Professional',
    buttonLink: '/contact-us',
    accentColor: 'border-ns-green',
    isPopular: true,
  },
  {
    id: 'ultimate',
    name: 'Ultimate Package',
    price: '₹2,000',
    period: '/month',
    highlight: "Premium customizable themes with Mobile App support.",
    description: 'The complete enterprise suite for large brands requiring maximum performance and direct support.',
    features: [
      { text: 'Up to 500 Products', link: undefined, badge: undefined },
      { text: '500 GB Storage', link: undefined, badge: undefined },
      { text: 'Premium Fully Customizable Themes', link: undefined, badge: undefined },
      { text: 'Dedicated Mobile App (iOS & Android)', link: undefined, badge: undefined },
      { text: 'Launch ready within one week', link: undefined, badge: undefined },
      { text: 'Caartzee Snap', link: '/caartzee-snap', badge: 'New' },
      { text: 'Digital Marketing Support', link: undefined, badge: undefined },
      { text: 'Direct Platform Integration', link: undefined, badge: undefined },
      { text: 'Blazing Fast Performance', link: undefined, badge: undefined },
    ],
    buttonText: 'Get the Ultimate Suite',
    buttonLink: '/contact-us',
    accentColor: 'border-ns-cyan',
  },
];

const EcommercePricing = () => {
  return (
    <section className="bg-background-1 dark:bg-background-8 py-8 md:py-10 lg:py-12">
      <div className="main-container">
        <div className="mb-8 md:mb-10 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-yellow-v2 mb-5 uppercase tracking-wider font-semibold">Our Packages</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 md:text-heading-2 font-medium mb-6">
              Detailed <span className="text-primary-500">Pricing</span> Plans
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[700px] text-lg text-secondary/70 dark:text-accent/70 leading-relaxed">
              Transparent, detailed packages designed to fit your business at every stage of growth. No hidden fees, just pure performance.
            </p>
          </RevealAnimation>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {pricingPlans.map((plan, index) => (
            <RevealAnimation key={plan.id} delay={0.4 + index * 0.1} direction="up">
              <div
                className={`flex flex-col lg:flex-row bg-white dark:bg-background-6 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border-t-8 ${plan.accentColor} group`}
              >
                {/* Left Section: Pricing & CTA */}
                <div className="lg:w-1/3 p-8 lg:p-10 bg-background-2 dark:bg-background-7 flex flex-col justify-center border-r border-stroke-2 dark:border-stroke-6">
                  <span className="text-tagline-2 font-bold text-primary-500 uppercase tracking-widest mb-4 inline-block">
                    {plan.name}
                  </span>
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl lg:text-5xl font-bold text-secondary dark:text-accent tracking-tighter">
                      {plan.price}
                    </span>
                    <span className="text-secondary/50 dark:text-accent/50 ml-3 text-xl font-medium">
                      {plan.period}
                    </span>
                  </div>
                  <LinkButton
                    href={plan.buttonLink}
                    className="btn btn-primary hover:btn-secondary shadow-lg shadow-primary-500/30 transition-all duration-300 first-letter:uppercase"
                  >
                    {plan.buttonText}
                  </LinkButton>
                  
                  {plan.isPopular && (
                    <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-primary-500 font-bold text-sm uppercase tracking-widest">
                      <span className="flex size-2 rounded-full bg-primary-500 animate-pulse"></span>
                      Recommended Choice
                    </div>
                  )}
                </div>

                {/* Right Section: Details & Features */}
                <div className="lg:w-2/3 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-8">
                    <h3 className="text-heading-6 md:text-heading-4 mb-4 text-secondary dark:text-accent leading-tight font-medium">
                      {plan.highlight}
                    </h3>
                    <p className="text-secondary/60 dark:text-accent/60 text-lg leading-relaxed max-w-[650px]">
                      {plan.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 group/item">
                        <div className="bg-primary-500/10 dark:bg-primary-500/20 rounded-full p-2 group-hover/item:bg-primary-500 group-hover/item:scale-110 transition-all duration-300">
                          <CheckIcon className="w-3.5 h-3.5 text-primary-500 group-hover/item:text-white" />
                        </div>
                        {feature.link ? (
                          <div className="flex items-center gap-2">
                            <Link
                              href={feature.link}
                              className="text-primary-500 font-semibold text-lg hover:text-secondary dark:hover:text-white transition-all underline underline-offset-4 decoration-primary-500/30 hover:decoration-primary-500">
                              {feature.text}
                            </Link>
                            {feature.badge && (
                              <span className="badge badge-yellow-v2 text-[10px] py-0.5 px-2 uppercase font-black animate-bounce shadow-sm">
                                {feature.badge}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="text-secondary/80 dark:text-accent/80 font-medium text-lg">
                            {feature.text}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

EcommercePricing.displayName = 'EcommercePricing';
export default EcommercePricing;
