import React from 'react';
import { CampaignAndBroadcastingContent } from '@/components/caartzee-snap/CampaignAndBroadcastingContent';
import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Campaign & Broadcasting || Caartzee Snap',
};

export default function CampaignAndBroadcastingPage() {
  return (
    <main className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white dark:bg-background-6">
      <div className="main-container max-w-4xl mx-auto">
        <CampaignAndBroadcastingContent />
      </div>
    </main>
  );
}
