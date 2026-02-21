import Clients from './Clients';
import CTA from './CTA';
import Features from './Features';
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
  title: 'AI Voice Generator - Caartzee Crewsync',
};

const page = () => {
  return (
    <main className="bg-white dark:bg-background-8">
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
