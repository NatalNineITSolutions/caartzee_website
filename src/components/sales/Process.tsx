import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const salesProcessStepsData = [
  {
    id: 1,
    stepNumber: 'Step 1',
    iconClass: 'ns-shape-35',
    title: 'Create your account',
    description:
      'Register your Caartzee account and connect your Amazon, Flipkart, or Caartzee store to begin managing everything from one dashboard.',
    titleId: 'sales-process-step1-title',
  },
  {
    id: 2,
    stepNumber: 'Step 2',
    iconClass: 'ns-shape-12',
    title: 'Connect & configure',
    description:
      'Sync your inventory, set pricing in ₹, and configure AI image enhancement tools to optimize your product listings automatically.',
    titleId: 'sales-process-step2-title',
  },
  {
    id: 3,
    stepNumber: 'Step 3',
    iconClass: 'ns-shape-6',
    title: 'Monitor & scale',
    description:
      'Track sales performance, analyze insights in ₹, and let the AI assistant guide you toward smarter decisions and faster growth.',
    titleId: 'sales-process-step3-title',
  },
];

const SalesProcess = () => {
  return (
    <section className="dark:bg-background-5 py-[100px] lg:py-[150px] xl:py-[200px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* process heading */}
          <div className="mx-auto w-full max-w-[736px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Process</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Follow three simple steps to start selling smarter.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p>Getting started with Caartzee Sales Agent is quick and simple for every seller.</p>
              </RevealAnimation>
            </div>
          </div>

          {/* process cards */}
          <div className="flex flex-wrap items-center justify-center gap-4 pb-14" role="list">
            {salesProcessStepsData.map((step, idx) => (
              <RevealAnimation key={step.id} delay={0.4 + idx * 0.1}>
                <div
                  className="dark:bg-background-6 w-full max-w-[403px] space-y-3.5 rounded-[20px] bg-white p-8 text-left"
                  role="listitem"
                >
                  <div className="space-y-11">
                    <p aria-label="Step number">{step.stepNumber}</p>
                    <span className={`${step.iconClass} text-secondary dark:text-accent text-[54px]`} />
                  </div>
                  <div className="space-y-3">
                    <h3 id={step.titleId} className="text-heading-5">
                      {step.title}
                    </h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        {/* process CTA button */}
        <RevealAnimation delay={0.7}>
          <div className="flex w-full items-center justify-center">
            <LinkButton
              href="/sales-process"
              className="btn btn-primary btn-lg md:btn-xl hover:btn-secondary dark:hover:btn-white w-full sm:w-auto"
              aria-label="Start free trial for 30 days"
            >
              Start free for 30 days, no credit card required
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default SalesProcess;
