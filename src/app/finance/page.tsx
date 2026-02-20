import About from './About';
import CTA from './CTA';
import Faq from './Faq';
import Hero from './Hero';
import Integration from './Integration';
import Services from './Services';
import Testimonial from './Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Financial Application - NextSaaS',
  description:
    'Discover NextSaaS, a comprehensive financial application designed to streamline your business finances, enhance productivity, and drive growth.',
};

const page = () => {
  return (
    <main className="dark:bg-background-7 overflow-x-hidden bg-white">
      <Hero />
      <Services />
      <About />
      <Integration />
      <Faq />
      <Testimonial />
      {/* <Blog /> */}
      <CTA />
    </main>
  );
};

export default page;
