import BlogShowcase from '@/components/blog/BlogShowcase';
import FeaturedBlog from '@/components/blog/FeaturedBlog';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog - AI Software || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-4 dark:bg-background-9">
      <FeaturedBlog />
      <BlogShowcase />
      <CTA
        className="dark:bg-background-7 bg-white"
        badgeClass="!badge-yellow-v2"
        badgeText="Get started"
        ctaHeading="Build a Smarter, Faster, Scalable Business"
        description="Start your journey with CaartZee today."
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
