import RevealAnimation from '../animation/RevealAnimation';

const benefits = [
  {
    title: '29k+ Pincodes',
    description: 'Deliver across India with our extensive network coverage.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6 text-primary-500">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Best Rates',
    description: 'Save big with our discounted shipping rates for all distances.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6 text-primary-500">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    title: 'Easy Setup',
    description: 'Single-click integration to start shipping from your dashboard.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6 text-primary-500">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Reduced RTO',
    description: 'Minimize returns with smart address verification and tracking.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6 text-primary-500">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

const DeliveryBenefits = () => {
  return (
    <section className="bg-white py-20 dark:bg-background-7">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="mb-14 text-center">
            <h2 className="text-heading-4 font-medium md:text-heading-3">
              Why consider Caartzee Delivery?
            </h2>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <RevealAnimation key={benefit.title} delay={0.2 + index * 0.1} direction="up">
              <div className="rounded-2xl border border-stroke-2 bg-background-1 p-8 transition-all hover:border-primary-500/50 hover:shadow-lg dark:border-stroke-6 dark:bg-background-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/30">
                  {benefit.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-secondary dark:text-accent">
                  {benefit.title}
                </h3>
                <p className="text-secondary/70 dark:text-accent/70">
                  {benefit.description}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryBenefits;
