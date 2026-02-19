import CRMFeatures from '@/components/nuvexa-crm/CRMFeatures';
import Faq from '@/components/nuvexa-crm/Faq';
import Hero from '@/components/nuvexa-crm/Hero';
import HowItWork from '@/components/nuvexa-crm/HowItWork';
import Integration from '@/components/nuvexa-crm/Integration';
import Pricing from '@/components/nuvexa-crm/Pricing';
import SelectUs from '@/components/nuvexa-crm/SelectUs';
import Testimonial from '@/components/nuvexa-crm/Testimonial';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Nuvexa CRM - NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Hero />
      <SelectUs />
      <CRMFeatures />
      <Pricing />
      <Integration />
      <HowItWork />
      <Testimonial />
      <Faq />
      <CTA
        className="bg-background-2 dark:bg-background-5"
        badgeText="Finance"
        badgeClass="!badge-primary"
        ctaHeading="Ready to Transform Your Business with Caartzee CRM?"
        description="Start managing leads, closing deals, and delighting customers all from one powerful platform.
Experience smarter workflows, better insights, and faster growth."
        descriptionClass="text-secondary/60"
        btnClass="btn-primary hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
