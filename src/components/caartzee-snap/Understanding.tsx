import understandingChat from '@public/images/ns-img-31.png';
import userActivityChart from '@public/images/ns-img-32.svg';
import subFeatures6 from '@public/images/ns-img-38.png';
import subFeatures7 from '@public/images/ns-img-39.png';
import subFeatures8 from '@public/images/ns-img-40.png';
import subFeatures9 from '@public/images/ns-img-41.png';
import gradientBg from '@public/images/ns-img-524.png';
import understandingChatDark from '@public/images/ns-img-dark-12.png';
import userActivityChartDark from '@public/images/ns-img-dark-13.svg';
import subFeatures6Dark from '@public/images/ns-img-dark-19.png';
import subFeatures7Dark from '@public/images/ns-img-dark-20.png';
import subFeatures8Dark from '@public/images/ns-img-dark-21.png';
import subFeatures9Dark from '@public/images/ns-img-dark-22.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Understanding = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-[150px] lg:pb-[150px] xl:pt-[200px] xl:pb-[200px]">
      <div className="main-container">
        {/* Section header */}
        <div className="mb-10 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 mb-5">Benefits</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="mb-5">
              Why Choose <span className="text-primary-500 inline-block">SNAP?</span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <div className="mx-auto mb-8 max-w-[800px]">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg font-medium opacity-80 text-left">
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">✅</span> <span>Manage WhatsApp conversations in one place</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">✅</span> <span>Automate customer engagement with AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">✅</span> <span>Integrate Shopify and payment systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">✅</span> <span>Recover abandoned carts automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">✅</span> <span>Create no-code automation workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">✅</span> <span>Increase sales and customer satisfaction</span>
                </li>
                <li className="flex items-start gap-3 md:col-span-2 md:w-1/2 md:mx-auto">
                  <span className="text-primary-500 mt-1">✅</span> <span>Run marketing campaigns directly through WhatsApp</span>
                </li>
              </ul>
            </div>
          </RevealAnimation>
        </div>

        <div className="relative">
          <RevealAnimation delay={0.4}>
            <figure className="mx-auto flex items-center justify-center">
              <div className="relative z-10 max-w-[756px] overflow-hidden rounded-4xl p-2.5">
                {/* Background image */}
                <figure className="pointer-events-none absolute top-[-63%] left-[-35%] -z-10 w-[630px] select-none md:w-[1030px]">
                  <Image
                    src={gradientBg}
                    alt="Chat dashboard interface background"
                    className="h-full w-full"
                    priority
                  />
                </figure>
                <figure className="mx-auto max-w-[576px]">
                  <img
                    src="/images/image000.png"
                    alt="Understanding"
                    className="block w-full h-auto rounded-[25px]"
                  />
                </figure>
              </div>
            </figure>
          </RevealAnimation>

          {/* Left side floating cards */}
          <div className="absolute top-[53%] -left-4 z-20 flex flex-col items-center md:left-[8.4%]">
            <RevealAnimation delay={0.5} useSpring={true} duration={2}>
              <figure className="shadow-7 relative z-40 max-h-[72px] max-w-[220px] overflow-hidden rounded-2xl md:max-w-[300px]">
                <Image
                  src={subFeatures6}
                  alt="Sub features"
                  className="shadow-3 block h-auto w-full object-cover object-center dark:hidden"
                />
                <Image
                  src={subFeatures6Dark}
                  alt="Sub features"
                  className="shadow-3 hidden h-auto w-full object-cover object-center dark:block"
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.6} useSpring={true} duration={2}>
              <figure className="shadow-7 z-30 -mt-[22px] max-h-[72px] max-w-[200px] overflow-hidden rounded-2xl md:max-w-[280px]">
                <Image
                  src={subFeatures7}
                  alt="Sub features"
                  className="shadow-3 block h-auto w-full object-cover object-center dark:hidden"
                />
                <Image
                  src={subFeatures7Dark}
                  alt="Sub features"
                  className="shadow-3 hidden h-auto w-full object-cover object-center dark:block"
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.7} useSpring={true} duration={2}>
              <figure className="shadow-7 z-20 -mt-[22px] max-h-[72px] max-w-[170px] overflow-hidden rounded-2xl md:max-w-[260px]">
                <Image
                  src={subFeatures8}
                  alt="Sub features"
                  className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                />
                <Image
                  src={subFeatures8Dark}
                  alt="Sub features"
                  className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.8} useSpring={true} duration={2}>
              <figure className="shadow-9 -mt-[22px] max-h-[72px] max-w-[160px] overflow-hidden rounded-2xl md:max-w-[240px]">
                <Image
                  src={subFeatures9}
                  alt="Sub features"
                  className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                />
                <Image
                  src={subFeatures9Dark}
                  alt="Sub features"
                  className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                />
              </figure>
            </RevealAnimation>
          </div>

          {/* User activity chart */}
          <RevealAnimation delay={0.5} direction="right" offset={100} useSpring={true} duration={2}>
            <div className="shadow-4 absolute top-1/2 right-0 z-10 hidden -translate-y-1/2 overflow-hidden rounded-2xl lg:block xl:right-14">
              <figure className="shadow-9">
                <Image src={userActivityChart} alt="User activity" className="block dark:hidden" />
                <Image src={userActivityChartDark} alt="User activity" className="hidden dark:block" />
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Understanding.displayName = 'Understanding';
export default Understanding;
