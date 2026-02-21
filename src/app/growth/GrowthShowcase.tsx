'use client';

import Image from 'next/image';

const GrowthShowcase = () => {
  return (
    <section className="py-[120px]">
      <div className="main-container grid items-center gap-16 md:grid-cols-2">

        {/* Text */}
        <div>
          <h2 className="text-heading-2 font-normal">
            See Your Business in Real Time
          </h2>

          <p className="mt-6 text-secondary">
            Track revenue growth, campaign ROI, and operational efficiency
            through live dashboards powered by AI-driven analytics.
          </p>

          <ul className="mt-8 space-y-4 text-secondary">
            <li>✔ Real-time performance monitoring</li>
            <li>✔ Predictive demand forecasting</li>
            <li>✔ Unified data from all departments</li>
          </ul>
        </div>

        {/* Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/growth2.png"
            alt="Analytics Charts"
            width={700}
            height={500}
            className="w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default GrowthShowcase;
