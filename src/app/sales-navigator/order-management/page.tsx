import React from 'react';
import { OrderManagementContent } from '@/components/sales-navigator/OrderManagementContent';
import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Order Management || Caartzee',
};

export default function OrderManagementPage() {
  return (
    <main className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white dark:bg-background-6">
      <div className="main-container max-w-4xl mx-auto">
        <OrderManagementContent />
      </div>
    </main>
  );
}
