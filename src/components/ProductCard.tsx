import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  bestFor: string;
  color: "primary" | "accent" | "teal" | "amber" | "emerald";
}

const colorVariants = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/20",
    icon: "bg-primary text-primary-foreground",
    badge: "bg-primary/10 text-primary",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/20",
    icon: "bg-accent text-accent-foreground",
    badge: "bg-accent/10 text-accent-foreground",
  },
  teal: {
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    icon: "bg-teal-500 text-white",
    badge: "bg-teal-500/10 text-teal-700",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    icon: "bg-amber-500 text-white",
    badge: "bg-amber-500/10 text-amber-700",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    icon: "bg-emerald-500 text-white",
    badge: "bg-emerald-500/10 text-emerald-700",
  },
};

const ProductCard = ({
  icon: Icon,
  title,
  tagline,
  description,
  features,
  bestFor,
  color,
}: ProductCardProps) => {
  const variant = colorVariants[color];

  return (
    <div className={`group relative flex flex-col h-full p-6 lg:p-8 rounded-2xl bg-card border ${variant.border} shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2`}>
      {/* Icon Header */}
      <div className={`w-16 h-16 rounded-2xl ${variant.icon} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8" />
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
        {title}
      </h3>

      {/* Tagline */}
      <p className="text-primary font-semibold mb-3">{tagline}</p>

      {/* Description */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <div className="space-y-3 mb-6 flex-grow">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full ${variant.badge} flex items-center justify-center flex-shrink-0 mt-0.5`}>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      {/* Best For Badge */}
      <div className={`inline-flex items-center self-start px-3 py-1.5 rounded-full ${variant.badge} text-xs font-semibold mb-6`}>
        Best For: {bestFor}
      </div>

      {/* CTA */}
      <Button variant="outline" className="w-full group/btn border-border hover:border-primary hover:text-primary">
        Learn More
        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default ProductCard;
