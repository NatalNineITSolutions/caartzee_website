'use client';

import Image from 'next/image';

const GrowthHero = () => {
  return (
    <section className="bg-ns-ivory py-[120px]">
      <div className="main-container text-center">

        <h1 className="text-heading-1 font-normal">
          Growth Analytics that{' '}
          <span className="text-ns-linen">Drive Smarter Decisions</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[650px] text-secondary">
          Monitor revenue, campaign performance, inventory flow, and team
          productivity in one intelligent dashboard.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-full bg-black px-6 py-3 text-white">
            Get Started
          </button>
          <button className="rounded-full border border-black px-6 py-3">
            View Demo
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 flex justify-center">
          <div className="rounded-3xl shadow-2xl overflow-hidden">
            <Image
              src="/images/growth.png"
              alt="Growth Analytics Dashboard"
              width={1000}
              height={600}
              className="w-full max-w-[1000px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default GrowthHero;
