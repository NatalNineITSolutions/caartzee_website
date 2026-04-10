'use client';

import RevealAnimation from '../animation/RevealAnimation';
import { MousePointer2, Edit3, ShoppingCart } from 'lucide-react';

const featureCards = [
  {
    title: 'Fully Responsive',
    description: "Incredibly fast storefronts. Don't take our word for it, start selling online and see it for yourself!",
    icon: MousePointer2,
  },
  {
    title: 'Highly Customizable',
    description: 'Customizing your theme according to your branding could not be as easy as it is on Caartzee.',
    icon: Edit3,
  },
  {
    title: 'Quick checkouts',
    description: 'Offer your customers a seamless shopping experience in addition to quick checkouts.',
    icon: ShoppingCart,
  },
];

const ThemesHero = () => {
  return (
    <section className="bg-background-8 pt-[160px] pb-[100px] text-center text-white relative">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <h1 className="mb-6 !text-white text-heading-2 font-semibold">
            Caartzee Themes
          </h1>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <p className="mx-auto mb-16 max-w-[700px] text-lg !text-white/80">
            Discover themes from our curated collection & start with the one perfect 
            for your business.
          </p>
        </RevealAnimation>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-12">
          {featureCards.map((card, idx) => (
            <RevealAnimation key={card.title} delay={0.3 + idx * 0.1} direction="up">
              <div className="rounded-[32px] bg-white p-10 text-center text-secondary shadow-2xl transition-transform hover:-translate-y-2 flex flex-col items-center">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-ns-ivory text-ns-linen ring-1 ring-black/5">
                  <card.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-secondary">
                  {card.title}
                </h3>
                <p className="text-secondary/60 leading-relaxed text-base">
                  {card.description}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
      
      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full max-w-[800px] opacity-20 blur-[120px] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-ns-linen to-purple-500 rounded-full" />
      </div>
    </section>
  );
};

export default ThemesHero;
