import Hero from '@/components/sales/Hero';
import Feature from '@/components/sales/Feature';
import Services from '@/components/sales/Services';
import Process from '@/components/sales/Process';
import Faq from '@/components/sales/Faq';
import Integration from '@/components/sales/Integration';
import Number from '@/components/sales/Number';
import Team from '@/components/sales/Team';
import CTA from '@/components/shared/cta/CTA';
import Blog from '@/components/sales/Blog';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Sales || Caartzee',
};

const SalesPage = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <Hero />
      <Feature />
      <Services />
      <Process />
      <Faq />
      <Integration />
      <Number />
      <Team />
      <CTA
        className="dark:bg-background-6 bg-white py-[50px] md:py-[70px] lg:py-[85px] xl:py-[100px]"
        ctaHeading="Build a complete sales system with smart assistance"
        description="Start your journey with Caartzee and see your ideas come to life easily and creatively."
        ctaBtnText="Start Selling"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
      <Blog />
    </main>
  );
};

SalesPage.displayName = 'SalesPage';
export default SalesPage;
