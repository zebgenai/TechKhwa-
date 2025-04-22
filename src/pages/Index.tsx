
import Navbar from "@/components/Navbar";
import EnhancedHero from "@/components/EnhancedHero";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <EnhancedHero />
      <Features />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Index;
