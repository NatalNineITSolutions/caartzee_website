import React from 'react';
import { SmartInventoryManagementContent } from '@/components/sales-navigator/SmartInventoryManagementContent';
import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Smart Inventory Management || Caartzee',
};

export default function SmartInventoryManagementPage() {
  return (
    <main className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white dark:bg-background-6">
      <div className="main-container max-w-4xl mx-auto">
        <SmartInventoryManagementContent />
      </div>
    </main>
  );
}
