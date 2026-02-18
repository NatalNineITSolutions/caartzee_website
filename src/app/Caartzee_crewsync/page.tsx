import Clients from './Clients';
import CTA from './CTA';
import Features from '@/components/home/Features';
import FeaturesV2 from './FeaturesV2';
import Hero from './Hero';
import Integration from './Integration';
import Pricing from './Pricing';
import Result from './Result';
import Steps from './Steps';
import VoiceSamples from './VoiceSamples';
import VoiceStyle from './VoiceStyle';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Voice Generator - NextSaaS',
};

const page = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Clients />
      <VoiceStyle />
      <VoiceSamples />
      <Features />
      <FeaturesV2 />
      <Steps />
      <Integration />
      <Result />
      <Pricing />
      <CTA />
    </main>
  );
};

export default page;
