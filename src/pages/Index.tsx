
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
import { motion } from "framer-motion";
import { useEffect } from "react";

const Index = () => {
  // Enhanced smooth scrolling
  useEffect(() => {
    const smoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };
    smoothScroll();

    // Custom smooth scrolling with momentum
    let isScrolling = false;
    const handleScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          isScrolling = false;
        });
        isScrolling = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
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
      
      {/* Enhanced Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <ModernHero />
      </motion.div>
      
      {/* Animated Sections with Enhanced Stagger Effect */}
      <motion.div
        variants={containerVariants}
        className="space-y-0"
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <OurVisionSection />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <OurMissionSection />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <CoreValuesSection />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <EnhancedFeatures />
        </motion.div>
        
        {/* Enhanced Parallax Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ParallaxSection />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <WhyChooseUs />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Opportunities />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <StudentsEntrepreneurship />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Testimonials />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <TeamSection />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <LaunchingCeremonySection />
        </motion.div>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <CourseRegistrationForm />
        </motion.div>
      </motion.div>
      
      {/* Enhanced Footer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default Index;
