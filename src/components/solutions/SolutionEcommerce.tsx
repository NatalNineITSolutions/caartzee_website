// src/components/solutions/SolutionEcommerce.tsx
import Navbar from '@/components/shared/navbar/Navbar';
import { ArrowRight, ShoppingBag, Globe, BarChart3, Zap, Shield, Layers, Check } from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: Globe, title: 'Multi-Channel Selling', desc: 'Sell across storefronts, marketplaces, and social platforms from one unified dashboard with Caartzee Zeedone.' },
  { icon: Zap, title: 'Automated Sales Workflows', desc: 'Streamline orders, invoicing, payments, and fulfillment with intelligent automation powered by Sales Navigator.' },
  { icon: BarChart3, title: 'Revenue Intelligence', desc: 'Track performance, customer behavior, and growth trends with real-time analytics from Growth Analytics.' },
  { icon: Layers, title: 'Inventory & Stock AI', desc: 'AI-powered stock predictions, low-stock alerts, and auto-reorder triggers to never miss a sale.' },
  { icon: Shield, title: 'GST & Finance Automation', desc: 'Automated GST invoicing, tax calculations, and financial reports — fully compliant and hassle-free.' },
  { icon: ShoppingBag, title: 'Unified Customer Inbox', desc: 'Manage customer queries from WhatsApp, email, and social channels in a single inbox with Caartzee Snap.' },
];

const whyCaartzee = [
  'Unified multi-channel commerce management.',
  'ERP-level automation for finance, inventory & operations.',
  'AI-powered analytics and real-time revenue intelligence.',
  'Scalable architecture built for startups to enterprises.',
];

const SolutionEcommerce = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(210_60%_15%)_0%,hsl(220_20%_4%)_70%)]" />
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <span className="badge-highlight mb-6 inline-block">Ecommerce</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
          <span className="gradient-text">Build & Scale</span>{' '}
          <span className="text-foreground">Your Online Store</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Caartzee powers your entire selling ecosystem — from multi-channel commerce and intelligent automation to real-time analytics and operational control. Everything you need to scale, unified in one platform.
        </p>
        <Link
          href="/get-started"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-foreground text-background hover:opacity-90 transition-opacity"
        >
          Start selling today <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    {/* Features */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="badge-highlight mb-4 inline-block">Features</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            The Smart Sales Engine Built for Modern Commerce
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful tools designed to simplify selling and maximize revenue across every channel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="glass-card rounded-2xl p-6 hover:border-border transition-all">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Caartzee */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge-highlight mb-4 inline-block">Why Caartzee</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built to power your entire commerce ecosystem.
            </h2>
            <p className="text-muted-foreground mb-8">
              Caartzee is more than a platform, it's a complete business operating system designed to unify sales, operations, automation, and intelligence in one powerful infrastructure.
            </p>
            <ul className="space-y-4">
              {whyCaartzee.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card rounded-3xl p-8">
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-4">
                <div className="text-xs text-muted-foreground mb-1">Transaction statistics</div>
                <div className="font-display text-2xl font-bold text-foreground">$41,379</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">+20%</span>
                </div>
              </div>
              <div className="glass-card rounded-xl p-4">
                <div className="text-xs text-muted-foreground mb-1">Profit Margin</div>
                <div className="font-display text-2xl font-bold text-foreground">85.4%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <div className="glass-card rounded-3xl p-12 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Launch, manage & scale your entire commerce ecosystem
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Unify storefronts, marketplaces, automation, and analytics in one powerful platform built for modern businesses.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            Get started free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    
  </div>
);

export default SolutionEcommerce;
