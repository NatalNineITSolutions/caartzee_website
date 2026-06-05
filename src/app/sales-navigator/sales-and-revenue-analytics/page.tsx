import React from 'react';
import { SalesAndRevenueAnalyticsContent } from '@/components/sales-navigator/SalesAndRevenueAnalyticsContent';
import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Sales & Revenue Analytics || Caartzee',
};

export default function SalesAndRevenueAnalyticsPage() {
  return (
    <main className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white dark:bg-background-6">
      <div className="main-container max-w-4xl mx-auto">
        <SalesAndRevenueAnalyticsContent />
      </div>
    </main>
  );
}
