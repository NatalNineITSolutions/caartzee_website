'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { 
  TrendingUp, RefreshCw, ShoppingCart, Share2, 
  Target, Magnet, ArrowUpRight, Heart,
  Zap, Mail, Users, Sparkles, BarChart, 
  CheckCircle2, ArrowRight, Bot
} from 'lucide-react';

export default function ScaleRevenueGrowth() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const isDark = mounted && resolvedTheme === 'dark';

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${isDark ? 'bg-[#060010] text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-medium mb-8">
            Revenue Growth Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
            Turn More Opportunities <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">
              Into Revenue
            </span>
          </h1>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Grow sales, increase customer lifetime value, and maximize profitability with powerful tools designed to help your business scale faster and smarter.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact-us" className="w-full sm:w-auto px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-all hover:scale-105">
              Start Growing Revenue
            </Link>
            <Link href="/contact-us" className={`w-full sm:w-auto px-8 py-4 rounded-full border font-medium transition-all hover:scale-105 ${isDark ? 'border-white/20 hover:bg-white/10 text-white' : 'border-slate-200 hover:bg-slate-100 text-slate-900'}`}>
              Book a Demo
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Trusted Growth Engine */}
      <div className={`py-20 border-y ${isDark ? 'border-white/10 bg-[#0A0418]' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-medium mb-6">
            Revenue Growth Built Into Every Step of the Customer Journey
          </motion.h3>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={`text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Every interaction matters. Caartzee helps you attract more customers, convert them faster, and keep them coming back with automation, insights, and AI-powered engagement.
          </motion.p>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <TrendingUp />, title: "Increase Conversion Rates", desc: "Convert more visitors into paying customers with personalized experiences and automated follow-ups." },
            { icon: <ShoppingCart />, title: "Recover Lost Revenue", desc: "Bring back abandoned carts and missed opportunities through intelligent reminders and re-engagement campaigns." },
            { icon: <RefreshCw />, title: "Boost Repeat Purchases", desc: "Encourage customer loyalty with targeted promotions, personalized recommendations, and retention workflows." },
            { icon: <Share2 />, title: "Optimize Every Channel", desc: "Track performance across stores, marketplaces, social commerce, and messaging channels from one platform." }
          ].map((feature, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } } }} 
              className={`p-8 rounded-2xl border ${isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'} flex flex-col gap-4 hover:-translate-y-1 transition-transform`}>
              <div className="w-12 h-12 rounded-full bg-violet-500/10 text-violet-500 flex items-center justify-center mb-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className={`leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Revenue Growth Framework */}
      <div className={`py-24 border-y ${isDark ? 'border-white/10 bg-gradient-to-b from-[#0A0418] to-[#060010]' : 'border-slate-200 bg-gradient-to-b from-white to-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl font-bold mb-4">
              Four Ways Caartzee Accelerates Growth
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent z-0" />
            {[
              { icon: <Magnet />, title: "1. Attract More Customers", desc: "Reach new audiences through multiple sales channels, marketing campaigns, and AI-powered targeting." },
              { icon: <Target />, title: "2. Convert More Leads", desc: "Engage prospects with personalized communication that guides them toward purchase decisions." },
              { icon: <ArrowUpRight />, title: "3. Increase Order Value", desc: "Recommend relevant products and upsells that encourage larger purchases and higher revenue per order." },
              { icon: <Heart />, title: "4. Build Customer Loyalty", desc: "Keep customers engaged with automated follow-ups, rewards, and personalized experiences." }
            ].map((step, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } } }} 
                className="relative z-10 text-center flex flex-col items-center">
                <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center mb-6 ${isDark ? 'bg-[#0A0418] border-violet-500/30 text-violet-400' : 'bg-white border-violet-200 text-violet-600'}`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className={`leading-relaxed max-w-xs ${isDark ? 'text-white/70' : 'text-slate-600'}`}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Growth Features Section */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl font-bold mb-4">
            Everything You Need to Drive Revenue
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Zap />, title: "Intelligent Sales Automation", desc: "Automate customer interactions, follow-ups, and engagement workflows to convert more opportunities into sales." },
            { icon: <ShoppingCart />, title: "Cart Recovery Campaigns", desc: "Recover abandoned carts with personalized reminders delivered through WhatsApp, email, and SMS." },
            { icon: <Users />, title: "Customer Segmentation", desc: "Group customers based on behavior, interests, and purchase history to deliver highly relevant campaigns." },
            { icon: <Sparkles />, title: "AI Product Recommendations", desc: "Increase average order value with smart product suggestions tailored to each customer." },
            { icon: <Mail />, title: "Marketing Campaigns", desc: "Launch targeted promotions and broadcasts that drive traffic, conversions, and repeat purchases." },
            { icon: <BarChart />, title: "Performance Analytics", desc: "Monitor revenue, customer behavior, campaign results, and growth trends from one dashboard." }
          ].map((feature, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } } }} 
              className={`p-6 rounded-2xl border ${isDark ? 'border-white/10 bg-white/5 hover:bg-white/10' : 'border-slate-200 bg-white hover:bg-slate-50'} flex flex-col gap-3 transition-colors`}>
              <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 rounded-lg bg-violet-500/10 text-violet-500">
                   {feature.icon}
                 </div>
                 <h3 className="font-bold text-lg">{feature.title}</h3>
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Revenue Assistant (Alternating Section Style) */}
      <div className={`py-24 border-y overflow-hidden ${isDark ? 'border-white/10 bg-gradient-to-br from-[#0A0418] to-[#060010]' : 'border-slate-200 bg-gradient-to-br from-slate-50 to-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 text-violet-500 text-sm font-medium">
                <Bot className="w-4 h-4" /> AI-Powered Growth
              </div>
              <h2 className="text-4xl font-bold leading-tight">Let AI Find New Revenue Opportunities</h2>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                Identify high-value customers, predict purchasing behavior, and uncover growth opportunities with AI-driven insights that help you make smarter business decisions.
              </p>
              <ul className="space-y-4 pt-4 grid grid-cols-1 sm:grid-cols-2">
                {[
                  "Predict buying patterns", 
                  "Discover high-converting audiences", 
                  "Identify upsell opportunities", 
                  "Reduce customer churn", 
                  "Optimize campaign performance", 
                  "Improve marketing ROI"
                ].map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0" />
                    <span className={`font-medium ${isDark ? 'text-white/90' : 'text-slate-800'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full relative">
              <div className={`aspect-square md:aspect-[4/3] rounded-3xl border overflow-hidden ${isDark ? 'bg-gradient-to-bl from-violet-900/10 to-fuchsia-900/10 border-white/10' : 'bg-gradient-to-bl from-violet-50 to-fuchsia-50 border-slate-200'} flex items-center justify-center p-8 relative`}>
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
                 <div className={`w-full max-w-sm rounded-2xl shadow-2xl p-6 ${isDark ? 'bg-[#141020] border border-white/10' : 'bg-white border border-slate-100'} backdrop-blur-xl relative z-10`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-900'}`}>
                        <Sparkles className="w-5 h-5 text-violet-500" />
                      </div>
                      <div className="h-4 w-32 rounded-full bg-current opacity-10" />
                    </div>
                    <div className="space-y-4">
                      <div className="h-2 w-full rounded-full bg-current opacity-5" />
                      <div className="h-2 w-5/6 rounded-full bg-current opacity-5" />
                      <div className="h-8 w-full rounded-lg bg-violet-500/10 mt-4 border border-violet-500/20" />
                      <div className="h-8 w-4/6 rounded-lg bg-fuchsia-500/10 mt-2 border border-fuchsia-500/20" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Make Every Customer Interaction More Valuable</h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Revenue growth isn't just about getting more customers—it's about creating better experiences that lead to more purchases, stronger loyalty, and higher lifetime value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Higher Conversion Rates", desc: "Turn more visitors into customers." },
            { title: "Increased Order Value", desc: "Encourage larger purchases with personalized recommendations." },
            { title: "More Repeat Purchases", desc: "Build long-term customer relationships." },
            { title: "Greater Marketing ROI", desc: "Maximize results from every campaign." }
          ].map((item, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-violet-500/10 flex items-center justify-center mb-6 text-violet-500">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className={`${isDark ? 'text-white/60' : 'text-slate-500'}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* For Every Growing Business */}
      <div className={`py-24 border-y ${isDark ? 'border-white/10 bg-[#0A0418]' : 'border-slate-200 bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Designed for Businesses Ready to Scale</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "E-commerce Brands", desc: "Increase sales, retention, and customer lifetime value." },
              { title: "Retail Businesses", desc: "Connect online and offline experiences to drive growth." },
              { title: "D2C Brands", desc: "Build direct customer relationships and maximize repeat purchases." },
              { title: "Multi-Channel Sellers", desc: "Manage growth across every marketplace, store, and communication channel." }
            ].map((item, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className={`p-6 rounded-2xl border ${isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'} text-center`}>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className={`${isDark ? 'text-white/60' : 'text-slate-500'}`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className={`py-32 relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-[#060010] to-[#0A0518]' : 'bg-gradient-to-b from-white to-violet-50'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6">Grow Revenue With Confidence</h2>
          <p className={`text-xl mb-10 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Stop relying on disconnected tools and manual processes. Use one platform to attract customers, increase conversions, and drive long-term business growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact-us" className="px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-all hover:scale-105 inline-flex items-center gap-2">
              Start Free Today <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact-us" className={`px-8 py-4 rounded-full border font-medium transition-all hover:scale-105 ${isDark ? 'border-white/20 hover:bg-white/10 text-white' : 'border-slate-300 hover:bg-slate-200 text-slate-900'}`}>
              Talk to Sales
            </Link>
          </div>
          <div className={`mt-16 text-sm font-medium tracking-wide uppercase ${isDark ? 'text-white/40' : 'text-slate-500'}`}>
            More sales. Better retention. Sustainable growth. Powered by Caartzee.
          </div>
        </div>
      </div>

    </div>
  );
}
