
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Shield, Bot, Lock, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Meet Atif Zeb
            </h2>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <motion.img 
                    src="/lovable-uploads/8a9a6737-f1a4-4b2b-9642-bc1f535a3898.png"
                    alt="Atif Zeb"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Atif Zeb</h3>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:text-blue-400 dark:border-blue-500"
                        asChild
                      >
                        <a
                          href="https://pk.linkedin.com/in/atif-zeb-76b866290"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-4 w-4" />
                          Connect on LinkedIn
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A visionary technology expert specializing in Artificial Intelligence, Chatbot Development, and Cybersecurity. With a passion for innovation and a commitment to excellence, Atif is dedicated to pushing the boundaries of what's possible in technology.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <motion.div 
                      className="p-4 bg-blue-50 dark:bg-gray-700 rounded-lg"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                    >
                      <div className="flex items-center mb-3">
                        <Bot className="h-6 w-6 text-blue-600 mr-2" />
                        <h4 className="font-semibold">AI & Machine Learning</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Developing cutting-edge AI solutions that transform businesses and enhance user experiences.
                      </p>
                    </motion.div>
                    <motion.div 
                      className="p-4 bg-purple-50 dark:bg-gray-700 rounded-lg"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)" }}
                    >
                      <div className="flex items-center mb-3">
                        <Bot className="h-6 w-6 text-purple-600 mr-2" />
                        <h4 className="font-semibold">Chatbot Development</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Creating intelligent conversational interfaces that provide personalized assistance and streamline communications.
                      </p>
                    </motion.div>
                    <motion.div 
                      className="p-4 bg-green-50 dark:bg-gray-700 rounded-lg"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.5)" }}
                    >
                      <div className="flex items-center mb-3">
                        <Shield className="h-6 w-6 text-green-600 mr-2" />
                        <h4 className="font-semibold">Cybersecurity</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Implementing robust security protocols to protect digital assets and ensure data privacy in an increasingly connected world.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
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
        </motion.div>
      </div>
    </div>
  );
};

export default About;
