
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
      className="py-24 bg-gradient-to-b from-slate-900 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-slate-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
      
      {/* Animated light particles */}
      {Array.from({ length: 50 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Meet Our Developer
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The visionary leader behind Techkhwa's innovative approach to technology education
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto flex justify-center">
          {/* Enhanced Profile Card with better lighting */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden max-w-md w-full border border-gray-700/50 backdrop-blur-sm"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(99, 102, 241, 0.15)"
            }}
          >
            {/* Enhanced Profile Image Section */}
            <div className="relative h-80 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-blue-900/40">
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10" />
              
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
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-blue-400/30">
                  Developer
                </div>
              </motion.div>
              
              <div className="flex items-center justify-center h-full p-8">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glowing border around image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-2xl blur-sm opacity-60" />
                  <img 
                    src="/lovable-uploads/8bff5b03-0f3f-4c0c-b2fe-11969f6b1f05.png"
                    alt="Developer of Techkhwa"
                    className="relative w-48 h-48 object-cover rounded-2xl shadow-lg border-2 border-gray-600/50"
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Enhanced Profile Info Section */}
            <div className="p-8 text-center bg-gradient-to-b from-gray-800/50 to-gray-900/50">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-white mb-2"
              >
                Atif Zeb
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6 font-medium"
              >
                Developer
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
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white border-gray-600/50 transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Expertise Section */}
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
              className="p-6 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-700/50 backdrop-blur-sm"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 mb-4 w-fit shadow-lg">
                <Bot className="h-6 w-6 text-blue-200" />
              </div>
              <h4 className="font-semibold text-blue-300 mb-2">AI & ML</h4>
              <p className="text-sm text-gray-300">
                Advanced machine learning algorithms and artificial intelligence solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-gradient-to-br from-red-900/40 to-orange-900/40 rounded-xl border border-red-700/50 backdrop-blur-sm"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px -10px rgba(239, 68, 68, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 mb-4 w-fit shadow-lg">
                <Shield className="h-6 w-6 text-red-200" />
              </div>
              <h4 className="font-semibold text-red-300 mb-2">Cyber Security</h4>
              <p className="text-sm text-gray-300">
                Comprehensive security protocols and threat protection systems.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-xl border border-green-700/50 backdrop-blur-sm"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-green-600 to-green-700 mb-4 w-fit shadow-lg">
                <Network className="h-6 w-6 text-green-200" />
              </div>
              <h4 className="font-semibold text-green-300 mb-2">Networking</h4>
              <p className="text-sm text-gray-300">
                Network infrastructure design and optimization solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-700/50 backdrop-blur-sm"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px -10px rgba(147, 51, 234, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 mb-4 w-fit shadow-lg">
                <Code className="h-6 w-6 text-purple-200" />
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
