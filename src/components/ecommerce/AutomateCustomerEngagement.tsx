'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { 
  Bot, MessageCircle, RefreshCw, Sparkles, Target, 
  LineChart, Users, Zap, CheckCircle2, ArrowRight
} from 'lucide-react';

export default function AutomateCustomerEngagement() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const isDark = mounted && resolvedTheme === 'dark';

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const sections = [
    {
      badge: "AI-Powered Conversations",
      headline: "Always Available. Always Helpful.",
      description: "Answer customer questions, recommend products, and provide support automatically with AI-powered conversations that feel natural and personalized.",
      icon: <Bot className="w-6 h-6" />,
      features: ["Instant Responses", "Product Recommendations", "FAQ Automation", "Order Assistance", "24/7 Availability"]
    },
    {
      badge: "WhatsApp Engagement",
      headline: "Meet Customers Where They Already Are",
      description: "Connect with customers directly on WhatsApp and create seamless shopping and support experiences through their favorite messaging channel.",
      icon: <MessageCircle className="w-6 h-6" />,
      features: ["Instant Messaging", "Product Sharing", "Order Updates", "Customer Support", "Personalized Communication"]
    },
    {
      badge: "Automated Campaigns",
      headline: "Send The Right Message At The Right Time",
      description: "Create automated customer journeys that keep shoppers engaged before, during, and after every purchase.",
      icon: <RefreshCw className="w-6 h-6" />,
      features: ["Welcome Messages", "Product Recommendations", "Abandoned Cart Recovery", "Order Confirmations", "Shipping Updates", "Re-engagement Campaigns", "Repeat Purchase Reminders"]
    },
    {
      badge: "Personalization",
      headline: "Every Customer Gets A Personalized Experience",
      description: "Deliver relevant messages based on customer behavior, interests, purchases, and engagement history.",
      icon: <Sparkles className="w-6 h-6" />,
      features: ["Customer Segmentation", "Behavior-Based Messaging", "Personalized Offers", "Purchase-Based Recommendations", "Dynamic Campaigns"]
    },
    {
      badge: "Customer Lifecycle Automation",
      headline: "Engage Customers At Every Stage",
      description: "Guide customers through every step of their journey—from discovery to repeat purchases.",
      icon: <Target className="w-6 h-6" />,
      features: ["Discover", "Engage", "Purchase", "Support", "Retain", "Grow"]
    },
    {
      badge: "Smart Follow-Ups",
      headline: "Never Miss An Opportunity To Reconnect",
      description: "Automatically follow up with customers after inquiries, purchases, or abandoned carts to increase engagement and conversions.",
      icon: <Zap className="w-6 h-6" />,
      features: ["Higher Response Rates", "More Completed Purchases", "Improved Customer Retention", "Stronger Relationships"]
    },
    {
      badge: "Unified Customer View",
      headline: "Know Your Customers Better",
      description: "Access a complete history of customer interactions, purchases, conversations, and engagement from one centralized dashboard.",
      icon: <Users className="w-6 h-6" />,
      features: ["Customer Profiles", "Conversation History", "Purchase History", "Engagement Tracking", "Activity Insights"]
    },
    {
      badge: "Analytics & Insights",
      headline: "Measure Every Interaction",
      description: "Track customer engagement, campaign performance, conversation trends, and business impact through real-time analytics.",
      icon: <LineChart className="w-6 h-6" />,
      features: ["Customer Engagement Rate", "Campaign Performance", "Response Times", "Conversion Rates", "Customer Retention", "Revenue Impact"]
    }
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${isDark ? 'bg-[#060010] text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navbar Placeholder or Padding */}
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-8">
            Customer Engagement Automation
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
            Build Stronger Customer Relationships.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Automatically.
            </span>
          </h1>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Engage customers at every stage of their journey with automated conversations, personalized messaging, and AI-powered support that works around the clock.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact-us" className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all hover:scale-105">
              Start Free Trial
            </Link>
            <Link href="/contact-us" className={`w-full sm:w-auto px-8 py-4 rounded-full border font-medium transition-all hover:scale-105 ${isDark ? 'border-white/20 hover:bg-white/10 text-white' : 'border-slate-200 hover:bg-slate-100 text-slate-900'}`}>
              Book a Demo
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Trust Section */}
      <div className={`py-20 border-y ${isDark ? 'border-white/10 bg-[#0A0418]' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-medium mb-6">
            Every interaction matters.
          </motion.h3>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={`text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            From first-time visitors to loyal customers, Caartzee helps you create meaningful conversations that drive engagement, increase sales, and build lasting relationships.
          </motion.p>
        </div>
      </div>

      {/* Why Automate Section */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl font-bold mb-4">
            Stay Connected Without Doing Everything Manually
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Customers expect fast responses, personalized experiences, and timely updates. Caartzee automates customer engagement so you can deliver exceptional experiences at scale.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Respond instantly", "Increase customer satisfaction", "Reduce support workload", "Drive repeat purchases", "Improve customer retention", "Scale conversations effortlessly"].map((benefit, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } } }} 
              className={`p-6 rounded-2xl border ${isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'} flex items-start gap-4`}>
              <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
              <span className="font-medium">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Alternating Feature Sections */}
      <div className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-32">
          {sections.map((section, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-500 text-sm font-medium">
                  {section.icon} {section.badge}
                </div>
                <h2 className="text-4xl font-bold leading-tight">{section.headline}</h2>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>{section.description}</p>
                <ul className="space-y-3 pt-4">
                  {section.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className={isDark ? 'text-white/90' : 'text-slate-800'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full relative">
                {/* Decorative Abstract UI Representation */}
                <div className={`aspect-square md:aspect-[4/3] rounded-3xl border overflow-hidden ${isDark ? 'bg-gradient-to-br from-white/5 to-white/10 border-white/10' : 'bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200'} flex items-center justify-center p-8 relative`}>
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
                   <div className={`w-full max-w-sm rounded-2xl shadow-2xl p-6 ${isDark ? 'bg-[#141020] border border-white/10' : 'bg-white border border-slate-100'}`}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-900'}`}>
                          {section.icon}
                        </div>
                        <div className="h-4 w-32 rounded-full bg-current opacity-10" />
                      </div>
                      <div className="space-y-3">
                        <div className="h-2 w-full rounded-full bg-current opacity-5" />
                        <div className="h-2 w-5/6 rounded-full bg-current opacity-5" />
                        <div className="h-2 w-4/6 rounded-full bg-current opacity-5" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Built For Growing Businesses */}
      <div className={`py-24 border-y ${isDark ? 'border-white/10 bg-[#0A0418]' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 text-cyan-500 text-sm font-medium mb-6">
            Built For Growing Businesses
          </div>
          <h2 className="text-4xl font-bold mb-6">Scale Relationships As You Grow</h2>
          <p className={`text-lg max-w-2xl mx-auto mb-16 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Whether you're engaging hundreds or thousands of customers, Caartzee helps you deliver personalized experiences without increasing your workload.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["D2C Brands", "Online Stores", "Retail Businesses", "Service Providers", "Growing Startups", "Enterprise Teams"].map((item, idx) => (
              <span key={idx} className={`px-6 py-3 rounded-full font-medium border ${isDark ? 'border-white/10 bg-white/5 hover:bg-white/10' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'} transition-colors`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { stat: "24/7", desc: "Automated Customer Engagement" },
            { stat: "10X", desc: "Faster Response Times" },
            { stat: "100%", desc: "Conversation Visibility" },
            { stat: "1", desc: "Platform for Engagement" }
          ].map((item, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 mb-4">{item.stat}</div>
              <div className={`font-medium ${isDark ? 'text-white/80' : 'text-slate-700'}`}>{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className={`py-32 relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-[#060010] to-[#0A1A2A]' : 'bg-gradient-to-b from-slate-50 to-slate-200'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6">Turn Every Conversation Into An Opportunity</h2>
          <p className={`text-xl mb-10 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Engage customers, automate support, and build stronger relationships with intelligent customer engagement tools designed for growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact-us" className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all hover:scale-105 inline-flex items-center gap-2">
              Start Engaging Customers <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact-us" className={`px-8 py-4 rounded-full border font-medium transition-all hover:scale-105 ${isDark ? 'border-white/20 hover:bg-white/10 text-white' : 'border-slate-300 hover:bg-slate-200 text-slate-900'}`}>
              Talk To An Expert
            </Link>
          </div>
          <div className={`mt-24 pt-10 border-t flex justify-center gap-8 font-medium tracking-wide uppercase text-sm ${isDark ? 'border-white/10 text-white/40' : 'border-slate-300 text-slate-500'}`}>
            <span>Engage Smarter.</span>
            <span>Support Faster.</span>
            <span>Grow Stronger.</span>
          </div>
        </div>
      </div>

    </div>
  );
}
