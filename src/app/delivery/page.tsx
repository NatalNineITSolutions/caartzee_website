import DeliveryHero from '@/components/delivery/DeliveryHero';
import DeliveryBenefits from '@/components/delivery/DeliveryBenefits';
import DeliverySteps from '@/components/delivery/DeliverySteps';
import DeliveryFeatures from '@/components/delivery/DeliveryFeatures';
import DeliveryCalculator from '@/components/delivery/DeliveryCalculator';
import DeliveryFAQ from '@/components/delivery/DeliveryFAQ';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Caartzee Delivery - Simplified Ecommerce Shipping',
  description: 'Ship your products with the best in-house courier services. Reach 26,000+ pin codes with automated shipping and discounted rates.',
};

const DeliveryPage = () => {
  return (
    <main className="bg-white dark:bg-background-8">
      <DeliveryHero />
      <DeliveryBenefits />
      <DeliverySteps />
      <DeliveryFeatures />
      <DeliveryCalculator />
      <DeliveryFAQ />
      
      {/* Final CTA */}
      <section className="bg-white py-20 dark:bg-background-8">
        <div className="main-container text-center">
          <RevealAnimation delay={0.1}>
            <div className="rounded-[40px] bg-primary-500 p-16 text-white shadow-2xl">
              <h2 className="mb-6 text-heading-3 font-semibold md:text-heading-2">
                Easy delivery just a few clicks away!
              </h2>
              <p className="mb-10 text-xl opacity-80">
                Join thousands of businesses scaling their growth with Caartzee.
              </p>
              <LinkButton href="https://cartly.zeedone.com/register" className="btn-xl bg-white !text-primary-500 hover:bg-secondary hover:!text-white">
                Start shipping now
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </main>
  );
};

export default DeliveryPage;
