import RetailerProgram from '@/components/retailers/RetailerProgram';
import RetailerProcess from '@/components/retailers/RetailerProcess';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Retailers - AI Software || Caartzee',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <RetailerProgram />
      <RetailerProcess />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="!badge-yellow-v2"
        badgeText="Become a Retailer"
        ctaHeading="Ready to grow with Caartzee?"
        description="Join our retailer network and reach thousands of customers worldwide."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Start Selling"
      />
    </main>
  );
};

export default page;
