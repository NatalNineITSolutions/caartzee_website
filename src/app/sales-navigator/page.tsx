import Blog from '@/components/sales-navigator/Blog1';
import Faq from '@/components/sales-navigator/Faq1';
import Hero from '@/components/sales-navigator/Hero';
import DesignProHero from '@/components/sales-navigator/DesignProHero';
import Integration from '@/components/sales-navigator/Integration';
import Number from '@/components/sales-navigator/Number1';
import Process from '@/components/sales-navigator/process1';
import Services from '@/components/sales-navigator/Services1';
import Team from '@/components/sales-navigator/Team1';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Feature from '@/components/sales-navigator/Feature';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Sales Navigator || Caartzee',
};

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <Hero />
      <DesignProHero />
      <Feature />
      <Services />
      <Process />
      <Faq />
      <Integration />
      <Number />
      <Team />
      <CTA
        className="dark:bg-background-6 bg-white py-[50px] md:py-[70px] lg:py-[85px] xl:py-[100px]"
        ctaHeading=" Build a complete sales system with smart assistance"
        description="Start your journey with Caartzee and see your ideas come to life easily and creatively."
      />
      <Blog />
    </main>
  );
};

export default page;
