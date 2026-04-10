import PluginsHero from '@/components/plugins/PluginsHero';
import PluginsMarketplace from '@/components/plugins/PluginsMarketplace';
import PluginsCTA from '@/components/plugins/PluginsCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Plugins Marketplace | Caartzee',
  description: 'Scale your store with Caartzee apps and integrations. Find marketing, analytics, and automation tools built to grow your business.',
};

const PluginsPage = () => {
  return (
    <main className="bg-white dark:bg-background-8">
      <PluginsHero />
      <PluginsMarketplace />
      <PluginsCTA />
    </main>
  );
};

export default PluginsPage;
