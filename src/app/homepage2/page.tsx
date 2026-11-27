import { Metadata } from 'next';
import AboutUs from '@/components/homepage2/about-us';
import Benefits from '@/components/homepage2/benefits';
import CoreFeatures from '@/components/homepage2/core-features';
import FAQ from '@/components/homepage2/faq';
import Features from '@/components/homepage2/features';
import Hero from '@/components/homepage2/hero';
import Integration from '@/components/homepage2/integration';
import Pricing from '@/components/homepage2/pricing';
import Process from '@/components/homepage2/process';
import Testimonial from '@/components/homepage2/testimonial';
import CTA from '@/components/shared/cta-nexsas';

export const metadata: Metadata = {
  title: 'Caartzee - Homepage 2',
};

const Page = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
      <Process />
      <CoreFeatures />
      <Benefits />
      <Pricing />
      <Integration />
      <Testimonial />
      <FAQ />
      <CTA />
    </>
  );
};

export default Page;
