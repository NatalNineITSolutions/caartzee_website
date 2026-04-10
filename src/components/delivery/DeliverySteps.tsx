import RevealAnimation from '../animation/RevealAnimation';

const steps = [
  {
    number: 1,
    title: 'Select pickup time',
    description: '& delivery partner',
  },
  {
    number: 2,
    title: 'Add product weight',
    description: '& dimensions',
  },
  {
    number: 3,
    title: 'Pay & request',
    description: 'for delivery',
  },
];

const DeliverySteps = () => {
  return (
    <section className="bg-background-2 py-20 dark:bg-background-8">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="mb-16 text-center">
            <h2 className="text-heading-4 font-medium md:text-heading-3">
              How to get started with Caartzee Delivery
            </h2>
          </div>
        </RevealAnimation>

        <div className="relative mx-auto max-w-[900px]">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 hidden w-full -translate-y-12 lg:block">
            <svg width="100%" height="24" viewBox="0 0 100 24" fill="none" preserveAspectRatio="none">
              <path 
                d="M0,12 C25,0 75,24 100,12" 
                stroke="#864ffe" 
                strokeWidth="2" 
                strokeDasharray="8 8" 
                className="opacity-20"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <RevealAnimation key={step.number} delay={0.2 + index * 0.1}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-2xl font-bold text-white shadow-lg shadow-primary-500/30">
                    {step.number}
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-secondary dark:text-accent">
                    {step.title}
                  </h3>
                  <p className="text-secondary/60 dark:text-accent/60">
                    {step.description}
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySteps;
