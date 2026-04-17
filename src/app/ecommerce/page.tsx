import EcommerceHero from '@/components/ecommerce/EcommerceHero';
import EcommerceProcess from '@/components/ecommerce/EcommerceProcess';
import EcommercePricing from '@/components/ecommerce/EcommercePricing';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Ecommerce - AI Software || Caartzee',
};

const EcommercePage = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <EcommerceHero />
      <EcommerceProcess />
      <EcommercePricing />
      <CTA
        className="dark:bg-background-8 bg-white"
        badgeText="Start Ecommerce"
        badgeClass="!badge-yellow-v2"
        ctaHeading="Launch your store with Caartzee"
        description="Start your free trial today and grow your ecommerce business with powerful tools and integrations."
        ctaBtnText="Get Started"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

EcommercePage.displayName = 'EcommercePage';
export default EcommercePage;
