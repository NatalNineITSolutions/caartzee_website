import React from 'react';
import { MarketplaceIntegrationContent } from '@/components/sales-navigator/MarketplaceIntegrationContent';
import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Marketplace Integration || Caartzee',
};

export default function MarketplaceIntegrationPage() {
  return (
    <main className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white dark:bg-background-6">
      <div className="main-container max-w-4xl mx-auto">
        <MarketplaceIntegrationContent />
      </div>
    </main>
  );
}
