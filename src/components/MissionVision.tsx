import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="group relative p-8 lg:p-10 rounded-3xl hero-section overflow-hidden">
            {/* Background Glow */}
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
            {/* Background Glow */}
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
          {[
            { value: "10+", label: "Years Experience" },
            { value: "5000+", label: "Businesses Served" },
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "24/7", label: "Customer Support" },
          ].map((stat) => (
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
  );
};

export default MissionVision;
