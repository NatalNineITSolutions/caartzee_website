'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';

const categories = [
  {
    title: 'Marketing',
    description: 'Boost traffic and sales with powerful ad & social tools.',
    image: '/images/plugins/marketing.png',
    bgColor: 'bg-[#F3E8FF]', // Soft purple
    textColor: 'text-purple-900',
  },
  {
    title: 'Analytics',
    description: 'Dive deep into store data and customer insights.',
    image: '/images/plugins/analytics.png',
    bgColor: 'bg-[#FEF3C7]', // Soft gold
    textColor: 'text-amber-900',
  },
  {
    title: 'Support',
    description: 'Deliver instant help with chat and ticket systems.',
    image: '/images/plugins/support.png',
    bgColor: 'bg-[#DBEAFE]', // Soft blue
    textColor: 'text-blue-900',
  },
];

const PluginsHero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white dark:bg-background-8">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -z-10 h-full w-full opacity-30 blur-3xl">
        <div className="absolute top-[-10%] right-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-200 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20" />
      </div>

      <div className="main-container text-center">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-ivory dark:bg-background-6 dark:text-accent mb-6 uppercase tracking-widest">
            Caartzee Marketplace
          </span>
        </RevealAnimation>

        <RevealAnimation delay={0.2}>
          <h1 className="text-heading-1 font-normal dark:text-accent mb-6">
            Extend Your Store with <br />
            <span className="text-ns-linen">Power-packed Plugins</span>
          </h1>
        </RevealAnimation>

        <RevealAnimation delay={0.3}>
          <p className="mx-auto max-w-[700px] text-lg text-secondary/70 dark:text-accent/70 mb-16">
            Scale your business effortlessly with over 100+ integrations built for 
            marketing, analytics, logistics, and world-class customer support.
          </p>
        </RevealAnimation>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <RevealAnimation key={cat.title} delay={0.4 + idx * 0.1}>
              <div className={`group relative h-full rounded-[32px] ${cat.bgColor} p-8 text-left transition-transform hover:-translate-y-2`}>
                <div className="mb-8 overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm shadow-sm ring-1 ring-black/5 transition-transform group-hover:scale-105">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className={`text-2xl font-semibold ${cat.textColor} mb-2`}>
                  {cat.title}
                </h3>
                <p className={`${cat.textColor}/70 text-base leading-relaxed`}>
                  {cat.description}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PluginsHero;
