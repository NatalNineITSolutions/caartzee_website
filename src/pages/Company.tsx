import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Users, Award, Globe, Heart, ArrowRight, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5000+", label: "Businesses Served" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Customer Support" },
];

const values = [
  {
    icon: Users,
    title: "Customer First",
    description: "Every decision we make starts with our customers' needs and success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every product, feature, and interaction.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Building solutions that work for businesses anywhere in the world.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about helping businesses grow and succeed.",
  },
];

const team = [
  { name: "Leadership Team", count: "15+" },
  { name: "Engineering", count: "50+" },
  { name: "Customer Success", count: "30+" },
  { name: "Design & Product", count: "20+" },
];

const Company = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-section py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              About CaartZee
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Powering Modern Businesses with{" "}
              <span className="text-gradient">Smart Technology</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Built by experts. Designed for real businesses. Leveraging 10+ years of domain expertise to transform complex business processes into simple, scalable solutions.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission Card */}
              <div className="group relative p-8 lg:p-10 rounded-3xl hero-section overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                    Our Mission
                  </h3>
                  
                  <p className="text-lg text-white/80 leading-relaxed">
                    To empower businesses with scalable digital solutions that improve efficiency, increase sales, and support long-term growth.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border border-accent/20 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Our Vision
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become a globally trusted business management software provider for startups and enterprises alike.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-6 rounded-2xl bg-card border border-border/50 shadow-soft">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
                Our Values
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What Drives Us <span className="text-primary">Forward</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="group p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
                Our Team
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Built by <span className="text-primary">Experts</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our team brings together decades of experience in e-commerce, ERP, and digital solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((dept) => (
                <div key={dept.name} className="text-center p-8 rounded-2xl bg-card border border-border/50">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {dept.count}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {dept.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Join Our Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Be part of the thousands of businesses transforming with CaartZee.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline">
                  Explore Products
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

export default Company;
