import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto text-center p-8 lg:p-16 rounded-3xl hero-section overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              Limited Time Offer
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>

            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Join thousands of businesses already growing with CaartZee. Start your journey today for just ₹1.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-lg glow-accent group">
                  Start for ₹1 Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6">
                  View Pricing
                </Button>
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/60">
              No credit card required • Free setup included • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
