import AboutCTA from '@/components/about/redesign/AboutCTA';
import AboutHero from '@/components/about/redesign/AboutHero';
import AboutLeadership from '@/components/about/redesign/AboutLeadership';
import AboutPartners from '@/components/about/redesign/AboutPartners';
import AboutPress from '@/components/about/redesign/AboutPress';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About || Caartzee',
};

const page = () => {
  return (
    <main className="dark:bg-background-8 bg-white min-h-screen">
      <AboutHero />
      <div className="relative z-20">
        <AboutLeadership />
        {/* <AboutPress />
        <AboutPartners /> */}
        <AboutCTA />
      </div>
    </main>
  );
};

export default page;
