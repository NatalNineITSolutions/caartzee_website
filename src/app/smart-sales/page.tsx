import Reviews from '@/components/smart-sales/Reviews';
import Feature from '@/components/smart-sales/Feature';
import Features from '@/components/smart-sales/Features';
import WhyChooseUs from '@/components/smart-sales/WhyChooseUs';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Smart Sales Engine || Caartzee',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Features />
      <Feature />
      <WhyChooseUs />
      <Reviews />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="hidden"
        ctaHeading="Launch, manage & scale your entire"
        spanText="commerce ecosystem"
        description="Unify storefronts, marketplaces, automation, and analytics in one powerful platform built for modern businesses."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
