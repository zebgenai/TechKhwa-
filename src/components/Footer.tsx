
import { motion } from "framer-motion";
import { Copyright, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer
      className="mt-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.19, delay: 0.4, type: "spring" }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Copyright section with enhanced styling */}
          <motion.div 
            className="flex items-center justify-center text-white font-bold mb-4 text-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="mr-3"
            >
              <Copyright className="h-6 w-6" />
            </motion.div>
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              {currentYear} Techkhwa. All Rights Reserved.
            </span>
          </motion.div>
          
          {/* Developer section with glow effect */}
          <motion.div 
            className="text-gray-200 font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-gray-300">Developer: </span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-lg">
              Atif Zeb
            </span>
          </motion.div>
          
          {/* Social links with enhanced hover effects */}
          <div className="flex gap-8 justify-center mt-8">
            <motion.a
              aria-label="LinkedIn"
              href="https://pk.linkedin.com/in/atif-zeb-76b866290"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl flex items-center gap-3 font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </div>
            </motion.a>
            
            <motion.a
              aria-label="Instagram"
              href="https://www.instagram.com/atifzeb_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-xl flex items-center gap-3 font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
