import { StarIconV3 } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';

const TrustedByUsers = () => {
  return (
    <section
      className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]"
      aria-label="Trusted by users section">
      <div className="main-container">
        <div className="max-h-auto bg-secondary dark:bg-background-6 flex flex-col items-center gap-x-8 gap-y-10 rounded-[20px] py-14 lg:max-h-[280px] lg:flex-row lg:items-start">
          <div className="space-y-3 max-sm:px-3 max-sm:text-center lg:w-[37%] lg:pl-12">
            <RevealAnimation delay={0.1}>
              <h2 className="lg:text-heading-3 text-white">Trusted by Industry Professionals</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-accent/60 px-4 md:px-0">
                Built with user-focused design and performance-driven architecture.
              </p>
            </RevealAnimation>
          </div>
          <div className="flex flex-col justify-around gap-x-6 gap-y-10 md:flex-row md:justify-center lg:w-[63%] lg:justify-around lg:pr-12">
            {/* First rating */}
            <RevealAnimation delay={0.3}>
              <div className="flex flex-col items-center text-center">
                <span className="bg-ns-green text-heading-5 mb-4 rounded-full px-7 py-2">40+</span>
                <h4 className="text-tagline-1 text-white mb-2 font-bold">Active Business Processes Managed</h4>
                <p className="text-tagline-2 text-white/70 max-w-[250px]">
                  From sales and billing to inventory and reporting fully streamlined.
                </p>
              </div>
            </RevealAnimation>
            {/* Second rating */}
            <RevealAnimation delay={0.4}>
              <div className="flex flex-col items-center text-center">
                <span className="bg-ns-cyan text-heading-5 mb-4 rounded-full px-7 py-2">4.7/5</span>
                <div className="mb-2 flex gap-2" aria-label="4.7 out of 5 stars">
                  <StarIconV3 />
                  <StarIconV3 />
                  <StarIconV3 />
                  <StarIconV3 />
                  <StarIconV3 />
                </div>
                <h4 className="text-tagline-1 text-white mb-2 font-bold">Customer Satisfaction</h4>
                <p className="text-tagline-2 text-white/70 max-w-[250px]">
                  Highly rated for usability, support, and efficiency
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

TrustedByUsers.displayName = 'TrustedByUsers';
export default TrustedByUsers;
