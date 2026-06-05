import React from 'react';
import { KnowledgeBaseContent } from '@/components/caartzee-snap/KnowledgeBaseContent';
import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Knowledge Base || Caartzee Snap',
};

export default function KnowledgeBasePage() {
  return (
    <main className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white dark:bg-background-6">
      <div className="main-container max-w-4xl mx-auto">
        <KnowledgeBaseContent />
      </div>
    </main>
  );
}
