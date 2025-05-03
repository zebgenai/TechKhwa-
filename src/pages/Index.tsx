
import Navbar from "@/components/Navbar";
import EnhancedHero from "@/components/EnhancedHero";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CourseRegistrationForm from "@/components/CourseRegistrationForm";
import TeamSection from "@/components/TeamSection";
import Opportunities from "@/components/Opportunities";
import StudentsEntrepreneurship from "@/components/StudentsEntrepreneurship";
import OurMissionSection from "@/components/OurMissionSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-blue-50 to-purple-50 dark:bg-gradient-to-tr dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      <EnhancedHero />
      
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, type: "spring", bounce: 0.17 }}
        viewport={{ once: true, amount: 0.33 }}
      >
        <Features />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, type: "spring", bounce: 0.17 }}
        viewport={{ once: true, amount: 0.33 }}
      >
        <OurMissionSection />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.88, type: "spring", bounce: 0.15 }}
        viewport={{ once: true, amount: 0.28 }}
      >
        <WhyChooseUs />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.88, type: "spring", bounce: 0.15 }}
        viewport={{ once: true, amount: 0.28 }}
      >
        <Opportunities />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.88, type: "spring", bounce: 0.15 }}
        viewport={{ once: true, amount: 0.28 }}
      >
        <StudentsEntrepreneurship />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.12 }}
        viewport={{ once: true, amount: 0.23 }}
      >
        <Testimonials />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.12 }}
        viewport={{ once: true, amount: 0.23 }}
      >
        <TeamSection />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.96, type: "spring", bounce: 0.15 }}
        viewport={{ once: true, amount: 0.15 }}
      >
        <CourseRegistrationForm />
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Index;
