import { ShoppingCart, BarChart3, Megaphone, Shield, Users } from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Complete E-Commerce and ERP",
    description: "Built to work together seamlessly for your business operations.",
  },
  {
    icon: BarChart3,
    title: "Sell Across Every Channel",
    description: "Manage all your sales channels from one unified dashboard.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Social Support",
    description: "AI-powered marketing tools that fuel your growth.",
  },
  {
    icon: Shield,
    title: "Secure & Mobile-First",
    description: "Fast, secure platform designed for modern mobile experiences.",
  },
  {
    icon: Users,
    title: "Trusted by Businesses",
    description: "Retail, services, manufacturing, and online sellers trust us.",
  },
];

const ValueProposition = () => {
  return (
    <section id="why-cartzee" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            Why Choose CartZee
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything Your Business Needs to{" "}
            <span className="text-primary">Sell, Manage, and Grow</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Unify your online stores, inventory, finance, and sales channels within a single intelligent dashboard—designed for businesses ready to scale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
