import CRMFeatures from '@/components/NUVEXA-CRM/CRMFeatures';
import Faq from '@/components/NUVEXA-CRM/Faq';
import Hero from '@/components/home/Hero';
import HowItWork from '@/components/NUVEXA-CRM/HowItWork';
import Integration from '@/components/home/Integration';
import Pricing from '@/components/home/Pricing';
import SelectUs from '@/components/NUVEXA-CRM/SelectUs';
import Testimonial from '@/components/NUVEXA-CRM/Testimonial';
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
        ctaHeading="Ready to transform your business with NexSaas CRM"
        description="Start your free trial today and see your ideas come to life easily and creatively."
        descriptionClass="text-secondary/60"
        btnClass="btn-primary hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
