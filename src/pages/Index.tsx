
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
import { useEffect } from "react";

const Index = () => {
  const shouldReduceMotion = useReducedMotion();

  // Optimized smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    if (!shouldReduceMotion) {
      // Performance optimization for animations
      const optimizeAnimations = () => {
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
      };
      optimizeAnimations();
    }
  }, [shouldReduceMotion]);

  const sectionVariants = shouldReduceMotion ? 
    {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } }
    } :
    {
      hidden: { 
        opacity: 0, 
        y: 30
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 overflow-x-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <InteractiveNavbar />
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 1 }}
      >
        <ModernHero />
      </motion.div>
      
      {/* Optimized Sections */}
      <motion.div
        variants={containerVariants}
        className="space-y-0"
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <OurVisionSection />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <OurMissionSection />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <CoreValuesSection />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <EnhancedFeatures />
        </motion.div>
        
        {/* Technology Education Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <ParallaxSection />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <WhyChooseUs />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Opportunities />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <StudentsEntrepreneurship />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Testimonials />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <TeamSection />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <LaunchingCeremonySection />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <CourseRegistrationForm />
        </motion.div>
      </motion.div>
      
      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 0.8 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default Index;
