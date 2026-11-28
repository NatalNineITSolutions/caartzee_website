import slideImg1 from '@/public/images/caartzee-ui/dashboard-main.png';
import slideImg2 from '@/public/images/caartzee-ui/orders-management.png';
import slideImg3 from '@/public/images/caartzee-ui/products-catalog.png';
import slideImg4 from '@/public/images/caartzee-ui/sales-reports.png';
import slideImg5 from '@/public/images/caartzee-ui/product-categories.png';
import slideImg6 from '@/public/images/caartzee-ui/users-management.png';
import slideImg7 from '@/public/images/caartzee-ui/mobile-app-featured.png';
import slideImg8 from '@/public/images/caartzee-ui/form-builder.png';
import avatar1 from '@/public/images/ns-avatar-1.png';
import avatar2 from '@/public/images/flowbuilder2.png';
import avatar3 from '@/public/images/ns-avatar-3.png';
import CounterNumberOnScroll from '@/components/animation/counter-number-on-scroll';
import RevealAnimation from '@/components/animation/reveal-animation';
import {
  SlideContent,
  SlideImg,
  SlideItem,
  SlideNavigation,
  SlideNext,
  SlidePrev,
  SplitSlide,
} from '@/components/animation/split-slide';
import { ArrowDotLeftIcon, ArrowDotRightIcon, StarIcon } from '@/components/shared/icon';
import AvatarItem from '@/components/shared/ui/avatar-reveal/avatar-item';
import AvatarReveal from '@/components/shared/ui/avatar-reveal/avatar-reveal';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="grid grid-cols-12 items-start justify-center gap-x-5 gap-y-5 lg:gap-y-0 xl:gap-x-14">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex h-[300px] flex-col items-center justify-between lg:h-[355px]">
              <div className="flex flex-row items-center gap-x-4 gap-y-4 md:flex-col lg:flex-row lg:gap-y-0">
                <div className="flex items-center -space-x-4">
                  <AvatarReveal
                    className="flex items-center justify-center -space-x-3.5"
                    direction="left"
                    offset={50}
                    stagger={0.1}
                  >
                    {[avatar1, avatar2, avatar3].map((avatar, index) => (
                      <AvatarItem
                        key={avatar.src}
                        className="outline-background-2 size-11 overflow-hidden rounded-full outline-2"
                      >
                        <Image
                          src={avatar}
                          alt={`avatar-${index + 1}`}
                          className="size-full rounded-full object-cover"
                        />
                      </AvatarItem>
                    ))}
                    <AvatarItem className="font-inter-tight text-tagline-3 text-secondary flex size-11 items-center justify-center rounded-full bg-white font-normal">
                      +243
                    </AvatarItem>
                  </AvatarReveal>
                </div>

                <RevealAnimation delay={0.5} direction="right" offset={50}>
                  <div>
                    <span className="flex items-center justify-start gap-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} className="fill-primary-500 size-4" />
                      ))}
                    </span>
                    <p className="text-background-14/60 text-tagline-2">
                      Happy by <CounterNumberOnScroll value={20} />
                      k+ clients
                    </p>
                  </div>
                </RevealAnimation>
              </div>

              <div className="w-full space-y-4">
                <RevealAnimation
                  asChild={false}
                  delay={0.4}
                  className="w-full rounded-xl bg-white p-4 text-center"
                >
                  <p className="text-tagline-3">Top Customer Ratings</p>
                  <div className="text-secondary font-medium">
                    <CounterNumberOnScroll value={91} duration={1.2} />%
                  </div>
                </RevealAnimation>

                <div className="flex items-center gap-x-4">
                  <RevealAnimation
                    asChild={false}
                    delay={0.5}
                    className="w-1/2 rounded-xl bg-white p-4 text-center"
                  >
                    <p className="text-tagline-3">On-Time Deliveries</p>
                    <div className="text-secondary font-medium">
                      <CounterNumberOnScroll value={100} duration={1.2} />%
                    </div>
                  </RevealAnimation>

                  <RevealAnimation
                    asChild={false}
                    delay={0.6}
                    className="w-1/2 rounded-xl bg-white p-4 text-center"
                  >
                    <p className="text-tagline-3">Logistics Optimization</p>
                    <div className="text-secondary font-medium">
                      <CounterNumberOnScroll value={87} duration={1.2} />%
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>

          <RevealAnimation delay={0.6}>
            <div className="col-span-12 lg:col-span-8">
              <SplitSlide>
                <SlideItem>
                  <SlideImg src={slideImg1} alt="testimonial one" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;Before using this platform, our team was drowning in repetitive tasks
                      across tools and spreadsheets.
                      <span className="mt-5 inline-block">
                        After setup, most daily updates now run automatically and our team finally
                        has time for strategic work.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg2} alt="testimonial two" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;Caartzee turned our scattered sales channels into one unified platform
                      we can monitor end to end.
                      <span className="mt-5 inline-block">
                        Order updates, inventory sync, and customer messages now propagate
                        automatically, keeping deliveries on track without manual follow-ups.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg3} alt="testimonial three" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;We connected our WhatsApp, Shopify, and Amazon stores to Caartzee in a
                      single afternoon.
                      <span className="mt-5 inline-block">
                        Automated triggers keep customer records and catalog data in sync, so our team
                        always sees the exact same live inventory numbers.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg4} alt="testimonial four" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;No-code tools let our marketing and support teams launch promotions and
                      flows without waiting on developers.
                      <span className="mt-5 inline-block">
                        We still configure advanced rules when needed, but most commerce campaigns
                        now launch in minutes rather than weeks.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg5} alt="testimonial five" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;Order confirmations and abandoned cart recovery used to require multiple
                      disjointed tools.
                      <span className="mt-5 inline-block">
                        Caartzee now coordinates WhatsApp notifications, customer emails, and order
                        statuses from one centralized dashboard.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg6} alt="testimonial six" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;Enterprise data protection was essential for our multi-channel brand.
                      <span className="mt-5 inline-block">
                        Role-based permissions, automated audit logs, and encrypted customer data
                        give our buyers and partners total confidence.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg7} alt="testimonial seven" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;High holiday sales volume used to lead to stockouts and missed shipments.
                      <span className="mt-5 inline-block">
                        Automated inventory sync and smart order routing mean our store handles spikes
                        seamlessly without extra manual work.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg8} alt="testimonial eight" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;Executive reviews finally show a single, accurate view of GMV, customer
                      retention, and channel performance.
                      <span className="mt-5 inline-block">
                        Instead of compiling reports across different marketplaces, we export unified
                        dashboards powered directly by Caartzee.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                {/* upper md  */}
                <SlideNavigation className="absolute right-5 bottom-10 z-20 mx-auto mt-6 hidden w-full max-w-[180px] max-[376px]:max-w-[140px] md:flex md:max-w-[220px] lg:max-w-[300px] xl:max-w-[446px]">
                  <SlidePrev>
                    <button type="button" aria-label="Previous testimonial">
                      <ArrowDotLeftIcon className="fill-secondary group-hover:fill-accent size-6 transition-colors duration-500" />
                    </button>
                  </SlidePrev>
                  <SlideNext>
                    <button type="button" aria-label="Next testimonial">
                      <ArrowDotRightIcon className="fill-secondary group-hover:fill-accent size-6 transition-colors duration-500" />
                    </button>
                  </SlideNext>
                </SlideNavigation>

                {/* lower md and below */}
                <SlideNavigation className="mx-auto mt-6 flex w-[220px] md:hidden">
                  <SlidePrev>
                    <button type="button" aria-label="Previous testimonial">
                      <ArrowDotLeftIcon className="fill-secondary group-hover:fill-accent size-6 transition-colors duration-500" />
                    </button>
                  </SlidePrev>
                  <SlideNext>
                    <button type="button" aria-label="Next testimonial">
                      <ArrowDotRightIcon className="fill-secondary group-hover:fill-accent size-6 transition-colors duration-500" />
                    </button>
                  </SlideNext>
                </SlideNavigation>
              </SplitSlide>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
