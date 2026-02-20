import RevealAnimation from '../animation/RevealAnimation';
import IntegrationMarquee from './SalesIntegrationMarquee';

const SalesIntegration = () => {
  return (
    <section className="py-[100px] lg:py-[150px] xl:py-[200px]" aria-label="Sales Integrations">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading */}
          <div className="mx-auto max-w-[1028px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Sales Integrations</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Enhance your sales productivity with powerful integrations.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[582px]">
                  Connect Amazon, Flipkart, and Caartzee seamlessly. Manage inventory, pricing, and analytics in one unified dashboard.
                </p>
              </RevealAnimation>
            </div>
          </div>

          {/* marquee */}
          <IntegrationMarquee />
        </div>
      </div>
    </section>
  );
};

SalesIntegration.displayName = 'SalesIntegration';
export default SalesIntegration;
