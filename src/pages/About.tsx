
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Shield, Bot, Lock, Linkedin, ExternalLink, Github, Zap, Code, GanttChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

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
          
          {/* Enhanced Atif Zeb Section with advanced animations but no blue bubbles */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center mb-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 inline-block pr-4">
                  Meet Atif Zeb
                </h2>
              </motion.div>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 flex-grow rounded-full"
              />
            </div>
            
            <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-xl overflow-hidden transform transition-all duration-500 hover:shadow-blue-200 dark:hover:shadow-blue-900/30">
              <div className="md:flex relative">
                {/* Profile Image Section with floating animation but no bubbles */}
                <motion.div 
                  className="md:w-2/5 relative overflow-hidden"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      boxShadow: [
                        "0 10px 25px rgba(0,0,0,0.1)",
                        "0 20px 35px rgba(0,0,0,0.2)",
                        "0 10px 25px rgba(0,0,0,0.1)"
                      ]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut"
                    }}
                    className="h-full"
                  >
                    <img 
                      src="/lovable-uploads/e310629b-8f40-435b-8a37-51026f8e6555.png"
                      alt="Atif Zeb"
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </motion.div>
                
                {/* Content Section with staggered animations */}
                <div className="p-8 md:w-3/5">
                  <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="flex flex-col"
                    >
                      <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                        Atif Zeb
                      </h3>
                      <motion.span 
                        className="text-gray-600 dark:text-gray-300 text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        Technology Innovator
                      </motion.span>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="flex gap-3"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-500 transition-all duration-300"
                        asChild
                      >
                        <a
                          href="https://pk.linkedin.com/in/atif-zeb-76b866290"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-4 w-4" />
                          Connect
                        </a>
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 hover:text-white border-purple-500 text-purple-600 dark:text-purple-400 dark:border-purple-500 transition-all duration-300"
                        asChild
                      >
                        <a
                          href="https://github.com/atifzeb"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                  
                  <motion.p 
                    className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    A visionary technology expert specializing in Artificial Intelligence, Chatbot Development, and 
                    Cybersecurity. With a passion for innovation and a commitment to excellence, Atif is dedicated to 
                    pushing the boundaries of what's possible in technology and empowering others with technical skills.
                  </motion.p>
                  
                  {/* Expertise Cards with Hover Effects */}
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                  >
                    <motion.div 
                      className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border border-blue-200 dark:border-blue-800"
                      whileHover={{ 
                        y: -10, 
                        boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.5)",
                        backgroundColor: "rgba(59, 130, 246, 0.1)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <motion.div 
                        className="mb-3 flex items-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-800 mr-3">
                          <Bot className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300">AI & ML</h4>
                      </motion.div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Developing cutting-edge AI solutions that transform businesses and enhance user experiences.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg border border-purple-200 dark:border-purple-800"
                      whileHover={{ 
                        y: -10, 
                        boxShadow: "0 15px 30px -10px rgba(124, 58, 237, 0.5)",
                        backgroundColor: "rgba(124, 58, 237, 0.1)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <motion.div 
                        className="mb-3 flex items-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-800 mr-3">
                          <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300">Chatbots</h4>
                      </motion.div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Creating intelligent conversational interfaces that provide personalized assistance.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-indigo-900/30 rounded-lg border border-green-200 dark:border-green-800"
                      whileHover={{ 
                        y: -10, 
                        boxShadow: "0 15px 30px -10px rgba(16, 185, 129, 0.5)",
                        backgroundColor: "rgba(16, 185, 129, 0.1)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <motion.div 
                        className="mb-3 flex items-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="p-2 rounded-full bg-green-100 dark:bg-green-800 mr-3">
                          <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300">CyberSec</h4>
                      </motion.div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Implementing robust security protocols to protect digital assets and ensure data privacy.
                      </p>
                    </motion.div>
                  </motion.div>
                  
                  {/* Additional Skills Section */}
                  <motion.div 
                    className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                  >
                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Additional Expertise</h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: "Cloud Computing", icon: <GanttChart className="h-3.5 w-3.5" /> },
                        { name: "Data Analytics", icon: <Zap className="h-3.5 w-3.5" /> },
                        { name: "Blockchain", icon: <Lock className="h-3.5 w-3.5" /> },
                        { name: "AR/VR", icon: <ExternalLink className="h-3.5 w-3.5" /> }
                      ].map((skill, index) => (
                        <motion.span
                          key={skill.name}
                          className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 flex items-center gap-2"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + (index * 0.1), duration: 0.4 }}
                          whileHover={{ 
                            scale: 1.05, 
                            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                            backgroundColor: "rgba(59, 130, 246, 0.1)"
                          }}
                        >
                          {skill.icon}
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
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
      <Footer />
    </div>
  );
};

export default About;
