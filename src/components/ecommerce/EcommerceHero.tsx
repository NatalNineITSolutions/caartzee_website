import { cn } from '@/utils/cn';
import shopifyIcon from '@public/images/icons/shopify.png';
import amazonIcon from '@public/images/icons/amazon.png';
import googleIcon from '@public/images/icons/google.png';
import gmailIcon from '@public/images/icons/gmail.svg';
import figmaIcon from '@public/images/icons/figma.svg';
import slackIcon from '@public/images/icons/slack.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface EcommerceHeroProps {
  className?: string;
  badgeClass?: string;
}

const EcommerceHero = ({ className, badgeClass }: EcommerceHeroProps) => {
  return (
    <section
      className={cn('py-14 md:py-16 lg:py-[88px] xl:py-[160px]', className)}
      aria-label="Ecommerce Partners"
    >
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* ecommerce heading */}
          <div className="mx-auto max-w-[1028px] space-y-5 text-center">
            <RevealAnimation delay={0.2}>
              <span className={cn('badge badge-yellow-v2', badgeClass)}>Ecommerce</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.3}>
                <h2>Sell smarter with Caartzee — connect to top ecommerce platforms.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="mx-auto max-w-[582px]">
                  Launch your store, manage products, and reach thousands of customers worldwide with seamless integrations.
                </p>
              </RevealAnimation>
            </div>
          </div>

          {/* brand logos */}
          <RevealAnimation delay={0.5} instant>
            <div className="space-y-7">
              <div className="relative mx-auto max-w-[1128px]">
                <Marquee autoFill speed={40}>
                  <div className="flex items-center justify-center gap-8">
                    <figure className="flex size-[70px] items-center justify-center rounded-full bg-white dark:bg-background-6 md:size-[100px]">
                      <Image src={shopifyIcon} alt="Shopify logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="flex size-[70px] items-center justify-center rounded-full bg-white dark:bg-background-6 md:size-[100px]">
                      <Image src={amazonIcon} alt="Amazon logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="flex size-[70px] items-center justify-center rounded-full bg-white dark:bg-background-6 md:size-[100px]">
                      <Image src={googleIcon} alt="Google logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="flex size-[70px] items-center justify-center rounded-full bg-white dark:bg-background-6 md:size-[100px]">
                      <Image src={gmailIcon} alt="Gmail logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="flex size-[70px] items-center justify-center rounded-full bg-white dark:bg-background-6 md:size-[100px]">
                      <Image src={figmaIcon} alt="Figma logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="flex size-[70px] items-center justify-center rounded-full bg-white dark:bg-background-6 md:size-[100px]">
                      <Image src={slackIcon} alt="Slack logo" loading="lazy" className="size-12" />
                    </figure>
                  </div>
                </Marquee>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default EcommerceHero;
