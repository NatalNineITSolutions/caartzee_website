'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Store, Users, MessageCircle, Bot, TrendingUp, 
  ArrowRight, CheckCircle2, XCircle, BarChart3, Zap, Clock 
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0, 
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const TiltCard = ({ children, className, variants }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(40px)" }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

const VaultShieldHero = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_003132_8b7edcb6-c64d-4a52-a9ca-879942e122ad.mp4"
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-md z-0"></div>

      {/* 1. Header & Intro */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 text-center mb-20 lg:mb-28">
        <motion.h2 style={{ fontFamily: "'Helvetica Now Display Bold', sans-serif" }} 
          custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-3xl md:text-5xl lg:text-6xl font-normal text-black dark:text-white mb-6 tracking-tight"
        >
          How Caartzee Helps Retailers Grow
        </motion.h2>
        <motion.p 
          custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-lg md:text-xl font-medium text-primary-600 dark:text-primary-400 mb-6"
        >
          From Store Operations to Customer Engagement — Everything in One Platform
        </motion.p>
        <motion.p 
          custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-base md:text-lg text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed"
        >
          Retail businesses often struggle with disconnected tools, manual processes, and scattered customer data. Caartzee brings everything together into a unified commerce ecosystem.
        </motion.p>
      </div>

      {/* 2. Product Solution Grid */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 mb-24 lg:mb-32">
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Card 1 */}
          <TiltCard 
            variants={fadeUp} 
            className="bg-white/60 dark:bg-background-7/60 backdrop-blur-md border-t border-l border-white/80 dark:border-white/20 border-b-4 border-r-4 border-black/10 dark:border-black/40 rounded-2xl p-8 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_25px_50px_-12px_rgba(109,31,226,0.15)] transition-shadow duration-300"
          >
            <div className="w-14 h-14 bg-primary-100 dark:bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
              <Store className="w-7 h-7" />
            </div>
            <h3 style={{ fontFamily: "'Helvetica Now Display Bold', sans-serif" }} className="text-xl font-normal text-black dark:text-white mb-4">Manage Your Business</h3>
            <ul className="space-y-3 mb-8">
              {['Track customers and leads', 'Manage employees and teams', 'Monitor finances and operations', 'Access business insights in real time'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-black/70 dark:text-white/70 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="inline-block px-4 py-2 bg-white dark:bg-black/30 rounded-full text-xs font-semibold text-black dark:text-white border border-gray-200 dark:border-white/10">
              Powered by: <span className="text-primary-600 dark:text-primary-400">Zeedone</span>
            </div>
          </TiltCard>

          {/* Card 2 */}
          <TiltCard 
            variants={fadeUp} 
            className="bg-white/60 dark:bg-background-7/60 backdrop-blur-md border-t border-l border-white/80 dark:border-white/20 border-b-4 border-r-4 border-black/10 dark:border-black/40 rounded-2xl p-8 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_25px_50px_-12px_rgba(109,31,226,0.15)] transition-shadow duration-300"
          >
            <div className="w-14 h-14 bg-primary-50 dark:bg-white/5 rounded-xl flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
              <Users className="w-7 h-7" />
            </div>
            <h3 style={{ fontFamily: "'Helvetica Now Display Bold', sans-serif" }} className="text-xl font-normal text-black dark:text-white mb-4">Convert More Leads</h3>
            <ul className="space-y-3 mb-8">
              {['Discover new prospects', 'Manage sales pipelines', 'Track customer interactions', 'Improve conversion rates'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-black/70 dark:text-white/70 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="inline-block px-4 py-2 bg-white dark:bg-black/30 rounded-full text-xs font-semibold text-black dark:text-white border border-gray-200 dark:border-white/10">
              Powered by: <span className="text-primary-600 dark:text-primary-400">Sales Navigator</span>
            </div>
          </TiltCard>

          {/* Card 3 */}
          <TiltCard 
            variants={fadeUp} 
            className="bg-white/60 dark:bg-background-7/60 backdrop-blur-md border-t border-l border-white/80 dark:border-white/20 border-b-4 border-r-4 border-black/10 dark:border-black/40 rounded-2xl p-8 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_25px_50px_-12px_rgba(109,31,226,0.15)] transition-shadow duration-300"
          >
            <div className="w-14 h-14 bg-primary-50 dark:bg-white/5 rounded-xl flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h3 style={{ fontFamily: "'Helvetica Now Display Bold', sans-serif" }} className="text-xl font-normal text-black dark:text-white mb-4">Sell Directly on WhatsApp</h3>
            <ul className="space-y-3 mb-8">
              {['Showcase products instantly', 'Receive customer inquiries', 'Collect payments', 'Manage orders in real time'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-black/70 dark:text-white/70 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="inline-block px-4 py-2 bg-white dark:bg-black/30 rounded-full text-xs font-semibold text-black dark:text-white border border-gray-200 dark:border-white/10">
              Powered by: <span className="text-primary-600 dark:text-primary-400">Snap</span>
            </div>
          </TiltCard>

          {/* Card 4 */}
          <TiltCard 
            variants={fadeUp} 
            className="bg-white/60 dark:bg-background-7/60 backdrop-blur-md border-t border-l border-white/80 dark:border-white/20 border-b-4 border-r-4 border-black/10 dark:border-black/40 rounded-2xl p-8 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_25px_50px_-12px_rgba(109,31,226,0.15)] transition-shadow duration-300"
          >
            <div className="w-14 h-14 bg-primary-50 dark:bg-white/5 rounded-xl flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
              <Bot className="w-7 h-7" />
            </div>
            <h3 style={{ fontFamily: "'Helvetica Now Display Bold', sans-serif" }} className="text-xl font-normal text-black dark:text-white mb-4">Automate Conversations</h3>
            <ul className="space-y-3 mb-8">
              {['AI-powered replies', 'Automated order updates', 'Smart workflow automation', 'Personalized customer journeys'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-black/70 dark:text-white/70 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="inline-block px-4 py-2 bg-white dark:bg-black/30 rounded-full text-xs font-semibold text-black dark:text-white border border-gray-200 dark:border-white/10">
              Powered by: <span className="text-primary-600 dark:text-primary-400">Prime & Snap</span>
            </div>
          </TiltCard>

          {/* Card 5 */}
          <TiltCard 
            variants={fadeUp} 
            className="bg-white/60 dark:bg-background-7/60 backdrop-blur-md border-t border-l border-white/80 dark:border-white/20 border-b-4 border-r-4 border-black/10 dark:border-black/40 rounded-2xl p-8 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_25px_50px_-12px_rgba(109,31,226,0.15)] transition-shadow duration-300 md:col-span-2 lg:col-span-2"
          >
            <div className="w-14 h-14 bg-primary-50 dark:bg-white/5 rounded-xl flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 style={{ fontFamily: "'Helvetica Now Display Bold', sans-serif" }} className="text-xl font-normal text-black dark:text-white mb-4">Recover Lost Sales & Drive Growth</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-3">
                {['Send abandoned cart reminders', 'Re-engage inactive customers', 'Launch targeted campaigns', 'Increase repeat purchases'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-black/70 dark:text-white/70 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white dark:bg-black/20 rounded-2xl p-6 border border-gray-200 dark:border-white/5">
                <h4 style={{ fontFamily: "'Helvetica Now Display Bold', sans-serif" }} className="text-sm font-normal text-black dark:text-white uppercase tracking-wider mb-4">Results</h4>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-50 dark:bg-white/5 flex items-center justify-center"><ArrowRight className="w-4 h-4 text-primary-600 dark:text-primary-400" /></div>
                    <span className="font-semibold text-black dark:text-white">Higher conversions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-50 dark:bg-white/5 flex items-center justify-center"><ArrowRight className="w-4 h-4 text-primary-600 dark:text-primary-400" /></div>
                    <span className="font-semibold text-black dark:text-white">Better customer retention</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-50 dark:bg-white/5 flex items-center justify-center"><ArrowRight className="w-4 h-4 text-primary-600 dark:text-primary-400" /></div>
                    <span className="font-semibold text-black dark:text-white">Increased revenue</span>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* 3. Retailer Journey Section */}
      <div className="relative z-10 py-20 bg-white/30 dark:bg-black/30 backdrop-blur-md border-y border-white/20 dark:border-white/5 mb-24 lg:mb-32">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 style={{ fontFamily: "'Helvetica Now Display Bold', sans-serif" }} className="text-3xl md:text-4xl font-normal text-black dark:text-white mb-4">How It Works</h2>
            <p className="text-lg text-black/70 dark:text-white/70">The seamless Retailer Journey with Caartzee</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-black/10 dark:bg-white/10 z-0"></div>

            {[
              { num: '1', title: 'Attract Customers', desc: 'Generate leads through multiple channels.' },
              { num: '2', title: 'Engage Instantly', desc: 'Connect with customers through WhatsApp and automated workflows.' },
              { num: '3', title: 'Close More Sales', desc: 'Manage orders, payments, and customer support from one platform.' },
              { num: '4', title: 'Scale Efficiently', desc: 'Use AI insights, CRM, and automation to grow faster.' },
            ].map((step, i) => (
              <motion.div 
                key={i}
                custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white/80 dark:bg-background-7/80 backdrop-blur-md border-2 border-white/50 dark:border-white/10 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary-500 transition-all duration-300">
                  <span className="text-xl font-normal text-black dark:text-white">{step.num}</span>
                </div>
                <h4 style={{ fontFamily: "'Helvetica Now Display Bold', sans-serif" }} className="text-lg font-normal text-black dark:text-white mb-2 tracking-tight">{step.title}</h4>
                <p className="text-sm font-medium text-black/70 dark:text-white/70 max-w-[250px]">{step.desc}</p>
                
                {/* Mobile Arrow */}
                {i !== 3 && <div className="md:hidden mt-8 text-primary-500"><ArrowRight className="w-6 h-6 rotate-90" /></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Comparison Table */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-5 sm:px-8 mb-24 lg:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
          <h2 style={{ fontFamily: "'Helvetica Now Display Bold', sans-serif" }} className="text-3xl md:text-4xl font-normal text-black dark:text-white mb-4">Why Retailers Choose Caartzee</h2>
          <p className="text-lg text-black/70 dark:text-white/70">One Platform Instead of Multiple Tools</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/60 dark:bg-background-7/60 backdrop-blur-xl rounded-[2rem] border border-white/40 dark:border-white/10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-2 text-center border-b border-white/40 dark:border-white/10">
            <div className="p-6 sm:p-8 bg-black/5 dark:bg-white/5">
              <h3 style={{ fontFamily: "'Helvetica Now Display Bold', sans-serif" }} className="text-xl font-normal text-black/60 dark:text-white/60">Without Caartzee</h3>
            </div>
            <div className="p-6 sm:p-8 bg-primary-500/10 dark:bg-primary-500/20">
              <h3 style={{ fontFamily: "'Helvetica Now Display Bold', sans-serif" }} className="text-xl font-normal text-primary-600 dark:text-primary-400">With Caartzee</h3>
            </div>
          </div>
          
          {[
            ['Separate CRM', 'Unified CRM'],
            ['Manual Follow-ups', 'AI Automation'],
            ['Multiple Dashboards', 'One Dashboard'],
            ['Lost Leads', 'Lead Tracking'],
            ['Missed Sales', 'Cart Recovery'],
            ['Disconnected Teams', 'Connected Operations'],
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-2 text-center border-b border-white/20 dark:border-white/5 last:border-0 hover:bg-white/40 dark:hover:bg-white/10 transition-colors">
              <div className="p-5 sm:p-6 flex items-center justify-center gap-3">
                <XCircle className="w-5 h-5 text-red-500 hidden sm:block" />
                <span className="font-semibold text-black/70 dark:text-white/70">{row[0]}</span>
              </div>
              <div className="p-5 sm:p-6 flex items-center justify-center gap-3 bg-primary-50/30 dark:bg-primary-900/10">
                <CheckCircle2 className="w-5 h-5 text-primary-500 hidden sm:block" />
                <span className="font-normal text-black dark:text-white">{row[1]}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 5. Impact Metrics Section */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 mb-24 lg:mb-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-black/80 dark:bg-white/10 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 text-center">
          <h2 style={{ fontFamily: "'Helvetica Now Display Bold', sans-serif" }} className="text-2xl md:text-3xl font-normal text-white dark:text-black mb-16">Built for Modern Retail Growth</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-normal text-primary-400 dark:text-primary-600 mb-4 tracking-tighter">30%+</div>
              <p className="text-lg font-medium text-white/80 dark:text-black/80">Faster Customer Response</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-normal text-primary-400 dark:text-primary-600 mb-4 tracking-tighter">50%+</div>
              <p className="text-lg font-medium text-white/80 dark:text-black/80">Reduction in Manual Tasks</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-normal text-primary-400 dark:text-primary-600 mb-4 tracking-tighter">24/7</div>
              <p className="text-lg font-medium text-white/80 dark:text-black/80">AI-Powered Engagement</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-normal text-primary-400 dark:text-primary-600 mb-4 tracking-tighter">1</div>
              <p className="text-lg font-medium text-white/80 dark:text-black/80">Platform to Manage It All</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 6. Final CTA */}
      <div className="relative z-10 max-w-[800px] mx-auto px-5 sm:px-8 text-center pb-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 style={{ fontFamily: "'Helvetica Now Display Bold', sans-serif" }} className="text-3xl md:text-5xl font-normal text-black dark:text-white mb-6">Ready to Transform Your Retail Business?</h2>
          <p className="text-lg md:text-xl text-black/70 dark:text-white/70 mb-10 leading-relaxed">
            Manage customers, automate operations, increase sales, and scale confidently with Caartzee's integrated business ecosystem.
          </p>
          <Link href="/contact-us" className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white font-normal text-lg px-8 py-5 rounded-full shadow-[0_10px_40px_rgba(109,31,226,0.3)] hover:shadow-[0_10px_50px_rgba(109,31,226,0.5)] hover:-translate-y-1 transition-all duration-300">
            <span>Start Your Journey Today</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>

    </section>
  );
};

export default VaultShieldHero;
