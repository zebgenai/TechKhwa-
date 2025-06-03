
import InteractiveNavbar from "@/components/InteractiveNavbar";
import ModernHero from "@/components/ModernHero";
import EnhancedFeatures from "@/components/EnhancedFeatures";
import ParallaxSection from "@/components/ParallaxSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Opportunities from "@/components/Opportunities";
import StudentsEntrepreneurship from "@/components/StudentsEntrepreneurship";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import CourseRegistrationForm from "@/components/CourseRegistrationForm";
import ModernFooter from "@/components/ModernFooter";
import { motion } from "framer-motion";

const ModernIndex = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <InteractiveNavbar />
      <ModernHero />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <EnhancedFeatures />
      </motion.div>
      
      <ParallaxSection />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <WhyChooseUs />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Opportunities />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <StudentsEntrepreneurship />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Testimonials />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <TeamSection />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <CourseRegistrationForm />
      </motion.div>
      
      <ModernFooter />
    </div>
  );
};

export default ModernIndex;
