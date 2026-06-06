'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ShinyText from './ShinyText';

const DesignProHero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden font-inter-tight bg-white dark:bg-black pb-8 transition-colors duration-300">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
      />
      {/* Light Mode Overlay for readability */}
      <div className="absolute inset-0 bg-white/90 dark:bg-black/30 z-0 pointer-events-none transition-colors duration-300" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <p className="max-w-md text-sm text-black/80 dark:text-white/80 md:text-base">
            Empower your sales team with advanced lead discovery, customer insights, automated follow ups, and real time analytics to accelerate business growth.
          </p>
          <p className="text-sm text-black/80 dark:text-white/80 lg:max-w-md lg:text-right md:text-base">
            Caartzee Sales Navigator helps businesses discover high quality prospects, manage sales pipelines, track customer interactions, and convert opportunities into revenue all from one powerful platform.
          </p>
        </div>

        {/* Hero Section */}
        <div className="flex flex-1 flex-col items-center justify-center text-center py-12">
          <div className="mx-auto max-w-[1000px] space-y-5 text-center lg:w-full">
            <span className="badge badge-green mb-3 md:mb-4 lg:mb-5">
              AI-Powered Sales Intelligence Platform
            </span>
            <div className="space-y-4 md:space-y-6">
              <h2 className="flex flex-col items-center gap-1 md:gap-2">
                <span>Find your customers. Build Strong Relationships.</span>
                <ShinyText text="Grow Your Revenue." className="dark:!bg-clip-text" />
              </h2>
              <p className="mx-auto max-w-[650px] sm:w-full">
                Discover potential customers, manage sales activities, and close deals faster with an intelligent sales platform designed for modern businesses.
              </p>
            </div>
          </div>          {/* Content Area */}
          <div className="mt-16 w-full max-w-5xl mx-auto text-left">
            <div className="space-y-20">
              {/* Why Businesses Choose */}
              <div>
                <h3 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-10">Why Businesses Choose Caartzee Sales Navigator</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                  <div className="space-y-3">
                    <h4 className="text-2xl md:text-3xl text-black dark:text-white font-normal">Find Your Ideal Customers</h4>
                    <p className="text-base text-black/70 dark:text-white/70 leading-relaxed">Identify businesses and decision makers that match your target audience and buying criteria.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-2xl md:text-3xl text-black dark:text-white font-normal">Manage Every Sales Opportunity</h4>
                    <p className="text-base text-black/70 dark:text-white/70 leading-relaxed">Track leads, conversations, meetings, and opportunities throughout the entire sales process.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-2xl md:text-3xl text-black dark:text-white font-normal">Work More Efficiently</h4>
                    <p className="text-base text-black/70 dark:text-white/70 leading-relaxed">Use smart recommendations and automation to reduce manual tasks and focus on high value opportunities.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-2xl md:text-3xl text-black dark:text-white font-normal">Never Miss a Follow-Up</h4>
                    <p className="text-base text-black/70 dark:text-white/70 leading-relaxed">Set reminders, automate follow up activities, and keep prospects engaged at every stage.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-2xl md:text-3xl text-black dark:text-white font-normal">Measure What Matters</h4>
                    <p className="text-base text-black/70 dark:text-white/70 leading-relaxed">Monitor sales performance, team productivity, lead sources, and conversion metrics through one dashboard.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-2xl md:text-3xl text-black dark:text-white font-normal">Build Better Customer Relationships</h4>
                    <p className="text-base text-black/70 dark:text-white/70 leading-relaxed">Store customer interactions, notes, and communication history in a centralized workspace.</p>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div>
                <h3 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-10">How Caartzee Sales Navigator Works</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                  <div className="flex gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/10 dark:bg-white/20 text-lg font-bold text-black dark:text-white">1</div>
                    <div className="space-y-2">
                      <h4 className="text-2xl md:text-3xl text-black dark:text-white font-normal">Discover New Leads</h4>
                      <p className="text-base text-black/70 dark:text-white/70 leading-relaxed">Find businesses and potential customers based on industry, location, company size, and other targeting criteria.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/10 dark:bg-white/20 text-lg font-bold text-black dark:text-white">2</div>
                    <div className="space-y-2">
                      <h4 className="text-2xl md:text-3xl text-black dark:text-white font-normal">Connect and Engage</h4>
                      <p className="text-base text-black/70 dark:text-white/70 leading-relaxed">Reach prospects through email, phone calls, messaging platforms, and social channels.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/10 dark:bg-white/20 text-lg font-bold text-black dark:text-white">3</div>
                    <div className="space-y-2">
                      <h4 className="text-2xl md:text-3xl text-black dark:text-white font-normal">Nurture Relationships</h4>
                      <p className="text-base text-black/70 dark:text-white/70 leading-relaxed">Maintain regular communication and build trust through personalized engagement.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/10 dark:bg-white/20 text-lg font-bold text-black dark:text-white">4</div>
                    <div className="space-y-2">
                      <h4 className="text-2xl md:text-3xl text-black dark:text-white font-normal">Convert Opportunities</h4>
                      <p className="text-base text-black/70 dark:text-white/70 leading-relaxed">Turn qualified prospects into paying customers using insights, tracking, and automation tools.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Built for Growing Businesses */}
              <div className="text-center flex flex-col items-center">
                <h3 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-4">Built for Growing Businesses</h3>
                <p className="text-base text-black/80 dark:text-white/80 mb-10 leading-relaxed max-w-4xl mx-auto">Whether you're a startup, retailer, distributor, agency, service provider, or enterprise team, Caartzee Sales Navigator helps you:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 md:gap-x-24 text-left max-w-3xl mx-auto">
                  {[
                    "Generate quality leads",
                    "Improve sales productivity",
                    "Manage customer relationships",
                    "Track sales performance",
                    "Increase conversion rates",
                    "Automate repetitive tasks",
                    "Grow revenue consistently",
                    "Scale sales operations"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-[#4ade80] text-white shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-base text-black/80 dark:text-white/80 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final Section */}
              <div className="rounded-2xl bg-black/5 dark:bg-white/10 p-8 md:p-12 text-center border border-black/10 dark:border-white/20">
                <h4 className="text-2xl md:text-3xl font-normal text-black dark:text-white mb-4">Turn Prospects Into Customers</h4>
                <p className="text-base text-black/80 dark:text-white/80 mb-6 leading-relaxed max-w-3xl mx-auto">
                  Caartzee Sales Navigator gives your team everything needed to discover opportunities, manage relationships, and close deals faster all from a single platform.
                </p>
                <p className="text-lg font-normal text-black dark:text-white">More Leads. Better Conversations. Faster Growth.</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default DesignProHero;
