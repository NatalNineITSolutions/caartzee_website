'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Target, MessageCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';

const FearlessSection = () => {

  const fadeUp = {
    initial: { opacity: 0, y: 32 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.12,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  const headingSlideUp = {
    initial: { y: "110%" },
    animate: (wordIndex: number) => ({
      y: 0,
      transition: {
        delay: 0.4 + wordIndex * 0.14,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="relative flex min-h-screen flex-col text-black dark:text-white dark:bg-[#0a0a0a]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-[0%_center] z-0 pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4"
      />
      <div className="absolute inset-0 bg-black/60 hidden dark:block z-0 pointer-events-none" />

      {/* Floating Product Badges to fill empty space */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ opacity: { duration: 0.8, delay: 0.2 }, scale: { duration: 0.8, delay: 0.2 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute top-[22%] left-[12%] pointer-events-auto"
        >
          <Link href="https://zeedone.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/60 dark:border-white/10 p-1.5 pr-5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white/60 dark:hover:bg-black/60 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-primary-500/15 flex items-center justify-center text-primary-600">
              <Users className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold text-black dark:text-white tracking-tight">Zeedone – CRM & Finance</p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, 12, 0] }}
          transition={{ opacity: { duration: 0.8, delay: 0.4 }, scale: { duration: 0.8, delay: 0.4 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
          className="absolute top-[48%] left-[26%] pointer-events-auto"
        >
          <Link href="/sales-navigator" className="flex items-center gap-3 backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/60 dark:border-white/10 p-1.5 pr-5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white/60 dark:hover:bg-black/60 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-primary-500/15 flex items-center justify-center text-primary-600">
              <Target className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold text-black dark:text-white tracking-tight">Sales Navigator</p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{ opacity: { duration: 0.8, delay: 0.6 }, scale: { duration: 0.8, delay: 0.6 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 } }}
          className="absolute top-[68%] left-[10%] pointer-events-auto"
        >
          <Link href="/caartzee-snap" className="flex items-center gap-3 backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/60 dark:border-white/10 p-1.5 pr-5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white/60 dark:hover:bg-black/60 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-primary-500/15 flex items-center justify-center text-primary-600">
              <MessageCircle className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold text-black dark:text-white tracking-tight">Snap – WhatsApp Commerce</p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
          transition={{ opacity: { duration: 0.8, delay: 0.8 }, scale: { duration: 0.8, delay: 0.8 }, y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
          className="absolute top-[32%] right-[28%] pointer-events-auto"
        >
          <Link href="/caartzee-crewsync" className="flex items-center gap-3 backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/60 dark:border-white/10 p-1.5 pr-5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white/60 dark:hover:bg-black/60 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-primary-500/15 flex items-center justify-center text-primary-600">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold text-black dark:text-white tracking-tight">Prime – AI Operations</p>
          </Link>
        </motion.div>
      </div>

      {/* Middle Section Right Content */}
      <div className="relative z-10 flex flex-1 items-center justify-end px-5 py-8 sm:px-8 md:px-12 md:py-0 w-full pointer-events-none">
        <motion.div
          custom={4}
          initial="initial"
          animate="animate"
          variants={fadeUp}
          className="max-w-[280px] sm:max-w-xs md:max-w-sm backdrop-blur-2xl bg-white/30 dark:bg-black/40 border border-white/50 dark:border-white/10 p-6 sm:p-8 rounded-[2rem] shadow-[0_20px_50px_rgb(0,0,0,0.1)] pointer-events-auto mt-12 md:mt-24 lg:mt-32"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary-500/15 flex items-center justify-center text-primary-600 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-black dark:text-white leading-tight">Platform Capabilities</h3>
          </div>
          <p className="text-xs sm:text-sm font-medium text-black/80 dark:text-white/80 leading-relaxed mb-5">
            Automate and streamline your entire business operations from a single unified ecosystem.
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-primary-500" /></div>
              <p className="text-xs sm:text-sm font-semibold text-black dark:text-white tracking-tight">Unified Sales & Operations Dashboard</p>
            </li>
            <li className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-primary-500" /></div>
              <p className="text-xs sm:text-sm font-semibold text-black dark:text-white tracking-tight">AI-Powered Customer Automation</p>
            </li>
            <li className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-primary-500" /></div>
              <p className="text-xs sm:text-sm font-semibold text-black dark:text-white tracking-tight">Seamless Global Fulfillment</p>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex flex-col gap-6 px-5 pb-8 sm:px-8 md:gap-12 md:px-12 md:pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <motion.div
            custom={5}
            initial="initial"
            animate="animate"
            variants={fadeUp}
            className="max-w-[200px] sm:max-w-[250px] md:max-w-sm"
          >
            <h3 className="text-sm font-bold text-black dark:text-white mb-1 sm:text-base md:text-lg">Unify Your Business</h3>
            <p className="text-xs font-medium text-black dark:text-white sm:text-sm md:text-base">
              Connect your stores, inventory, sales channels, customer communications, and team operations through a single platform.
            </p>
          </motion.div>
        </div>

        {/* Row B */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 sm:gap-8 mt-4 md:mt-8">
          <motion.div
            custom={7}
            initial="initial"
            animate="animate"
            variants={fadeUp}
            className="w-full md:w-[280px] shrink-0 text-left"
          >
            <h3 className="text-sm font-bold text-black dark:text-white mb-1 sm:text-base md:text-lg">Intelligent Commerce Ecosystem</h3>
            <p className="text-xs font-medium text-black dark:text-white sm:text-sm md:text-base">
              Manage leads, customers, orders, payments, marketing campaigns, and workflows with AI-powered automation.
            </p>
          </motion.div>

          <motion.div
            custom={8}
            initial="initial"
            animate="animate"
            variants={fadeUp}
            className="w-full md:w-[280px] shrink-0 text-left md:text-right"
          >
            <h3 className="text-sm font-bold text-black dark:text-white mb-1 sm:text-base md:text-lg">Scale Without Limits</h3>
            <p className="text-xs font-medium text-black dark:text-white sm:text-sm md:text-base">
              Built for high-growth modern brands. Expand your reach globally with our unified intelligent commerce network.
            </p>
          </motion.div>
        </div>

        {/* Massive Centered Heading */}
        <div className="w-full text-center font-semibold text-black dark:text-white mt-12 md:mt-16" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: 0.9 }}>
          {["Commerce.", "Connected.", "Growth.", "Automated."].map((word, i) => (
            <div key={word} className="overflow-hidden inline-block mr-[2vw]">
              <motion.div
                custom={i}
                initial="initial"
                animate="animate"
                variants={headingSlideUp}
              >
                {word}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FearlessSection;
