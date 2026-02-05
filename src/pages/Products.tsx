import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Store, Briefcase, MessageCircle, BarChart2, Rocket, 
  ArrowRight, Check, Sparkles 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  {
    id: "ecommerce",
    icon: Store,
    title: "CaartZee E-commerce",
    tagline: "Build an Online Store That Truly Represents Your Brand",
    description: "Build your store your way. Control your design, products, and customers—without limits.",
    features: [
      "Custom Domain Integration",
      "Modern and Responsive Themes",
      "Unlimited Languages Support",
      "Advanced Inventory Management",
      "Mobile-Optimized Stores and Admin Panel",
    ],
    bestFor: "Online retailers, D2C brands, wholesalers, and service businesses",
    color: "primary",
  },
  {
    id: "erp",
    icon: Briefcase,
    title: "CaartZee ERP",
    tagline: "A Smarter Way to Manage Your Business Operations",
    description: "Run your operations with clarity and confidence. Get real-time insights and centralized control—all in one ERP.",
    features: [
      "Finance and Accounting Management",
      "Employee Management System",
      "Inventory and Stock Control",
      "HR and Payroll Management",
      "Lead Management System",
    ],
    bestFor: "Enterprises, service companies, and manufacturing businesses",
    color: "teal",
  },
  {
    id: "snap",
    icon: MessageCircle,
    title: "CaartZee Snap",
    tagline: "Sell Faster on WhatsApp Where Your Customers Already Chat",
    description: "Sell where your customers already chat. Engage instantly and convert faster with WhatsApp selling.",
    features: [
      "WhatsApp Product Catalog",
      "Direct Order Placement",
      "Faster Customer Communication",
      "Simple and Quick Checkout",
    ],
    bestFor: "Local businesses, small sellers, home businesses, and resellers",
    color: "emerald",
  },
  {
    id: "sales-navigation",
    icon: BarChart2,
    title: "CaartZee Sales Navigation",
    tagline: "Manage Every Sales Channel from One Place",
    description: "Expand your reach across every sales channel. Sell on multiple platforms and control everything from a single dashboard.",
    features: [
      "Centralized Sales Dashboard",
      "Product Upload to Amazon, Flipkart, Shopify",
      "Direct CaartZee Store Integration",
      "Sales Analytics and Insights",
    ],
    bestFor: "Marketplace sellers and Omni-channel businesses",
    color: "amber",
  },
  {
    id: "prime",
    icon: Rocket,
    title: "CaartZee Prime",
    tagline: "Turn Your Brand into a Growth Machine",
    description: "Reach the right audience, grow your online presence, and generate quality leads using AI-powered digital marketing and social media agents.",
    features: [
      "SEO and Paid Ads Management",
      "Social Media Marketing",
      "Lead Generation Campaigns",
      "Brand Growth Strategy",
      "Poster and Carousel Design Creation",
    ],
    bestFor: "Growing brands, startups, and businesses seeking digital presence",
    color: "accent",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" },
  teal: { bg: "bg-secondary", text: "text-secondary-foreground", border: "border-primary/20" },
  emerald: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" },
  amber: { bg: "bg-accent/10", text: "text-accent-foreground", border: "border-accent/20" },
  accent: { bg: "bg-accent/10", text: "text-accent-foreground", border: "border-accent/20" },
};

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-section py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              Our Products
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Powerful Tools for <span className="text-gradient">Modern Business</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              From e-commerce to ERP, WhatsApp selling to digital marketing—we've got everything your business needs to thrive.
            </p>
          </div>
        </section>

        {/* Products List */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16 lg:space-y-24">
              {products.map((product, index) => {
                const colors = colorClasses[product.color] || colorClasses.primary;
                const isReversed = index % 2 === 1;
                
                return (
                  <div 
                    key={product.id}
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                  >
                    <div className={isReversed ? 'lg:order-2' : ''}>
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bg} ${colors.text} text-sm font-medium mb-4`}>
                        <product.icon className="w-4 h-4" />
                        {product.title}
                      </div>
                      
                      <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        {product.tagline}
                      </h2>
                      
                      <p className="text-lg text-muted-foreground mb-6">
                        {product.description}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className={`w-5 h-5 mt-0.5 ${colors.text}`} />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <p className="text-sm text-muted-foreground mb-6">
                        <strong>Best For:</strong> {product.bestFor}
                      </p>
                      
                      <Link to="/signup">
                        <Button className="group">
                          Get Started
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                    
                    <div className={`relative ${isReversed ? 'lg:order-1' : ''}`}>
                      <div className={`aspect-square rounded-3xl ${colors.bg} ${colors.border} border p-8 lg:p-12 flex items-center justify-center`}>
                        <product.icon className={`w-32 h-32 lg:w-48 lg:h-48 ${colors.text} opacity-80`} />
                      </div>
                      {/* Decorative elements */}
                      <div className={`absolute -top-4 -right-4 w-24 h-24 ${colors.bg} rounded-full blur-2xl`} />
                      <div className={`absolute -bottom-4 -left-4 w-32 h-32 ${colors.bg} rounded-full blur-3xl`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of businesses already growing with CaartZee.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Start for ₹1
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
