
import InteractiveNavbar from "@/components/InteractiveNavbar";
import ModernHero from "@/components/ModernHero";
import EnhancedFeatures from "@/components/EnhancedFeatures";
import ParallaxSection from "@/components/ParallaxSection";
import OurVisionSection from "@/components/OurVisionSection";
import OurMissionSection from "@/components/OurMissionSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Opportunities from "@/components/Opportunities";
import StudentsEntrepreneurship from "@/components/StudentsEntrepreneurship";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import LaunchingCeremonySection from "@/components/LaunchingCeremonySection";
import CourseRegistrationForm from "@/components/CourseRegistrationForm";
import ModernFooter from "@/components/ModernFooter";

const ModernIndex = () => {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <InteractiveNavbar />
      <ModernHero />
      
      <div>
        <OurVisionSection />
      </div>
      
      <div>
        <OurMissionSection />
      </div>
      
      <div>
        <CoreValuesSection />
      </div>
      
      <div>
        <EnhancedFeatures />
      </div>
      
      <ParallaxSection />
      
      <div>
        <WhyChooseUs />
      </div>
      
      <div>
        <Opportunities />
      </div>
      
      <div>
        <StudentsEntrepreneurship />
      </div>
      
      <div>
        <Testimonials />
      </div>
      
      <div>
        <TeamSection />
      </div>
      
      <div>
        <LaunchingCeremonySection />
      </div>
      
      <div>
        <CourseRegistrationForm />
      </div>
      
      <ModernFooter />
    </div>
  );
};

export default ModernIndex;
