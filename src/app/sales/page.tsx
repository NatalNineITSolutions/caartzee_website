import SalesHero from '@/components/sales/SalesHero';
import SalesDetails from '@/components/sales/SalesDetails';
import SalesTestimonial from '@/components/sales/SalesTestimonial';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Sales || Caartzee',
};

const SalesPage = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <SalesHero />
      <SalesDetails />
      <SalesTestimonial />
      <CTA
        className="dark:bg-background-6 bg-white py-[50px] md:py-[70px] lg:py-[85px] xl:py-[100px]"
        badgeText="Start Selling"
        badgeClass="!badge-green"
        ctaHeading="Build a complete sales system with smart assistance"
        description="Start your journey with Caartzee and see your ideas come to life easily and creatively."
        ctaBtnText="Start Selling Smarter"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default SalesPage;
