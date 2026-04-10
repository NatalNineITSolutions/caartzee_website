'use client';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';

interface Theme {
  id: string;
  name: string;
  image: string;
  href: string;
  tags: string[];
}

const themes: Theme[] = [
  {
    id: '11-11palette',
    name: '11-11 Palette',
    image: '/images/theme1.png',
    href: 'https://11-11palette.com/',
    tags: ['Minimalist', 'Fashion', 'D2C'],
  },
  {
    id: 'freezenfry',
    name: 'Freezenfry',
    image: '/images/theme2.png',
    href: 'https://freezenfry.com/',
    tags: ['Food', 'Quick Service', 'Sleek UI'],
  },
  {
    id: 'leaders-white',
    name: 'Leaders White',
    image: '/images/theme3.png',
    href: 'https://leaderswhite.com/',
    tags: ['Business', 'Professional', 'Corporate'],
  },
  {
    id: 'kiddy-ai',
    name: 'Kiddy.Ai',
    image: '/images/theme4.png',
    href: 'https://kiddyai.in/',
    tags: ['Education', 'AI Powered', 'Modern'],
  },
  {
    id: 'v-trends',
    name: 'V-Trends',
    image: '/images/theme5.png',
    href: 'https://vtrends.net/',
    tags: ['Fashion', 'Trends', 'Stylish UI'],
  },
  {
    id: 'kasadini',
    name: 'Kasadini',
    image: '/images/theme6.png',
    href: 'https://kasadini.in/',
    tags: ['E-commerce', 'Retails', 'Custom UI'],
  },
  {
    id: 'metshop',
    name: 'MetShop',
    image: '/images/theme7.png',
    href: 'https://metsho.site/',
    tags: ['Multi-vendor', 'Marketplace', 'D2C'],
  },
  {
    id: 'nammabasket',
    name: 'NammaBasket',
    image: '/images/theme8.png',
    href: 'https://nammabasket.shop/',
    tags: ['Grocery', 'Delivery', 'Feature Cards'],
  },
];

const ThemeGrid = () => {
  return (
    <section className="bg-white py-20 dark:bg-background-8 overflow-hidden">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <h2 className="mb-14 text-center text-heading-4 font-semibold md:text-heading-3 dark:text-accent">
            Featured Marketplace Themes
          </h2>
        </RevealAnimation>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {themes.map((theme, index) => (
            <RevealAnimation key={theme.id} delay={0.2 + (index % 4) * 0.1}>
              <Link
                href={theme.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block space-y-5"
              >
                <div className="relative h-[420px] w-full overflow-hidden rounded-[32px] border border-stroke-2 dark:border-stroke-6 shadow-lg transition-shadow group-hover:shadow-xl">
                  <Image
                    src={theme.image}
                    alt={theme.name}
                    width={320}
                    height={900}
                    className="absolute top-0 left-0 w-full transition-transform duration-[4000ms] ease-linear group-hover:-translate-y-[40%]"
                  />
                </div>
                
                <div className="space-y-2 text-left px-2">
                  <h3 className="text-2xl font-bold text-secondary dark:text-accent group-hover:text-ns-linen transition-colors">
                    {theme.name}
                  </h3>
                  <p className="text-sm font-medium text-secondary/50 dark:text-accent/50 flex flex-wrap items-center gap-2">
                    {theme.tags.map((tag, idx) => (
                      <span key={tag} className="flex items-center gap-2">
                        {tag}
                        {idx !== theme.tags.length - 1 && (
                          <span className="size-1 rounded-full bg-secondary/20 dark:bg-accent/20" />
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </Link>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeGrid;
