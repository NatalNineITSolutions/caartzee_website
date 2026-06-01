'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const clientLogos = [
  // { id: 1, src: '/images/icons/customer1.png', alt: 'Client Logo 1' },
  { id: 2, src: '/images/icons/customer2.png', alt: 'Client Logo 2' },
  { id: 3, src: '/images/icons/customer3.png', alt: 'Client Logo 3' },
  { id: 4, src: '/images/icons/customer4.png', alt: 'Client Logo 4' },
  { id: 5, src: '/images/icons/customer5.png', alt: 'Client Logo 5' },
  { id: 6, src: '/images/icons/customer6.png', alt: 'Client Logo 6' },
  { id: 7, src: '/images/icons/customer7.png', alt: 'Client Logo 7' },
  { id: 8, src: '/images/icons/new-mileora-logo.png', alt: 'Client Logo 8' },
  { id: 8, src: '/images/icons/karur luxe.png', alt: 'Client Logo 8' }
];

const Brands = () => {
  return (
    <section className="py-12 bg-white dark:bg-background-8 border-y border-stroke-1 dark:border-white/5 overflow-hidden">
      <div className="main-container mb-6 text-center">
        <RevealAnimation delay={0.1}>
          <span className="text-[12px] font-bold text-secondary/40 dark:text-accent/40 uppercase tracking-[0.3em]">
            Trusted by leading brands worldwide
          </span>
        </RevealAnimation>
      </div>

      <div className="relative group">
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          autoFill={true}
          className="overflow-hidden"
        >
          <div className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32">
            {clientLogos.map((logo) => (
              <div
                key={logo.id}
                className="opacity-80 transition-all duration-500 cursor-default"
              >
                <div className="relative w-32 h-12 md:w-48 md:h-16">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </Marquee>

        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 hidden h-full w-[70px] bg-gradient-to-r from-white via-white/80 to-transparent dark:from-[#070b10] dark:via-[#070b10]/80 dark:to-transparent md:block md:w-[100px] lg:w-[150px]" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 hidden h-full w-[70px] bg-gradient-to-l from-white via-white/80 to-transparent dark:from-[#070b10] dark:via-[#070b10]/80 dark:to-transparent md:block md:w-[100px] lg:w-[150px]" />
      </div>
    </section>
  );
};

Brands.displayName = 'Brands';
export default Brands;
