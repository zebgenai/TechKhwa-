
import ModernHero from "@/components/ModernHero";
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
import Footer from "@/components/Footer";
import InteractiveNavbar from "@/components/InteractiveNavbar";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo } from "react";

const Index = () => {
  const shouldReduceMotion = useReducedMotion();

  // Optimized smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Performance optimization
    const optimizeAnimations = () => {
      if (!shouldReduceMotion) {
        document.documentElement.style.setProperty('--animation-duration', '0.4s');
      }
    };
    optimizeAnimations();

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [shouldReduceMotion]);

  // Memoized animation variants for better performance
  const sectionVariants = useMemo(() => shouldReduceMotion ? 
    {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } }
    } :
    {
      hidden: { 
        opacity: 0, 
        y: 20
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }
    }, [shouldReduceMotion]);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05
      }
    }
  }), [shouldReduceMotion]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 overflow-x-hidden">
      <InteractiveNavbar />
      
      {/* Hero Section - No animation wrapper for better performance */}
      <ModernHero />
      
      {/* Main Content Sections with optimized animations */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-0"
      >
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
        >
          <OurVisionSection />
        </motion.section>
        
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
        >
          <OurMissionSection />
        </motion.section>
        
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
        >
          <CoreValuesSection />
        </motion.section>
        
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
        >
          <EnhancedFeatures />
        </motion.section>
        
        {/* Technology Education Section with better positioning */}
        <section className="relative">
          <ParallaxSection />
        </section>
        
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
        >
          <WhyChooseUs />
        </motion.section>
        
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
        >
          <Opportunities />
        </motion.section>
        
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
        >
          <StudentsEntrepreneurship />
        </motion.section>
        
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
        >
          <Testimonials />
        </motion.section>
        
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
        >
          <TeamSection />
        </motion.section>
        
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
        >
          <LaunchingCeremonySection />
        </motion.section>
        
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
        >
          <CourseRegistrationForm />
        </motion.section>
      </motion.div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
