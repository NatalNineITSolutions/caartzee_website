import ProcessOperation from '@/components/process/ProcessOperation';
import ProcessStep from '@/components/process/ProcessStep';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Process - AI Software || NextSaaS',
};

const Process02 = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ProcessStep />
      <ProcessOperation />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeText="Get started"
        badgeClass="!badge-cyan-v2"
        ctaHeading="Build a Smarter, Faster, Scalable Business"
        description="Start your journey with CaartZee today."
        ctaBtnText="Get started"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

Process02.displayName = 'Process02';
export default Process02;
