import Navbar from '@/components/shared/navbar/Navbar';
import { ArrowRight, TrendingUp, Target, BarChart, Megaphone, RefreshCw, PieChart, Check } from 'lucide-react';
import Link from 'next/link';
import Footer from '../shared/footer/Footer';

const features = [
  { icon: Target, title: 'Smart Sales Engine', desc: 'Manage orders, payments, and fulfillment in real time with intelligent tracking powered by CaartZee Sales Navigator.' },
  { icon: BarChart, title: 'Custom Sales Dashboards', desc: 'Visualize revenue, orders, inventory, and growth metrics in dashboards tailored to your business with Growth Analytics.' },
  { icon: Megaphone, title: 'Campaign & Offer Management', desc: 'Launch discount campaigns, flash sales, and coupon codes effortlessly to boost conversions.' },
  { icon: RefreshCw, title: 'Cart Recovery & Retargeting', desc: 'Automated abandoned cart emails and WhatsApp reminders via Caartzee Snap to recover lost sales.' },
  { icon: PieChart, title: 'Revenue Intelligence', desc: 'Track performance, customer behavior, and growth trends with real-time AI-powered analytics.' },
  { icon: TrendingUp, title: 'Upsell & Cross-sell Engine', desc: 'Smart product recommendations and automated checkout flows to increase average order value.' },
];

const benefits = [
  { title: 'Increase Revenue', desc: 'Businesses see an average 35% revenue increase within the first 3 months using Caartzee\'s smart sales tools.' },
  { title: 'Save Time', desc: 'Automate repetitive sales tasks with Sales Navigator and Crewsync — save 15+ hours per week.' },
  { title: 'Data-Driven Decisions', desc: 'Every feature is backed by Growth Analytics so you never guess — you know.' },
];

const salesPoints = [
  'Sell across storefronts, marketplaces, and social channels from one unified dashboard.',
  'Manage orders, payments, and fulfillment in real time with intelligent tracking.',
  'Boost conversions with smart pricing, offers, and automated checkout flows.',
  'Track revenue, customer behavior, and sales trends with powerful analytics.',
];

const SolutionSales = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(210_60%_15%)_0%,hsl(220_20%_4%)_70%)]" />
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <span className="badge-highlight mb-6 inline-block">Sales</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
          <span className="gradient-text">Boost Revenue</span>{' '}
          <span className="text-foreground">& Conversions</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Caartzee's Smart Sales Engine powers your entire revenue ecosystem — from storefront to marketplace, automation to conversion. All on autopilot.
        </p>
        <Link
          href="/get-started"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-foreground text-background hover:opacity-90 transition-opacity"
        >
          Supercharge your sales <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    {/* Features */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="badge-highlight mb-4 inline-block">Sales tools</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Close More. Sell More. Grow More.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From first click to repeat purchase — tools powered by Caartzee's product suite that optimize every step of the sales funnel.
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

    {/* Benefits */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="badge-highlight mb-4 inline-block">Why Caartzee</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Results That Speak
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {benefits.map((b) => (
            <div key={b.title} className="glass-card rounded-2xl p-8 text-center">
              <h3 className="font-display font-semibold text-foreground text-xl mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Sales Engine Banner */}
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
            {salesPoints.map((point) => (
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
            Ready to 10x Your Sales?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Start with Caartzee and watch your conversion rates soar. Launch for just ₹1.
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

    <Footer />
  </div>
);

export default SolutionSales;
