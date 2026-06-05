import React from 'react';
import { CustomerIntelligenceContent } from '@/components/sales-navigator/CustomerIntelligenceContent';
import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Customer Intelligence || Caartzee',
};

export default function CustomerIntelligencePage() {
  return (
    <main className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white dark:bg-background-6">
      <div className="main-container max-w-4xl mx-auto">
        <CustomerIntelligenceContent />
      </div>
    </main>
  );
}
