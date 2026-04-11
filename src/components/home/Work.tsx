import workBg from '@public/images/ns-img-27.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

// Work steps data
const workStepsData = [
  {
    id: 1,
    step: '1',
    badgeColor: 'bg-ns-yellow',
    title: 'Site Speed',
    description: 'Incredibly fast load times. Built with next-gen tech. Just like a leading site should be.',
  },
  {
    id: 2,
    step: '2',
    badgeColor: 'bg-ns-green',
    title: 'Built-in SEO',
    description: 'Pre-set structured data for search engine. Optimization made easy.',
  },
  {
    id: 3,
    step: '3',
    badgeColor: 'bg-ns-cyan',
    title: 'Optimized Checkouts',
    description: 'Offer a seamless checkout experience optimized for high-speed conversion development rates.',
  },
  {
    id: 4,
    step: '4',
    badgeColor: 'bg-ns-yellow',
    title: 'Bulk Actions',
    description: 'Manage items, categories and vendors in one click. Just fast automation scales results.',
  },
  {
    id: 5,
    step: '5',
    badgeColor: 'bg-ns-green',
    title: 'Android App',
    description: 'The store is always in sync. Just manage from mobile app. Keep customers with your mobile app.',
  },
  {
    id: 6,
    step: '6',
    badgeColor: 'bg-ns-cyan',
    title: 'Advanced Analytics',
    description: 'Drive decisions deeper with live insights, traffic reports and conversion rate data for your online store.',
  },
];

const Work = () => {
  return (
    <section className="dark:bg-background-6 bg-white pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="bg-secondary dark:text-ns-yellow relative z-0 mx-auto w-[95%] overflow-hidden rounded-4xl p-5 max-lg:w-[90%] max-lg:rounded-2xl max-lg:px-5 max-lg:py-12 sm:p-10 2xl:max-w-[1440px] 2xl:px-[100px] 2xl:py-[176px]">
        <div className="absolute inset-0 -z-10 h-full w-full">
          <Image quality={100} src={workBg} alt=" about bg" className="h-full w-full object-cover" />
        </div>
        <div className="mb-[112px] flex flex-col items-center space-y-5 gap-y-4 text-center max-lg:mb-12 max-lg:space-y-3">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-blur-light text-ns-yellow">Essential Tools</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="text-accent max-lg:text-heading-6 mx-auto max-w-[750px]">
               E-commerce Simplified, Success Amplified
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-accent max-lg:text-tagline-2 max-w-[850px]">
                Empower your online business growth with all the essential tools.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:gap-4 md:grid-cols-3 md:gap-8">
          {workStepsData.map((step, index) => (
            <RevealAnimation key={step.id} delay={0.4 + index * 0.1}>
              <div className="flex flex-col items-center justify-center rounded-[20px] bg-white/14 p-8 text-center backdrop-blur-[50px] md:p-4 lg:p-8">
                <h4
                  className={`text-heading-6 dark:text-secondary ${step.badgeColor} mb-6 inline-block rounded-[48px] px-10 py-1.5 max-lg:mb-3`}>
                  {step.step}
                </h4>
                <h5 className="text-accent mb-2 max-lg:text-lg">{step.title}</h5>
                <p className="text-accent/60 max-lg:text-tagline-2">{step.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

Work.displayName = 'Work';
export default Work;
