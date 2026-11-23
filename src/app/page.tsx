import About from '@/components/home/About';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';

import Integration from '@/components/home/Integration';
import Integ from '@/components/home/Integ';
import Pricing from '@/components/home/Pricing';
import VaultShieldHero from '@/components/home/VaultShieldHero';
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
import FearlessSection from '@/components/home/FearlessSection';
import AIChatSection from '@/components/home/AIChatSection';
import GlobalGrowthSection from '@/components/home/GlobalGrowthSection';

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
        <AIChatSection />
        <FearlessSection />
        <Work />
        <GlobalGrowthSection />
        <Feature />
        <FeaturesV2 />
        <Pricing />
        <VaultShieldHero />
        <Integration />
        {/* <BlogShowcase /> */}
        <Reviews />
        <CTA 
          ctaHeading="Ready to scale your commerce empire?"
          description="Join thousands of thriving brands using the Caartzee ecosystem to automate sales, branding, and operations. Start your journey today."
          ctaBtnText="Get Started for Free"
          btnClass="btn-primary"
        />
        <VideoModal />
      </main>
    </ModalProvider>
  );
};
export default page;
