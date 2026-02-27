import RevealAnimation from '@/components/animation/RevealAnimation';
import teamImage546 from '@public/images/ns-img-546.png';
import teamImage547 from '@public/images/ns-img-547.png';
import teamImage548 from '@public/images/ns-img-548.png';
import teamImage549 from '@public/images/ns-img-549.png';
import teamImage550 from '@public/images/ns-img-550.png';
import teamImage551 from '@public/images/ns-img-551.png';
import socialMedia from '@public/images/social-media.png';
import { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import FeatureImgCard from './FeatureImgCard';

interface TeamItem {
  id: string;
  title: string;
  imageSrc: string;
  href: string;
  className?: string;
}

const teamItems: TeamItem[] = [
  {
    id: '11-11palette',
    title: '11-11 Palette',
    imageSrc: '/images/theme1.png',
    href: 'https://11-11palette.com/',
    className: 'ml-6',
  },
  {
    id: 'freezenfry',
    title: 'Freezenfry',
    imageSrc: '/images/theme2.png',
    href: 'https://freezenfry.com/',
  },
  {
    id: 'leaders-white',
    title: 'Leaders White',
    imageSrc: '/images/theme3.png',
    href: 'https://leaderswhite.com/',
  },
  {
    id: 'kiddy-ai',
    title: 'Kiddy.Ai',
    imageSrc: '/images/theme4.png',
    href: 'https://kiddyai.in/',
  },
  {
    id: 'v-trends',
    title: 'V-Trends',
    imageSrc: '/images/theme5.png',
    href: 'https://vtrends.net/',
  },
  {
    id: 'kasadini',
    title: 'Kasadini',
    imageSrc: '/images/theme6.png',
    href: 'https://kasadini.in/',
  },
  {
    id: 'metshop',
    title: 'MetShop',
    imageSrc: '/images/theme7.png',
    href: 'https://metsho.site/',
  },
  {
    id: 'nammabasket',
    title: 'NammaBasket',
    imageSrc: '/images/theme8.png',
    href: 'https://nammabasket.shop/',
  },
];

const FeaturesV2 = () => {
  return (
    <section
      className="space-y-[76px] overflow-hidden py-[80px] md:py-[120px] lg:py-[154px]"
      aria-labelledby="team-heading"
      itemScope
      itemType="https://schema.org/ItemList">
      <div className="main-container">
        <div className="space-y-3 text-center lg:text-left">
          <div className="main-container">
            <RevealAnimation delay={0.1}>
              <h2 id="team-heading" className="mx-auto max-w-[500px] font-normal lg:mx-0" itemProp="name">
                Designed for every{' '}
                <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
                  brand
                </span>{' '}
                and
                <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
                  <br />business
                </span>
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <p className="text-tagline-1 mx-auto max-w-[538px] font-normal lg:mx-0 text-secondary/70 dark:text-accent/70" itemProp="description">
                Discover beautifully crafted themes built to showcase your products, tell your story, and create an engaging experience for your audience.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>

      <RevealAnimation delay={0.3}>
        <div className="relative overflow-hidden">
          <Marquee autoFill speed={50}>
            <div className="flex items-center gap-x-6">
              {teamItems.map((item) => (
                <FeatureImgCard key={item.id} {...item} />
              ))}
            </div>
          </Marquee>

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 hidden h-full w-[120px] bg-gradient-to-r from-white via-white/80 to-transparent dark:from-[#070b10] dark:via-[#070b10]/80 dark:to-transparent md:block md:w-[180px] lg:w-[260px]" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 hidden h-full w-[120px] bg-gradient-to-l from-white via-white/80 to-transparent dark:from-[#070b10] dark:via-[#070b10]/80 dark:to-transparent md:block md:w-[180px] lg:w-[260px]" />
        </div>
      </RevealAnimation>
    </section>
  );
};

export default FeaturesV2;