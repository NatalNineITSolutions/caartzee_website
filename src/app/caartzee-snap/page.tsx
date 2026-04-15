import CTA from '@/components/caartzee-snap/Cta';
import Features from '@/components/caartzee-snap/Features';
import FeaturesV2 from '@/components/caartzee-snap/FeaturesV2';
import Hero from '@/components/caartzee-snap/Hero';
import Integration from '@/components/caartzee-snap/Integration';
import Pricing from '@/components/caartzee-snap/Pricing';
import Testimonial from '@/components/caartzee-snap/Testimonial';
import Understanding from '@/components/caartzee-snap/Understanding';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Caartzee || Snap',
  description: 'Homepage of Caartzee',
};

import FeaturesGrid from '@/components/caartzee-snap/FeaturesGrid';

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5 shadow-7">
      <Hero />
      <Features />
      <FeaturesGrid />
      <FeaturesV2 />
      <Pricing />
      <Integration />
      <Understanding />
      <Testimonial />
      <CTA />
    </main>
  );
};

export default page;
// Force rebuild after directory rename
