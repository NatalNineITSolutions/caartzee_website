import BusinessToolsGrid from '@/components/business-tools/BusinessToolsGrid';
import ToolsHero from '@/components/business-tools/redesign/ToolsHero';
import ToolsCTA from '@/components/business-tools/redesign/ToolsCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Business Tools | Caartzee',
  description: 'Free tools to run your business. Everything you need to sell and grow your retail business.',
};

const BusinessToolsPage = () => {
  return (
    <main className="bg-white dark:bg-background-8 min-h-screen">
      <ToolsHero />
      <div className="relative z-20 -mt-12 md:-mt-20">
        <BusinessToolsGrid />
      </div>
      <ToolsCTA />
    </main>
  );
};

export default BusinessToolsPage;
