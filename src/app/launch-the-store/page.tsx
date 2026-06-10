import FuturisticHero from '@/components/ecommerce/FuturisticHero';
import LiquidGlassHero from '@/components/ecommerce/LiquidGlassHero';
import MentalitySection from '@/components/ecommerce/MentalitySection';
import EcommerceHero from '@/components/ecommerce/EcommerceHero';
import EcommerceModernHero from '@/components/ecommerce/EcommerceModernHero';
import EcommerceProcess from '@/components/ecommerce/EcommerceProcess';
import DigitalEpochSection from '@/components/ecommerce/DigitalEpochSection';
import EcommercePricing from '@/components/ecommerce/EcommercePricing';
import ProstheticsHero from '@/components/ecommerce/ProstheticsHero';
import DarkAIHero from '@/components/ecommerce/DarkAIHero';
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
      <LiquidGlassHero />
      {/* <MentalitySection /> */}
      {/* <FuturisticHero /> */}
      <EcommerceHero />
      <DarkAIHero />
      {/* <EcommerceModernHero /> */}
      <EcommerceProcess />
      <DigitalEpochSection />
      <EcommercePricing />

      <ProstheticsHero />
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
