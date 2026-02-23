import GrowthFeatureCard from "./GrowthFeatureCard";


const features = [
  {
    title: 'Real-Time Dashboards',
    desc: 'Track revenue, margins, and performance metrics instantly.',
  },
  {
    title: 'Campaign & Sales Tracking',
    desc: 'Understand ROI and optimize marketing spend.',
  },
  {
    title: 'AI Forecasting',
    desc: 'Predict growth trends before they happen.',
  },
  {
    title: 'Inventory Intelligence',
    desc: 'Avoid stockouts and overstock issues with smart insights.',
  },
  {
    title: 'Team Performance Metrics',
    desc: 'Measure productivity across departments.',
  },
  {
    title: 'Unified Business View',
    desc: 'Connect finance, sales, and operations in one place.',
  },
];

const GrowthFeatures = () => {
  return (
    <section className="bg-[#FAFAFA] dark:bg-background-8 py-[120px]">
      <div className="main-container">
        <div className="text-center">
          <h2 className="text-heading-2 font-normal dark:text-accent">
            Powerful Analytics. Simplified.
          </h2>
          <p className="mt-4 text-secondary dark:text-accent/80">
            Everything you need to measure, optimize, and scale.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <GrowthFeatureCard
              key={index}
              title={feature.title}
              desc={feature.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthFeatures;
