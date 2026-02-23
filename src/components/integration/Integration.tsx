import { cn } from '@/utils/cn';
import paypalIcon from '@public/images/icons/paypal.png';
import whatsappIcon from '@public/images/icons/whatsapp.png';
import instagramIcon from '@public/images/icons/instagram.png';
import tidioIcon from '@public/images/icons/tidio.png';
import paytm1Icon from '@public/images/icons/paytm1.png';
import razorpayIcon from '@public/images/icons/razorpay.png';
import googleIcon from '@public/images/icons/google.svg';
import dhlDarkIcon from '@public/images/icons/dhl.png';
import dhlIcon from '@public/images/icons/dhl.png';
import microsoftIcon from '@public/images/icons/microsoft.svg';
import googleanalyticsIcon from '@public/images/icons/Googleanalytics.png';
import slackIcon from '@public/images/icons/facebook-v2.svg';
import shiprocketIcon from '@public/images/icons/shiprocket.png';
import flutterwaveIcon from '@public/images/icons/flutterwave.png';
import flutterdarkIcon from '@public/images/icons/flutterwave.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface IntegrationProps {
  className?: string;
  badgeClass?: string;
}
const Integration = ({ className, badgeClass }: IntegrationProps) => {
  return (
    <section className={cn('py-14 md:py-16 lg:py-[88px] xl:py-[160px]', className)} aria-label="Integration Partners">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* integration heading  */}
          <div className="mx-auto max-w-[1028px] space-y-5 text-center">
            <RevealAnimation delay={0.2}>
              <span className={cn('badge badge-green', badgeClass)}>Integration</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.3}>
                <h2>Connect Everything. Run Your Business Smoothly.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="mx-auto max-w-[582px]">
                  Boost your productivity with 50+ powerful integrations.
                  Sync your online stores, marketplaces, payments, shipping, accounting, and marketing tools all in one place.
                  No more switching between apps. No more manual updates.
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/* brand logos  */}
          <RevealAnimation delay={0.5} instant>
            <div className="space-y-7">
              {/* marquee logo one  */}
              <div className="relative mx-auto max-w-[1128px]">
                <div className="from-background-2/90 dark:from-background-6 absolute top-0 left-0 z-40 h-[115px] w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
                <div className="from-background-2/90 dark:from-background-6 absolute top-0 right-0 z-40 h-[115px] w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />

                <Marquee autoFill speed={40}>
                  <div className="flex items-center justify-center">
                    <figure className="dark:bg-background-6 ml-8 flex size-[70px] items-center justify-center rounded-full bg-white md:size-[100px]">
                      <Image src={googleIcon} alt="Google logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="dark:bg-background-6 flex size-[70px] items-center justify-center rounded-full bg-white md:size-[100px]">
                      <Image src={slackIcon} alt="Slack logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="dark:bg-background-6 flex size-[70px] items-center justify-center rounded-full bg-white md:size-[100px]">
                      <Image src={paypalIcon} alt="Confluence logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="dark:bg-background-6 flex size-[70px] items-center justify-center rounded-full bg-white md:size-[100px]">
                      <Image src={shiprocketIcon} alt="Shiprocket logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="dark:bg-background-6 flex size-[70px] items-center justify-center rounded-full bg-white md:size-[100px]">
                      <Image src={googleanalyticsIcon} alt="Google Analytics logo" loading="lazy" className="size-12 dark:hidden" />
                      <Image
                        src={googleanalyticsIcon}
                        alt="Google Analytics logo"
                        loading="lazy"
                        className="hidden size-12 dark:inline-block"
                      />
                    </figure>
                    <figure className="dark:bg-background-6 flex size-[70px] items-center justify-center rounded-full bg-white md:size-[100px]">
                      <Image src={instagramIcon} alt="Figma logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="dark:bg-background-6 flex size-[70px] items-center justify-center rounded-full bg-white md:size-[100px]">
                      <Image src={microsoftIcon} alt="Microsoft logo" loading="lazy" className="size-12" />
                    </figure>
                  </div>
                </Marquee>
              </div>
              {/* marquee logo two  */}
              <div className="relative mx-auto max-w-[985px]">
                <div className="from-background-2/90 dark:from-background-6 absolute top-0 left-0 z-40 h-[115px] w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
                <div className="from-background-2/90 dark:from-background-6 absolute top-0 right-0 z-40 h-[115px] w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />
                <Marquee autoFill direction="right" speed={40}>
                  <div className="flex items-center justify-center gap-[34px]">
                    <figure className="dark:bg-background-6 ml-8 flex size-[70px] items-center justify-center rounded-full bg-white md:size-[100px]">
                      <Image src={razorpayIcon} alt="Razorpay logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="dark:bg-background-6 flex size-[70px] items-center justify-center rounded-full bg-white md:size-[100px]">
                      <Image src={whatsappIcon} alt="WhatsApp logo" width={48} height={48} loading="lazy" />
                    </figure>
                    <figure className="dark:bg-background-6 flex size-[70px] items-center justify-center rounded-full bg-white md:size-[100px]">
                      <Image src={flutterdarkIcon} alt="Flutterwave dark logo" loading="lazy" className="size-12 dark:hidden" />
                      <Image src={flutterwaveIcon} alt="Flutterwave logo" loading="lazy" className="hidden size-12 dark:inline-block" />
                    </figure>
                    <figure className="dark:bg-background-6 flex size-[70px] items-center justify-center rounded-full bg-white md:size-[100px]">
                      <Image src={tidioIcon} alt="Framer logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="dark:bg-background-6 flex size-[70px] items-center justify-center rounded-full bg-white md:size-[100px]">
                      <Image src={dhlIcon} alt="Marvel logo" loading="lazy" className="size-12 dark:hidden" />
                      <Image
                        src={dhlDarkIcon}
                        alt="Marvel logo"
                        loading="lazy"
                        className="hidden size-12 dark:inline-block"
                      />
                    </figure>
                    <figure className="dark:bg-background-6 flex size-[70px] items-center justify-center rounded-full bg-white md:size-[100px]">
                      <Image src={paypalIcon} alt="PayPal logo" loading="lazy" className="size-12" />
                    </figure>
                    <figure className="dark:bg-background-6 flex size-[70px] items-center justify-center rounded-full bg-white md:size-[100px]">
                      <Image src={paytm1Icon} alt="Paytm logo" loading="lazy" className="size-12" />
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

export default Integration;
