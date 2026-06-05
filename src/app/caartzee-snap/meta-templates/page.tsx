import React from 'react';
import { MetaTemplatesContent } from '@/components/caartzee-snap/MetaTemplatesContent';
import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Meta Templates || Caartzee Snap',
};

export default function MetaTemplatesPage() {
  return (
    <main className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white dark:bg-background-6">
      <div className="main-container max-w-4xl mx-auto">
        <MetaTemplatesContent />
      </div>
    </main>
  );
}
