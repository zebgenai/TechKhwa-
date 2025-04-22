
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            About Techkhwa
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Team Collaboration"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300">
                At Techkhwa, we are dedicated to building a dynamic tech ecosystem that nurtures talent and drives innovation. Our mission is to empower individuals with the knowledge and skills needed to excel in the digital age.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Through our comprehensive courses and mentorship programs, we help students, professionals, and entrepreneurs navigate the rapidly evolving tech landscape and achieve their goals.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
