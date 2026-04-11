'use client';
import workBg from '@public/images/ns-img-27.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';

const valueCards = [
  {
    id: 1,
    badge: '🚀',
    title: 'Innovation Focused',
    description: 'We build with the latest technology to ensure your business stays ahead of the curve.',
  },
  {
    id: 2,
    badge: '🤝',
    title: 'Merchant First',
    description: 'Our platform is designed by retailers for retailers, focusing on simplifying your growth.',
  },
  {
    id: 3,
    badge: '📈',
    title: 'Growth Driven',
    description: 'We provide the tools and insights necessary to scale your operations smarter, not harder.',
  },
];

const AboutCTA = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-8">
      <div className="main-container">
        <div className="bg-secondary relative z-0 mx-auto w-full overflow-hidden rounded-[40px] p-8 md:p-16 lg:p-24 shadow-2xl">
          {/* Background Image (The Purple Glow) */}
          <div className="absolute inset-0 -z-10 h-full w-full">
            <Image quality={100} src={workBg} alt="Background Glow" className="h-full w-full object-cover" />
          </div>

          <div className="mb-20 flex flex-col items-center space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="text-[32px] md:text-[48px] font-bold text-white leading-tight max-w-[800px]">
                Do our values resonate <br />
                with you?
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto mt-6 max-w-[700px] text-lg text-white/70">
                We would love to hear from you. Work with the latest technology and help the next generation of retailers come and sell online.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {valueCards.map((card, index) => (
              <RevealAnimation key={card.id} delay={0.3 + index * 0.1}>
                <div className="flex flex-col items-center justify-center rounded-[24px] bg-white/5 p-8 text-center backdrop-blur-xl border border-white/10 transition-transform hover:-translate-y-2">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                    {card.badge}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{card.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <RevealAnimation delay={0.7}>
                <Link 
                  href="https://cartly.zeedone.com/register" 
                  className="rounded-full bg-white px-8 py-4 text-lg font-bold text-secondary transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                >
                  See open positions
                </Link>
            </RevealAnimation>
            <RevealAnimation delay={0.8}>
                <Link 
                  href="/contact" 
                  className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
                >
                  Contact Us
                </Link>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutCTA.displayName = 'AboutCTA';
export default AboutCTA;
