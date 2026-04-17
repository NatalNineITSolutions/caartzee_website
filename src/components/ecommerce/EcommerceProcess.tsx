import RevealAnimation from '../animation/RevealAnimation';

interface EcommerceStep {
  id: string;
  stepNumber: string;
  icon: string;
  title: string;
  description: string;
}

const ecommerceStepsData: EcommerceStep[] = [
  {
    id: '1',
    stepNumber: 'Step 1',
    icon: 'ns-shape-35',
    title: 'Register your store',
    description: 'Sign up as a Caartzee retailer and get instant access to our ecommerce platform.',
  },
  {
    id: '2',
    stepNumber: 'Step 2',
    icon: 'ns-shape-12',
    title: 'Upload your products',
    description: 'Easily add and manage your product listings with our intuitive tools.',
  },
  {
    id: '3',
    stepNumber: 'Step 3',
    icon: 'ns-shape-3',
    title: 'Start selling',
    description: 'Reach thousands of customers and track your sales in real time with our dashboard.',
  },
];

const EcommerceProcess = () => {
  return (
    <section className="py-8 md:py-10 lg:py-12 xl:py-14">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px] text-center max-w-[602px] mx-auto">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-yellow-v2 mb-5">process</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>How it works</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>Launching your ecommerce store with Caartzee is simple</p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-10">
          {ecommerceStepsData.map((step, index) => (
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
      </div>
    </section>
  );
};

EcommerceProcess.displayName = 'EcommerceProcess';
export default EcommerceProcess;
