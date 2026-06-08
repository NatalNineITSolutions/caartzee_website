'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { 
  Globe, Share2, Box, RefreshCw, ShoppingBag, 
  Smartphone, LineChart, Package, LayoutDashboard,
  CheckCircle2, ArrowRight, MessageCircle, Store
} from 'lucide-react';

export default function ExpandSalesChannels() {
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
      badge: "Unified Catalog",
      headline: "One Catalog. Multiple Sales Channels.",
      description: "Create products once and publish them everywhere. Keep inventory, pricing, and product information synchronized automatically across all connected channels.",
      icon: <Box className="w-6 h-6" />,
      features: ["Central Product Management", "Real-Time Inventory Sync", "Unified Pricing Controls", "Bulk Product Publishing", "Multi-Channel Visibility"]
    },
    {
      badge: "Connected Commerce",
      headline: "Sell Across Every Customer Touchpoint",
      description: "Expand your business beyond your website and reach customers where they already spend their time.",
      icon: <Globe className="w-6 h-6" />,
      features: ["Online Store", "Marketplaces", "WhatsApp Commerce", "Social Commerce", "Mobile Shopping Experiences", "Direct Customer Sales"]
    },
    {
      badge: "Unified Operations",
      headline: "Manage Everything From One Dashboard",
      description: "No more switching between multiple systems. Manage products, orders, customers, and sales activity through a centralized platform.",
      icon: <LayoutDashboard className="w-6 h-6" />,
      features: ["Product Management", "Order Processing", "Customer Information", "Inventory Control", "Sales Analytics", "Business Reporting"]
    },
    {
      badge: "Marketplace Growth",
      headline: "Expand Your Reach Without Expanding Your Workload",
      description: "List products across multiple marketplaces and manage them from one platform.",
      icon: <Store className="w-6 h-6" />,
      features: ["Reach New Customers", "Increase Product Visibility", "Grow Sales Opportunities", "Reduce Manual Work", "Improve Operational Efficiency"]
    },
    {
      badge: "WhatsApp Commerce",
      headline: "Turn Conversations Into Sales",
      description: "Engage customers directly through WhatsApp, answer questions instantly, share products, and close sales faster.",
      icon: <MessageCircle className="w-6 h-6" />,
      features: ["Customer Conversations", "Product Sharing", "Instant Support", "Order Updates", "Payment Collection"]
    },
    {
      badge: "Inventory Management",
      headline: "Keep Inventory Accurate Everywhere",
      description: "Prevent overselling and inventory mismatches with automatic stock synchronization across all sales channels.",
      icon: <RefreshCw className="w-6 h-6" />,
      features: ["Live Inventory Updates", "Stock Monitoring", "Centralized Inventory Control", "Low Stock Alerts", "Inventory Reporting"]
    },
    {
      badge: "Order Management",
      headline: "Every Order. One Place.",
      description: "Track, manage, and fulfill orders from every sales channel through a unified workflow.",
      icon: <Package className="w-6 h-6" />,
      features: ["Centralized Orders", "Faster Fulfillment", "Customer Tracking", "Shipping Visibility", "Order History"]
    },
    {
      badge: "Analytics & Insights",
      headline: "Know What's Driving Growth",
      description: "Understand sales performance across every channel and make smarter decisions with real-time reporting.",
      icon: <LineChart className="w-6 h-6" />,
      features: ["Revenue by Channel", "Top Selling Products", "Customer Acquisition Trends", "Inventory Performance", "Order Analytics", "Growth Insights"]
    }
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${isDark ? 'bg-[#060010] text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium mb-8">
            Multi-Channel Commerce
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
            Sell Everywhere.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Manage Everything. Grow Faster.
            </span>
          </h1>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Reach more customers across marketplaces, social channels, WhatsApp, and your online store—all from one connected platform.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact-us" className="w-full sm:w-auto px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-all hover:scale-105">
              Start Selling Everywhere
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
            More channels. More customers. More opportunities.
          </motion.h3>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={`text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Modern shoppers discover products across multiple platforms. Caartzee helps you meet customers wherever they prefer to shop while managing everything from one place.
          </motion.p>
        </div>
      </div>

      {/* Why Multi-Channel Commerce */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl font-bold mb-4">
            Reach Customers Wherever They Buy
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Expand beyond a single storefront and increase visibility across multiple sales channels without increasing operational complexity.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Sell across multiple marketplaces", 
            "Manage products from one dashboard", 
            "Keep inventory synchronized automatically", 
            "Centralize order management", 
            "Increase brand visibility", 
            "Grow revenue through new channels"
          ].map((benefit, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } } }} 
              className={`p-6 rounded-2xl border ${isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'} flex items-start gap-4`}>
              <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0" />
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 text-amber-500 text-sm font-medium">
                  {section.icon} {section.badge}
                </div>
                <h2 className="text-4xl font-bold leading-tight">{section.headline}</h2>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>{section.description}</p>
                <ul className="space-y-3 pt-4">
                  {section.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span className={isDark ? 'text-white/90' : 'text-slate-800'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full relative">
                <div className={`aspect-square md:aspect-[4/3] rounded-3xl border overflow-hidden ${isDark ? 'bg-gradient-to-br from-amber-900/10 to-orange-900/10 border-white/10' : 'bg-gradient-to-br from-amber-50 to-orange-50 border-slate-200'} flex items-center justify-center p-8 relative`}>
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
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

      {/* Built For Growth */}
      <div className={`py-24 border-y ${isDark ? 'border-white/10 bg-[#0A0418]' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 text-orange-500 text-sm font-medium mb-6">
            Built For Growth
          </div>
          <h2 className="text-4xl font-bold mb-6">Scale Without Complexity</h2>
          <p className={`text-lg max-w-2xl mx-auto mb-16 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Whether you're selling on one channel or ten, Caartzee gives you the tools to grow efficiently while keeping operations simple.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["D2C Brands", "Retail Businesses", "Distributors", "Manufacturers", "Marketplace Sellers", "Growing Commerce Businesses"].map((item, idx) => (
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
            { stat: "50+", desc: "Sales Channel Integrations" },
            { stat: "10M+", desc: "Products Managed" },
            { stat: "100K+", desc: "Orders Processed" },
            { stat: "1", desc: "Platform Unified Commerce Management" }
          ].map((item, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-4">{item.stat}</div>
              <div className={`font-medium ${isDark ? 'text-white/80' : 'text-slate-700'}`}>{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className={`py-32 relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-[#060010] to-[#1A0A00]' : 'bg-gradient-to-b from-slate-50 to-amber-50'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.15),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Sell Everywhere?</h2>
          <p className={`text-xl mb-10 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            Expand your reach, connect with more customers, and manage every sales channel from a single platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact-us" className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-all hover:scale-105 inline-flex items-center gap-2">
              Start Growing Today <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact-us" className={`px-8 py-4 rounded-full border font-medium transition-all hover:scale-105 ${isDark ? 'border-white/20 hover:bg-white/10 text-white' : 'border-slate-300 hover:bg-slate-200 text-slate-900'}`}>
              Talk to Our Team
            </Link>
          </div>
          <div className={`mt-24 pt-10 border-t flex justify-center gap-8 font-medium tracking-wide uppercase text-sm ${isDark ? 'border-white/10 text-white/40' : 'border-slate-300 text-slate-500'}`}>
            <span>One Platform.</span>
            <span>Every Channel.</span>
            <span>Unlimited Growth.</span>
          </div>
        </div>
      </div>

    </div>
  );
}
