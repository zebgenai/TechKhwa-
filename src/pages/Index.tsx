
import ModernHero from "@/components/ModernHero";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionsContainer } from "@/components/layout/SectionsContainer";
import { AnimationProvider } from "@/providers/AnimationProvider";
import { useEffect } from "react";

const Index = () => {
  // Optimized smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Performance optimization
    const optimizeAnimations = () => {
      document.documentElement.style.setProperty('--animation-duration', '0.4s');
    };
    optimizeAnimations();

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <AnimationProvider>
      <PageLayout>
        <ModernHero />
        <SectionsContainer />
      </PageLayout>
    </AnimationProvider>
  );
};

export default Index;
