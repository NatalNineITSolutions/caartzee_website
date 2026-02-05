import ProductCard from "./ProductCard";
import { Store, Briefcase, MessageCircle, BarChart2, Rocket } from "lucide-react";

const products = [
  {
    icon: Store,
    title: "CaartZee E-commerce",
    tagline: "Build an Online Store That Truly Represents Your Brand",
    description: "Build your store your way. Control your design, products, and customers—without limits.",
    features: [
      "Custom Domain Integration",
      "Modern and Responsive Themes",
      "Unlimited Languages Support",
      "Advanced Inventory Management",
      "Mobile-Optimized Stores",
    ],
    bestFor: "D2C brands, wholesalers, retailers",
    color: "primary" as const,
  },
  {
    icon: Briefcase,
    title: "CaartZee ERP",
    tagline: "A Smarter Way to Manage Your Business Operations",
    description: "Run your operations with clarity and confidence. Get real-time insights and centralized control.",
    features: [
      "Finance and Accounting Management",
      "Employee Management System",
      "Inventory and Stock Control",
      "HR and Payroll Management",
      "Lead Management System",
    ],
    bestFor: "Enterprises, manufacturing",
    color: "teal" as const,
  },
  {
    icon: MessageCircle,
    title: "CaartZee Snap",
    tagline: "Sell Faster on WhatsApp",
    description: "Sell where your customers already chat. Engage instantly and convert faster with WhatsApp selling.",
    features: [
      "WhatsApp Product Catalog",
      "Direct Order Placement",
      "Faster Customer Communication",
      "Simple and Quick Checkout",
    ],
    bestFor: "Local businesses, resellers",
    color: "emerald" as const,
  },
  {
    icon: BarChart2,
    title: "CaartZee Sales Navigation",
    tagline: "Manage Every Sales Channel from One Place",
    description: "Expand your reach across every sales channel. Sell on multiple platforms and control everything.",
    features: [
      "Centralized Sales Dashboard",
      "Upload to Amazon, Flipkart, Shopify",
      "Direct CaartZee Store Integration",
      "Sales Analytics and Insights",
    ],
    bestFor: "Marketplace & Omni-channel sellers",
    color: "amber" as const,
  },
  {
    icon: Rocket,
    title: "CaartZee Prime",
    tagline: "Turn Your Brand into a Growth Machine",
    description: "Reach the right audience, grow your online presence, and generate quality leads using AI-powered marketing.",
    features: [
      "SEO and Paid Ads Management",
      "Social Media Marketing",
      "Lead Generation Campaigns",
      "Brand Growth Strategy",
      "Poster and Carousel Design",
    ],
    bestFor: "Growing brands & startups",
    color: "accent" as const,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Powering Modern Businesses with{" "}
            <span className="text-primary">Smart Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built by experts. Designed for real businesses. Leveraging 10+ years of domain expertise.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
