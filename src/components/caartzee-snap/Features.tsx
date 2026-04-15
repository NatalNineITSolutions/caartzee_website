import RevealAnimation from '../animation/RevealAnimation';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-10 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 mb-5"> How It Works </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">
              Set up once.{' '}<span className="text-primary-500 inline-block">Sell automatically.</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-8 lg:max-w-[696px]">
              Getting started with Caartzee Snap takes less than 5 minutes. Add your products, set your prices, and let Snap handle the rest — orders, payments, and customer queries, all on auto-pilot.
            </p>
          </RevealAnimation>
        </div>
        {/* Feature Grid */}
        <FeatureCard />
      </div>
    </section>
  );
};

Features.displayName = 'Features';
export default Features;
