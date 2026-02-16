import Integration from '@/components/integration/Integration';
import Process from '@/components/integration/Process';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Integration - AI Software || NextSaaS',
};

const Integration02 = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Integration />
      <Process />
      <CTA
        className="dark:bg-background-8 bg-white"
        badgeText="Get started"
        badgeClass="!badge-green"
        ctaHeading="Build a Smarter, Faster, Scalable Business"
        description="Start your journey with CaartZee today."
        ctaBtnText="Get started"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

Integration02.displayName = 'Integration02';
export default Integration02;
