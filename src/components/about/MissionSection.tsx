
import { motion } from "framer-motion";

const MissionSection = () => {
  return (
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
  );
};

export default MissionSection;
