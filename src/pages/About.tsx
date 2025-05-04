
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import MissionSection from "@/components/about/MissionSection";
import AtifZebProfile from "@/components/about/AtifZebProfile";
import PhilosophySection from "@/components/about/PhilosophySection";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            About Techkhwa
          </h1>
          
          <MissionSection />
          <AtifZebProfile />
          <PhilosophySection />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
