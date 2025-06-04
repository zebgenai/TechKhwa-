
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
              Meet Our Developer
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The visionary leader behind Techkhwa's innovative approach to technology education
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto flex justify-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md w-full"
          >
            {/* Profile Image Section */}
            <div className="relative h-80 bg-gradient-to-br from-blue-50 to-purple-50">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
                className="absolute top-4 right-4"
              >
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Developer
                </div>
              </motion.div>
              
              <div className="flex items-center justify-center h-full p-8">
                <motion.img 
                  src="/lovable-uploads/8bff5b03-0f3f-4c0c-b2fe-11969f6b1f05.png"
                  alt="Developer of Techkhwa"
                  className="w-48 h-48 object-cover rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
            
            {/* Profile Info Section */}
            <div className="p-8 text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-gray-900 mb-2"
              >
                Atif Zeb
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-lg text-gray-600 mb-6"
              >
                Developer & CEO
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex gap-3 justify-center mb-6"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white border-blue-500 transition-all duration-300"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white border-gray-800 transition-all duration-300"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Expertise Section - Below the card */}
        <motion.div 
          className="mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Areas of Expertise</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Passionate about cutting-edge technologies, specializing in AI, Machine Learning, 
              Cybersecurity, Networking, and AI Chatbot development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="p-6 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-800"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="p-3 rounded-lg bg-blue-800 mb-4 w-fit">
                <Bot className="h-6 w-6 text-blue-400" />
              </div>
              <h4 className="font-semibold text-blue-300 mb-2">AI & ML</h4>
              <p className="text-sm text-gray-300">
                Advanced machine learning algorithms and artificial intelligence solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-xl border border-red-800"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 15px 30px -10px rgba(239, 68, 68, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="p-3 rounded-lg bg-red-800 mb-4 w-fit">
                <Shield className="h-6 w-6 text-red-400" />
              </div>
              <h4 className="font-semibold text-red-300 mb-2">Cyber Security</h4>
              <p className="text-sm text-gray-300">
                Comprehensive security protocols and threat protection systems.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-800"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 15px 30px -10px rgba(34, 197, 94, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="p-3 rounded-lg bg-green-800 mb-4 w-fit">
                <Network className="h-6 w-6 text-green-400" />
              </div>
              <h4 className="font-semibold text-green-300 mb-2">Networking</h4>
              <p className="text-sm text-gray-300">
                Network infrastructure design and optimization solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-800"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 15px 30px -10px rgba(147, 51, 234, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="p-3 rounded-lg bg-purple-800 mb-4 w-fit">
                <Code className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="font-semibold text-purple-300 mb-2">AI Chatbots</h4>
              <p className="text-sm text-gray-300">
                Intelligent conversational AI and automated customer service solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DeveloperProfile;
