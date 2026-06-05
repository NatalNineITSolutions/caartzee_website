import React from 'react';
import { CartAbandonmentRecoveryContent } from '@/components/caartzee-snap/CartAbandonmentRecoveryContent';
import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Cart Abandonment Recovery || Caartzee Snap',
};

export default function CartAbandonmentRecoveryPage() {
  return (
    <main className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white dark:bg-background-6">
      <div className="main-container max-w-4xl mx-auto">
        <CartAbandonmentRecoveryContent />
      </div>
    </main>
  );
}
