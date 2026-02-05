import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, FileText, Video, HelpCircle, MessageCircle, 
  Download, ArrowRight, Sparkles, ExternalLink 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const resources = [
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides and API references to help you get the most out of CaartZee.",
    link: "#",
    cta: "Read Docs",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides for setting up and using all CaartZee features.",
    link: "#",
    cta: "Watch Videos",
  },
  {
    icon: FileText,
    title: "Blog",
    description: "Latest insights, tips, and best practices for growing your online business.",
    link: "#",
    cta: "Read Blog",
  },
  {
    icon: HelpCircle,
    title: "Help Center",
    description: "Find answers to frequently asked questions and troubleshooting guides.",
    link: "#",
    cta: "Get Help",
  },
  {
    icon: MessageCircle,
    title: "Community",
    description: "Join our community of business owners to share experiences and learn together.",
    link: "#",
    cta: "Join Community",
  },
  {
    icon: Download,
    title: "Downloads",
    description: "Download templates, guides, and resources to accelerate your business growth.",
    link: "#",
    cta: "Browse Downloads",
  },
];

const guides = [
  {
    title: "Getting Started with CaartZee E-commerce",
    description: "Learn how to set up your online store in under 30 minutes.",
    category: "Beginner",
    readTime: "10 min read",
  },
  {
    title: "Mastering Inventory Management",
    description: "Advanced techniques for managing stock across multiple channels.",
    category: "Advanced",
    readTime: "15 min read",
  },
  {
    title: "WhatsApp Selling Best Practices",
    description: "Convert more customers with effective WhatsApp communication.",
    category: "Marketing",
    readTime: "8 min read",
  },
  {
    title: "ERP Implementation Guide",
    description: "Step-by-step guide to implementing CaartZee ERP for your business.",
    category: "Enterprise",
    readTime: "20 min read",
  },
];

const faqs = [
  {
    question: "How do I get started with CaartZee?",
    answer: "Sign up for our ₹1 trial, and you'll have access to all features for 3 months. Our onboarding wizard will guide you through the setup process.",
  },
  {
    question: "Can I migrate from another platform?",
    answer: "Yes! We offer free migration assistance for all new customers. Our team will help transfer your products, customers, and order history.",
  },
  {
    question: "What payment methods are supported?",
    answer: "CaartZee supports all major payment gateways including Razorpay, PayU, Stripe, and more. We also support UPI and bank transfers.",
  },
  {
    question: "Is there a mobile app?",
    answer: "Yes, CaartZee has mobile apps for both iOS and Android, allowing you to manage your business on the go.",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-section py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              Resources
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Learn, Grow, and <span className="text-gradient">Succeed</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Everything you need to get the most out of CaartZee. Guides, tutorials, documentation, and community support.
            </p>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
                Explore Resources
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Everything You Need to <span className="text-primary">Succeed</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <div key={resource.title} className="group p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <resource.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  <a href={resource.link} className="inline-flex items-center text-primary font-medium hover:underline">
                    {resource.cta}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
                Featured Guides
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Popular <span className="text-primary">Tutorials</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guides.map((guide) => (
                <div key={guide.title} className="group flex gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                        {guide.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {guide.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
                FAQs
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Contact Support
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Link to="/signup">
                <Button size="lg" variant="outline">
                  Get Started Free
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

export default Resources;
