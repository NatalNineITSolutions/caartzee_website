import RevealAnimation from '../animation/RevealAnimation';

interface RetailerStep {
  id: string;
  stepNumber: string;
  icon: string;
  title: string;
  description: string;
}

const retailerStepsData: RetailerStep[] = [
  {
    id: '1',
    stepNumber: 'Step 1',
    icon: 'ns-shape-35',
    title: 'Register your store',
    description:
      "Sign up as a Caartzee retailer and get instant access to our platform. Start your journey to reach thousands of customers.",
  },
  {
    id: '2',
    stepNumber: 'Step 2',
    icon: 'ns-shape-12',
    title: 'Upload your products',
    description:
      'Easily add and manage your product listings with our intuitive tools. Showcase your catalog to a wider audience.',
  },
  {
    id: '3',
    stepNumber: 'Step 3',
    icon: 'ns-shape-3',
    title: 'Start selling',
    description:
      'Begin selling and track your sales in real time with our transparent dashboard. Enjoy secure transactions and fast payouts.',
  },
];

const RetailersStep = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      {retailerStepsData.map((step, index) => (
        <RevealAnimation key={step.id} delay={0.4 + index * 0.1}>
          <article className="space-y-3.5 p-8 col-span-12 md:col-span-6 lg:col-span-4 bg-white dark:bg-background-6 rounded-[20px]">
            <div className="space-y-11">
              <span className="text-tagline-2 inline-block dark:text-accent/60">{step.stepNumber}</span>
              <div>
                <span className={`${step.icon} text-[52px] text-secondary dark:text-accent`} />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-heading-6 md:text-heading-5">{step.title}</h3>
              <p className="max-w-[345px]">{step.description}</p>
            </div>
          </article>
        </RevealAnimation>
      ))}
    </div>
  );
};

RetailersStep.displayName = 'RetailersStep';
export default RetailersStep;
