import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Pricing That Helps You Start, Not Think Twice</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
            Launch Your Website for{" "}
            <span className="relative">
              <span className="text-gradient">Just ₹1</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="hsl(35 95% 55%)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Start selling online with CaartZee for ₹1 for 3 months. No technical hassle. No long-term commitment. Just everything you need to go live.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-lg glow-accent group">
                Start for ₹1
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-accent hover:bg-accent/10 font-semibold text-lg px-8 py-6">
                Explore Products
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Free Setup Included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(210 25% 97%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
