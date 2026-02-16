import LoginHero from '@/components/authentication/LoginHero';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Login - AI Software || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <LoginHero />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Get Started"
        ctaHeading="Build a Smarter, Faster, Scalable Business"
        description="Start your journey with CaartZee today."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Get started"
      />
    </main>
  );
};
export default page;
