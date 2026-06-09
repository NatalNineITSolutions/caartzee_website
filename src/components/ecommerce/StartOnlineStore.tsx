'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { 
  Store, Package, CreditCard, ShoppingBag, 
  Smartphone, Share2, BarChart3, TrendingUp,
  CheckCircle2, ArrowRight, Quote
} from 'lucide-react';

export default function StartOnlineStore() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const isDark = mounted && resolvedTheme === 'dark';

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const alternatingSections = [
    {
      badge: "Multi-Channel Commerce",
      headline: "Reach Customers Wherever They Shop",
      description: "Sell through your online store, marketplaces, social channels, and customer conversations—all from one connected platform.",
      icon: <Share2 className="w-6 h-6" />,
      features: [
        { title: "Online Store" },
        { title: "WhatsApp Commerce" },
        { title: "Marketplace Integration" },
        { title: "Social Selling" },
        { title: "Mobile-Friendly Storefront" }
      ]
    },
    {
      badge: "Store Operations",
      headline: "Run Your Business Efficiently",
      description: "Manage products, inventory, orders, customers, and payments from a single dashboard.",
      icon: <BarChart3 className="w-6 h-6" />,
      features: [
        { title: "Inventory Management", desc: "Track stock levels and prevent overselling." },
        { title: "Order Management", desc: "Process and monitor orders in real time." },
        { title: "Customer Management", desc: "Build stronger relationships with customer insights and history." },
        { title: "Analytics Dashboard", desc: "Understand sales performance and business growth." }
      ]
    },
    {
      badge: "Growth Tools",
      headline: "Turn Visitors Into Customers",
      description: "Use built-in tools designed to increase conversions and encourage repeat purchases.",
      icon: <TrendingUp className="w-6 h-6" />,
      features: [
        { title: "Promotions & Discounts", desc: "Create special offers that drive more sales." },
        { title: "Cart Recovery", desc: "Automatically recover abandoned carts and reduce lost revenue." },
        { title: "Customer Engagement", desc: "Connect with shoppers through email, WhatsApp, and marketing campaigns." },
        { title: "AI-Powered Insights", desc: "Discover opportunities to improve sales and customer experience." }
      ]
    }
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${isDark ? 'bg-[#060010] text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
            Launch Your Store
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
            Start Selling <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Online Today
            </span>
          </h1>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Create a professional online store, showcase your products, accept payments, and grow your business—all from one platform.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact-us" className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all hover:scale-105">
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
            Everything You Need to Build and Grow Your Store
          </motion.h3>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={`text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Whether you're launching your first product or managing thousands of orders, Caartzee gives you the tools to sell confidently online.
          </motion.p>
        </div>
      </div>

      {/* Why Caartzee */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 text-purple-500 text-sm font-medium mb-6">
            Why Choose Caartzee
          </div>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl font-bold mb-4">
            Built for Modern Commerce
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Launch quickly, manage effortlessly, and scale without complexity using a platform designed for growing businesses.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Store />, title: "Create Your Store", desc: "Build a beautiful online storefront without coding. Customize your brand, products, and customer experience with ease." },
            { icon: <Package />, title: "Manage Products", desc: "Add products, organize collections, manage inventory, and keep everything updated from one dashboard." },
            { icon: <CreditCard />, title: "Accept Payments", desc: "Offer secure payment options and provide a smooth checkout experience for your customers." },
            { icon: <ShoppingBag />, title: "Process Orders", desc: "Track orders, manage fulfillment, and keep customers informed throughout the buying journey." }
          ].map((feature, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } } }} 
              className={`p-8 rounded-2xl border ${isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'} flex flex-col gap-4 hover:-translate-y-1 transition-transform`}>
              <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mb-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className={`leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className={`py-24 border-y ${isDark ? 'border-white/10 bg-gradient-to-b from-[#0A0418] to-[#060010]' : 'border-slate-200 bg-gradient-to-b from-white to-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 text-blue-500 text-sm font-medium mb-6">
              Simple Setup
            </div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl font-bold mb-4">
              Launch in Three Easy Steps
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-0" />
            {[
              { step: "01", title: "Create Your Store", desc: "Set up your storefront, customize your design, and add your branding." },
              { step: "02", title: "Add Products", desc: "Upload products, descriptions, pricing, and inventory details." },
              { step: "03", title: "Start Selling", desc: "Publish your store and begin accepting orders from customers worldwide." }
            ].map((step, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } } }} 
                className="relative z-10 text-center flex flex-col items-center">
                <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center text-2xl font-bold mb-6 ${isDark ? 'bg-[#0A0418] border-blue-500/30 text-blue-400' : 'bg-white border-blue-200 text-blue-600'}`}>
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className={`leading-relaxed max-w-xs ${isDark ? 'text-white/70' : 'text-slate-600'}`}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Alternating Feature Sections */}
      <div className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-32">
          {alternatingSections.map((section, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 text-blue-500 text-sm font-medium">
                  {section.icon} {section.badge}
                </div>
                <h2 className="text-4xl font-bold leading-tight">{section.headline}</h2>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>{section.description}</p>
                <ul className="space-y-6 pt-4">
                  {section.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className={`font-semibold block ${isDark ? 'text-white/90' : 'text-slate-800'}`}>{feature.title}</span>
                        {'desc' in feature && feature.desc && (
                          <span className={`block mt-1 ${isDark ? 'text-white/60' : 'text-slate-500'}`}>{feature.desc}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full relative">
                <div className={`aspect-square md:aspect-[4/3] rounded-3xl border overflow-hidden ${isDark ? 'bg-gradient-to-bl from-blue-900/10 to-purple-900/10 border-white/10' : 'bg-gradient-to-bl from-blue-50 to-purple-50 border-slate-200'} flex items-center justify-center p-8 relative`}>
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
                   <div className={`w-full max-w-sm rounded-2xl shadow-2xl p-6 ${isDark ? 'bg-[#141020] border border-white/10' : 'bg-white border border-slate-100'} backdrop-blur-xl relative z-10`}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-900'}`}>
                          {section.icon}
                        </div>
                        <div className="h-4 w-32 rounded-full bg-current opacity-10" />
                      </div>
                      <div className="space-y-4">
                        <div className="h-2 w-full rounded-full bg-current opacity-5" />
                        <div className="h-2 w-5/6 rounded-full bg-current opacity-5" />
                        <div className="h-2 w-4/6 rounded-full bg-current opacity-5" />
                        <div className="h-12 w-full rounded-lg bg-blue-500/10 mt-4 border border-blue-500/20" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Business Types */}
      <div className={`py-24 border-y ${isDark ? 'border-white/10 bg-[#0A0418]' : 'border-slate-200 bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 text-purple-500 text-sm font-medium mb-6">
              Who It's For
            </div>
            <h2 className="text-4xl font-bold mb-6">Built for Every Stage of Growth</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Entrepreneurs", desc: "Launch your first online business." },
              { title: "Small Businesses", desc: "Grow your customer base and increase sales." },
              { title: "D2C Brands", desc: "Build direct relationships with customers." },
              { title: "Established Retailers", desc: "Expand operations with a scalable commerce platform." }
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

      {/* Statistics */}
      <div className="py-24 max-w-7xl mx-auto px-6 border-b border-slate-200 dark:border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Built to Support Growing Businesses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { stat: "10M+", desc: "Products Managed" },
            { stat: "100K+", desc: "Orders Processed" },
            { stat: "99.9%", desc: "Platform Reliability" },
            { stat: "1", desc: "Platform Everything You Need" }
          ].map((item, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">{item.stat}</div>
              <div className={`font-medium ${isDark ? 'text-white/80' : 'text-slate-700'}`}>{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className={`py-24 ${isDark ? 'bg-[#060010]' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Growing Brands Trust Caartzee</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} 
            className={`p-10 rounded-3xl border relative ${isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50'}`}>
            <Quote className="w-12 h-12 text-blue-500/20 absolute top-6 left-6" />
            <p className={`text-xl md:text-2xl leading-relaxed italic mb-8 relative z-10 ${isDark ? 'text-white/90' : 'text-slate-800'}`}>
              "Launching our store was simple, and managing orders has never been easier. Caartzee helped us start selling faster and scale with confidence."
            </p>
            <div className="font-semibold text-blue-500">— Store Owner</div>
          </motion.div>
        </div>
      </div>

      {/* Final CTA */}
      <div className={`py-32 relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-[#060010] to-[#0A0A2A]' : 'bg-gradient-to-b from-white to-blue-50'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Launch Your Store?</h2>
          <p className={`text-xl mb-10 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Start selling online with a platform designed to help you launch quickly, manage effortlessly, and grow confidently.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact-us" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all hover:scale-105 inline-flex items-center gap-2">
              Start Your Store Today <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
