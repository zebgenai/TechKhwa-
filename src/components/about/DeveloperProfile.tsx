
import { motion } from "framer-motion";
import { Shield, Bot, Code, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const DeveloperProfile = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-800 to-slate-900" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Founder of Techkhwa
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet our talented founder who brings technical excellence to every project
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl border border-slate-600 overflow-hidden">
            <div className="lg:flex">
              {/* Image Section */}
              <motion.div 
                className="lg:w-1/3 relative overflow-hidden"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                  }}
                  className="h-full"
                >
                  <img 
                    src="/lovable-uploads/a2269442-850d-4272-906e-fd15df338108.png"
                    alt="Founder of Techkhwa"
                    className="h-full w-full object-cover min-h-[400px] max-h-[500px]"
                  />
                </motion.div>
              </motion.div>
              
              {/* Content Section */}
              <div className="p-8 lg:w-2/3">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col"
                  >
                    <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                      Lead Developer
                    </h3>
                    <motion.span 
                      className="text-gray-300 text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      Full Stack & AI Specialist
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
                      className="flex items-center gap-2 bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white border-blue-500 text-blue-400 transition-all duration-300"
                    >
                      <Linkedin className="h-4 w-4" />
                      Connect
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 hover:text-white border-purple-500 text-purple-400 transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Button>
                  </motion.div>
                </div>
                
                <motion.p 
                  className="text-gray-300 mb-8 leading-relaxed text-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  A passionate founder with expertise in cutting-edge technologies, specializing in 
                  Artificial Intelligence, Machine Learning, Cybersecurity, Networking, and AI Chatbot development. 
                  Dedicated to creating innovative solutions that push the boundaries of technology.
                </motion.p>
                
                {/* Expertise Cards */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-800"
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
                      <div className="p-2 rounded-full bg-blue-800 mr-3">
                        <Bot className="h-5 w-5 text-blue-400" />
                      </div>
                      <h4 className="font-semibold text-blue-300">AI & ML</h4>
                    </motion.div>
                    <p className="text-sm text-gray-300">
                      Advanced machine learning algorithms and artificial intelligence solutions.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-lg border border-red-800"
                    whileHover={{ 
                      y: -10, 
                      boxShadow: "0 15px 30px -10px rgba(239, 68, 68, 0.5)",
                      backgroundColor: "rgba(239, 68, 68, 0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div 
                      className="mb-3 flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="p-2 rounded-full bg-red-800 mr-3">
                        <Shield className="h-5 w-5 text-red-400" />
                      </div>
                      <h4 className="font-semibold text-red-300">Cyber Security</h4>
                    </motion.div>
                    <p className="text-sm text-gray-300">
                      Comprehensive security protocols and threat protection systems.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-lg border border-green-800"
                    whileHover={{ 
                      y: -10, 
                      boxShadow: "0 15px 30px -10px rgba(34, 197, 94, 0.5)",
                      backgroundColor: "rgba(34, 197, 94, 0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div 
                      className="mb-3 flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="p-2 rounded-full bg-green-800 mr-3">
                        <Network className="h-5 w-5 text-green-400" />
                      </div>
                      <h4 className="font-semibold text-green-300">Networking</h4>
                    </motion.div>
                    <p className="text-sm text-gray-300">
                      Network infrastructure design and optimization solutions.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-800"
                    whileHover={{ 
                      y: -10, 
                      boxShadow: "0 15px 30px -10px rgba(147, 51, 234, 0.5)",
                      backgroundColor: "rgba(147, 51, 234, 0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div 
                      className="mb-3 flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="p-2 rounded-full bg-purple-800 mr-3">
                        <Code className="h-5 w-5 text-purple-400" />
                      </div>
                      <h4 className="font-semibold text-purple-300">AI Chatbots</h4>
                    </motion.div>
                    <p className="text-sm text-gray-300">
                      Intelligent conversational AI and automated customer service solutions.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DeveloperProfile;
