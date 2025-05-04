
import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-md"
    >
      <h3 className="text-2xl font-bold mb-4">Professional Philosophy</h3>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-300">
        "I believe in harnessing the power of technology to solve real-world problems. My goal is to make AI and cybersecurity accessible, understandable, and beneficial for businesses and individuals alike. Innovation is not just about creating something new—it's about making a positive impact."
      </blockquote>
      <p className="mt-4 text-right font-semibold">- Atif Zeb</p>
    </motion.div>
  );
};

export default PhilosophySection;
