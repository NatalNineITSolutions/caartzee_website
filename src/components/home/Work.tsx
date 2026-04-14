import workBg from '@public/images/ns-img-27.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

// Work steps data
const workStepsData = [
  {
    id: 1,
    step: '1',
    badgeColor: 'bg-ns-yellow',
    title: 'Zeedone Branding',
    description: 'Build a world-class brand identity in minutes with AI-generated logos, brand kits, and QR codes.',
  },
  {
    id: 2,
    step: '2',
    badgeColor: 'bg-ns-green',
    title: 'Caartzee Snap',
    description: 'Transform your product photography. AI removes backgrounds and enhances lighting for studio-quality shots.',
  },
  {
    id: 3,
    step: '3',
    badgeColor: 'bg-ns-cyan',
    title: 'Sales Navigator',
    description: 'Scale your outreach with high-precision CRM tools. Manage leads, track heatmaps, and close deals faster.',
  },
  {
    id: 4,
    step: '4',
    badgeColor: 'bg-ns-yellow',
    title: 'CrewSync Ops',
    description: 'The real-time operational hub for your team. Sync tasks, manage staff, and streamline workflows.',
  },
  {
    id: 5,
    step: '5',
    badgeColor: 'bg-ns-green',
    title: 'Global Fulfillment',
    description: 'Reach customers everywhere. Automated cross-border shipping and international logistics management.',
  },
  {
    id: 6,
    step: '6',
    badgeColor: 'bg-ns-cyan',
    title: 'Commerce Analytics',
    description: 'Gain deep insights into traffic, conversion rates, and store performance with live AI reporting.',
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
