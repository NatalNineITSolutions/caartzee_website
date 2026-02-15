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

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'NextGen Ecomm || Caartzee',
};

const page = () => {
  return (
    <ModalProvider>
      <main>
        <Hero />
        <About />
        <Work />
        {/* <Feature /> */}

        {/* new components */}
        <Features />


        {/* <Pricing /> */}
        <Integration />
        <Integ />
        {/* <Reviews /> */}
        <VideoModal />
      </main>
    </ModalProvider>
  );
};
export default page;
