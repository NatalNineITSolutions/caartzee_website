import BusinessToolsGrid from '@/components/business-tools/BusinessToolsGrid';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Business Tools | Caartzee',
  description: 'Free tools to run your business. Everything you need to sell and grow your retail business.',
};

const BusinessToolsPage = () => {
  return (
    <main className="bg-[#FBFBFB] dark:bg-background-8 min-h-screen pt-[160px] pb-32">
      {/* Hero Section */}
      <section className="container-custom mb-16 text-center max-w-4xl">
        <h1 className="text-[40px] md:text-[56px] leading-tight font-black text-[#1A181E] dark:text-accent mb-6 tracking-tight">
          Free business tools
        </h1>
        <p className="text-[18px] md:text-[20px] leading-relaxed text-[#4D4D4D] dark:text-accent/60 max-w-3xl mx-auto">
          Everything you need to sell and grow your retail business. Simple, fast, and completely free tools to help you run your business more efficiently.
        </p>
      </section>

      {/* Tools Grid */}
      <section className="mb-24">
        <BusinessToolsGrid />
      </section>

      {/* Call to Action Section - Clean Dukaan Style */}
      <section className="mt-24 py-24 bg-white dark:bg-background-7 border-t border-[#E6E6E6] dark:border-white/5">
        <div className="container-custom flex flex-col items-center text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-[#1A181E] dark:text-accent mb-6 tracking-tight">
            The platform that helps you grow
          </h2>
          <p className="text-lg text-[#4D4D4D] dark:text-accent/60 mb-10 leading-relaxed">
            Join thousands of merchants who use Caartzee's powerful platform to sell online, manage their business, and reach new customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-10 py-5 bg-[#146EB4] text-white rounded-lg font-bold text-lg hover:bg-[#0E5288] transition-all shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BusinessToolsPage;
