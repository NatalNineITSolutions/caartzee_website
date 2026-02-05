import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Starter",
    price: "₹1",
    period: "for 3 months",
    description: "Perfect for getting started with online selling.",
    features: [
      { name: "Online Store", included: true },
      { name: "Up to 100 Products", included: true },
      { name: "Basic Themes", included: true },
      { name: "Payment Gateway Integration", included: true },
      { name: "Mobile Responsive", included: true },
      { name: "WhatsApp Selling (Snap)", included: false },
      { name: "ERP Features", included: false },
      { name: "Multi-channel Selling", included: false },
      { name: "Priority Support", included: false },
    ],
    cta: "Start for ₹1",
    popular: false,
    highlight: true,
  },
  {
    name: "Growth",
    price: "₹2,999",
    period: "/month",
    description: "For growing businesses needing more features.",
    features: [
      { name: "Online Store", included: true },
      { name: "Unlimited Products", included: true },
      { name: "Premium Themes", included: true },
      { name: "Payment Gateway Integration", included: true },
      { name: "Mobile Responsive", included: true },
      { name: "WhatsApp Selling (Snap)", included: true },
      { name: "Basic ERP Features", included: true },
      { name: "Multi-channel Selling", included: false },
      { name: "Priority Support", included: false },
    ],
    cta: "Get Started",
    popular: true,
    highlight: false,
  },
  {
    name: "Business",
    price: "₹5,999",
    period: "/month",
    description: "Complete solution for established businesses.",
    features: [
      { name: "Online Store", included: true },
      { name: "Unlimited Products", included: true },
      { name: "Custom Themes", included: true },
      { name: "Payment Gateway Integration", included: true },
      { name: "Mobile Responsive", included: true },
      { name: "WhatsApp Selling (Snap)", included: true },
      { name: "Full ERP Suite", included: true },
      { name: "Multi-channel Selling", included: true },
      { name: "Priority Support", included: true },
    ],
    cta: "Get Started",
    popular: false,
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations.",
    features: [
      { name: "Everything in Business", included: true },
      { name: "Custom Integrations", included: true },
      { name: "Dedicated Account Manager", included: true },
      { name: "SLA Guarantee", included: true },
      { name: "On-premise Deployment", included: true },
      { name: "Custom Training", included: true },
      { name: "API Access", included: true },
      { name: "White-label Option", included: true },
      { name: "24/7 Phone Support", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
    highlight: false,
  },
];

const faqs = [
  {
    question: "What happens after the ₹1 trial?",
    answer: "After 3 months, you can upgrade to any paid plan. We'll notify you before the trial ends, and there's no automatic charge.",
  },
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No, there are no setup fees for any plan. You only pay the monthly subscription cost.",
  },
  {
    question: "Do you offer annual billing?",
    answer: "Yes, annual billing is available with up to 20% discount. Contact our sales team for details.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-section py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              Pricing That Helps You Start
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Start for just ₹1 and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {plans.map((plan) => (
                <div 
                  key={plan.name}
                  className={`relative p-6 lg:p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular 
                      ? 'bg-primary text-primary-foreground border-primary shadow-glow' 
                      : plan.highlight
                        ? 'bg-card border-accent/50 shadow-lg'
                        : 'bg-card border-border/50 shadow-soft'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Limited Offer
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className={`font-display text-xl font-bold mb-2 ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className={`font-display text-4xl font-bold ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ${plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                        {plan.period}
                      </span>
                    </div>
                    <p className={`mt-2 text-sm ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.name} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className={`w-5 h-5 ${plan.popular ? 'text-accent' : 'text-primary'}`} />
                        ) : (
                          <X className={`w-5 h-5 ${plan.popular ? 'text-primary-foreground/40' : 'text-muted-foreground/50'}`} />
                        )}
                        <span className={`text-sm ${
                          feature.included 
                            ? (plan.popular ? 'text-primary-foreground' : 'text-foreground')
                            : (plan.popular ? 'text-primary-foreground/50' : 'text-muted-foreground/50')
                        }`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/signup" className="block">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                          : plan.highlight
                            ? 'bg-primary hover:bg-primary/90'
                            : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
                FAQs
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Pricing <span className="text-primary">Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto grid gap-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="p-6 rounded-2xl bg-card border border-border/50">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Start your journey with CaartZee for just ₹1. No credit card required.
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start for ₹1 Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
