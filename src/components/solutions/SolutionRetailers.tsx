import Navbar from '@/components/shared/navbar/Navbar';
import { ArrowRight, Store, Truck, CreditCard, Users, PackageCheck, MapPin, Check } from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: Store, title: 'POS + Online Integration', desc: 'Connect your in-store point-of-sale with your online storefront using Caartzee Zeedone for seamless omnichannel selling.' },
  { icon: MapPin, title: 'Multi-Location Management', desc: 'Manage inventory, orders, and staff across multiple store locations from one centralized Caartzee dashboard.' },
  { icon: PackageCheck, title: 'Inventory & Stock AI', desc: 'Real-time stock tracking with AI-powered predictions, low-stock alerts, and auto-reorder triggers across all locations.' },
  { icon: Users, title: 'Vendor & Team Control', desc: 'Manage vendors, staff roles, and permissions with centralized operational control powered by CaartZee Crewsync.' },
  { icon: Truck, title: 'Smart Fulfillment', desc: 'Offer in-store pickup, local delivery, and nationwide shipping — all managed through automated workflows.' },
  { icon: CreditCard, title: 'GST & Finance Automation', desc: 'Automated GST invoicing, UPI/card/wallet payments, and financial reconciliation in a single dashboard.' },
];

const stats = [
  { value: '40%', label: 'Faster order processing' },
  { value: '3x', label: 'Customer retention boost' },
  { value: '60%', label: 'Reduction in manual work' },
  { value: '99.9%', label: 'Uptime guarantee' },
];

const benefitPoints = [
  'Sell across storefronts, marketplaces, and social channels from one unified dashboard.',
  'Manage orders, payments, and fulfillment in real time with intelligent tracking.',
  'Boost conversions with smart pricing, offers, and automated checkout flows.',
  'Track revenue, customer behavior, and sales trends with powerful analytics.',
];

const SolutionRetailers = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(210_60%_15%)_0%,hsl(220_20%_4%)_70%)]" />
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <span className="badge-highlight mb-6 inline-block">Retailers</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
          <span className="gradient-text">Manage In-Store</span>{' '}
          <span className="text-foreground">& Online Sales</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Bridge the gap between your physical store and digital presence. Unify inventory, orders, and customers across every channel with Caartzee's retail-first tools.
        </p>
        <Link
          href="/get-started"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-foreground text-background hover:opacity-90 transition-opacity"
        >
          Empower your retail <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-2xl p-6 text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">{s.value}</div>
              <div className="text-muted-foreground text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="badge-highlight mb-4 inline-block">Capabilities</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Built for Modern Retail
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools that connect every part of your retail operation into one streamlined workflow — powered by Caartzee's product suite.
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

    {/* Benefit Banner */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-3xl p-10 md:p-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-snug mb-6">
              Smart Sales Engine powers your entire revenue ecosystem from storefront to marketplace, automation to conversion.
            </h2>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold border border-border text-foreground hover:bg-secondary transition-colors"
            >
              Explore smart sales
            </Link>
          </div>
          <ul className="space-y-4">
            {benefitPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <div className="glass-card rounded-3xl p-12 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transform Your Retail Business
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join retailers who've streamlined operations and boosted sales with Caartzee. Start for just ₹1.
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

export default SolutionRetailers;
