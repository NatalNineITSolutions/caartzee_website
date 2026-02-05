import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import ProductsSection from "@/components/ProductsSection";
import MissionVision from "@/components/MissionVision";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <ProductsSection />
        <MissionVision />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
