import CareerJobBoard from '@/components/career/CareerJobBoard';
import CTA from '@/components/shared/cta/CTA';
import { IPosition } from '@/interface';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Career || Caartzee',
};

const page = () => {
  const positions = getMarkDownData<IPosition & { [key: string]: unknown }>('src/data/career');

  return (
    <main>
      <CareerJobBoard positions={positions} />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="badge-green"
        badgeText="Get Started"
        ctaHeading="Ready to start earning with Caartzee?"
        description="If you have any questions, feel free to reach out to our team."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
