import arrowUpRight from '@public/images/icons/arrow-up-right.svg';
import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import featureImg04 from '@public/images/ns-img-53.svg';
import featureCardImg3 from '@public/images/ns-img-54.svg';
import featureImg04Dark from '@public/images/ns-img-dark-32.svg';
import featureCardImg3Dark from '@public/images/ns-img-dark-33.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const SalesFeature = () => {
  return (
    <section className="dark:bg-background-6 bg-white pt-[100px] pb-[100px] md:pb-[85px] xl:pt-[200px] xl:pb-[100px]">
      <div className="main-container">
        <div className="flex flex-col items-center space-y-[40px] md:space-y-[50px] lg:space-y-[60px] xl:space-y-[70px]">
          <div className="mx-auto max-w-[628px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-3 md:mb-4 lg:mb-5">Sales Features</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Sell Everywhere. Scale Effortlessly with Caartzee.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p>
                  Caartzee Sales Agent connects your marketplaces, provides AI‑powered insights, and simplifies selling
                  with one smart dashboard.
                </p>
              </RevealAnimation>
            </div>
          </div>

          {/* cards */}
          <div className="flex flex-col items-center justify-center gap-8 xl:flex-row">
            {/* card one */}
            <RevealAnimation delay={0.4}>
              <article className="bg-background-3 dark:bg-background-5 relative h-[493px] w-full max-w-[408px] rounded-[20px] px-0 pt-[29px] sm:px-2.5">
                <div className="mx-auto max-w-[350px] space-y-4 pl-4 text-center xl:text-left">
                  <h3 className="text-heading-5">Marketplace Integration</h3>
                  <p>Connect Amazon, Flipkart, and your Caartzee store in one dashboard. Sync inventory and manage orders in real time.</p>
                </div>
                {/* description */}
                <RevealAnimation animationType="to" direction="up" offset={0} delay={0.7} rotation={-7}>
                  <div className="group dark:bg-background-8 absolute top-[44%] left-[7%] flex w-full max-w-[350px] flex-col items-center justify-center gap-y-9 rounded-2xl bg-white px-6 py-8">
                    <div className="w-full space-y-4">
                      <div className="flex justify-center -space-x-3.5">
                        <Image src={avatar1} alt="Avatar 1" className="size-11 rounded-full ring-4 ring-white dark:ring-black" />
                        <Image src={avatar2} alt="Avatar 2" className="size-11 rounded-full ring-4 ring-white dark:ring-black" />
                        <Image src={avatar3} alt="Avatar 3" className="size-11 rounded-full ring-4 ring-white dark:ring-black" />
                        <div className="bg-ns-green relative z-10 inline-flex size-11 items-center justify-center rounded-full ring-4 ring-white dark:ring-black">
                          <Image src={arrowUpRight} alt="Arrow Icon" />
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-heading-6 text-secondary dark:text-accent">Unified Marketplace Control</p>
                        <p className="text-secondary dark:text-accent">Prevent overselling with synced inventory</p>
                      </div>
                    </div>
                    <figure className="h-[136px] w-[302px] overflow-hidden">
                      <Image src={featureImg04} alt="chart" className="dark:hidden" />
                      <Image src={featureImg04Dark} alt="chart" className="hidden dark:block" />
                    </figure>
                  </div>
                </RevealAnimation>
              </article>
            </RevealAnimation>

            {/* card two */}
            <RevealAnimation delay={0.5}>
              <article className="bg-ns-green h-[493px] w-full max-w-[408px] rounded-[20px] pt-[29px] sm:px-[29px]">
                <div className="space-y-4 text-center xl:text-left">
                  <h3 className="text-secondary text-heading-5">Sales & Revenue Analytics</h3>
                  <p className="dark:text-secondary/60">
                    Track revenue, platform performance, and product insights in real time. Make smarter, data‑driven decisions.
                  </p>
                </div>
                <RevealAnimation delay={0.5} offset={100}>
                  <div className="bg-secondary w-full space-y-9 rounded-2xl px-6 py-8">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-accent text-heading-6">Revenue Growth</h4>
                        <p className="text-accent/60">₹</p>
                      </div>
                      <p className="text-accent/60">Track INR sales across platforms</p>
                    </div>
                    <div className="flex items-end gap-[30px] pb-[70px]">
                      <div className="bg-ns-green h-[115px] w-4 rounded-t-4xl" />
                      <div className="bg-ns-green h-[81px] w-4 rounded-t-4xl" />
                      <div className="bg-ns-green h-[160px] w-4 rounded-t-4xl" />
                      <div className="bg-ns-green h-[101px] w-4 rounded-t-4xl" />
                    </div>
                  </div>
                </RevealAnimation>
              </article>
            </RevealAnimation>

            {/* card three */}
            <RevealAnimation delay={0.6}>
              <article className="bg-background-3 dark:bg-background-5 relative h-[493px] w-full max-w-[408px] rounded-[20px] px-0 pt-[29px] sm:px-2.5">
                <div className="mx-auto max-w-[350px] space-y-4 pl-4 text-center xl:text-left">
                  <h3 className="text-heading-5">Smart Inventory Management</h3>
                  <p>Monitor stock levels, receive instant alerts, and automate order processing for smooth fulfillment.</p>
                </div>
                <RevealAnimation animationType="to" delay={0.7} rotation={7} offset={0}>
                  <div className="group dark:bg-background-8 absolute top-[43%] -right-1.5 w-[350px] space-y-2 rounded-2xl bg-white px-6 py-8 pb-20 sm:right-[8%]">
                    <div className="flex w-full items-center justify-between">
                      <h4 className="text-heading-6">Inventory Status</h4>
                    </div>
                    <figure>
                      <Image src={featureCardImg3} alt="Inventory chart" className="dark:hidden" />
                      <Image src={featureCardImg3Dark} alt="Inventory chart" className="hidden dark:block" />
                    </figure>
                    <div className="space-y-1">
                      <p className="text-secondary text-heading-6 dark:text-accent">Trusted by Growing Sellers</p>
                    </div>
                  </div>
                </RevealAnimation>
              </article>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesFeature;
