import React from 'react';
import { AutomationEngineContent } from '@/components/sales-navigator/AutomationEngineContent';
import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Automation Engine || Caartzee',
};

export default function AutomationEnginePage() {
  return (
    <main className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white dark:bg-background-6">
      <div className="main-container max-w-4xl mx-auto">
        <AutomationEngineContent />
      </div>
    </main>
  );
}
