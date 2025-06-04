
import { ReactNode } from "react";
import { MainContent } from "./MainContent";
import { AnimatedSection } from "./AnimatedSection";
import OurVisionSection from "@/components/OurVisionSection";
import OurMissionSection from "@/components/OurMissionSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import EnhancedFeatures from "@/components/EnhancedFeatures";
import ParallaxSection from "@/components/ParallaxSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Opportunities from "@/components/Opportunities";
import StudentsEntrepreneurship from "@/components/StudentsEntrepreneurship";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import LaunchingCeremonySection from "@/components/LaunchingCeremonySection";
import CourseRegistrationForm from "@/components/CourseRegistrationForm";

export const SectionsContainer = () => {
  return (
    <MainContent>
      <AnimatedSection>
        <OurVisionSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <OurMissionSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <CoreValuesSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <EnhancedFeatures />
      </AnimatedSection>
      
      <section className="relative">
        <ParallaxSection />
      </section>
      
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>
      
      <AnimatedSection>
        <Opportunities />
      </AnimatedSection>
      
      <AnimatedSection>
        <StudentsEntrepreneurship />
      </AnimatedSection>
      
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      
      <AnimatedSection>
        <TeamSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <LaunchingCeremonySection />
      </AnimatedSection>
      
      <AnimatedSection>
        <CourseRegistrationForm />
      </AnimatedSection>
    </MainContent>
  );
};
