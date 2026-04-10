import ThemesHero from '@/components/themes/ThemesHero';
import ThemeGrid from '@/components/themes/ThemeGrid';
import ThemesCTA from '@/components/themes/ThemesCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ModalProvider } from '@/context/ModalContext';
import VideoModal from '@/components/shared/VideoModal';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Caartzee Themes - Kickstart Your Online Store',
  description: 'Choose from a variety of professional, mobile-optimized ecommerce themes designed for high conversion and speed.',
};

const ThemesPage = () => {
  return (
    <ModalProvider>
      <main className="bg-white dark:bg-background-8">
        <ThemesHero />
        <ThemeGrid />
        <ThemesCTA />
        <VideoModal />
      </main>
    </ModalProvider>
  );
};

export default ThemesPage;
