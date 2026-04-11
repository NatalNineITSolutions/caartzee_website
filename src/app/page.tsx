import About from '@/components/home/About';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';

import Integration from '@/components/home/Integration';
import Integ from '@/components/home/Integ';
import Pricing from '@/components/home/Pricing';
import Reviews from '@/components/home/Reviews';
import Work from '@/components/home/Work';
import VideoModal from '@/components/shared/VideoModal';
import { ModalProvider } from '@/context/ModalContext';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Feature from '@/components/home/Feature';
import FeaturesV2 from '@/components/home/FeaturesV2';
import Brands from '@/components/home/Brands';
import BlogShowcase from '@/components/blog/BlogShowcase';
import CTA from '@/components/shared/cta/CTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Caartzee',
};

const page = () => {
  return (
    <ModalProvider>
      <main className="bg-white dark:bg-background-8">
        <Hero />
        <Brands />
        <About />
        <Work />
        <Feature />
        <FeaturesV2 />
        <Pricing />
        <Integration />
        {/* <BlogShowcase /> */}
        <Reviews />
        <CTA 
          ctaHeading="Start selling online."
          description="Join thousands of thriving businesses on Caartzee and grow your brand today."
          ctaBtnText="Get Started"
          btnClass="btn-primary"
        />
        <VideoModal />
      </main>
    </ModalProvider>
  );
};
export default page;
