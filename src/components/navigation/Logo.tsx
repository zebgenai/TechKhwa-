
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface LogoProps {
  logoVariants: any;
}

export const Logo = ({ logoVariants }: LogoProps) => {
  return (
    <Link to="/modern" className="flex items-center space-x-3 group relative">
      <motion.div
        variants={logoVariants}
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.2 }
        }}
        className="relative"
      >
        {/* Simplified rotating glow */}
        <motion.div
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-60"
        />
        <motion.img 
          src="/lovable-uploads/3b227453-b8a0-44a9-b1f9-b79b76a5bd7f.png" 
          alt="Techkhwa Logo" 
          className="h-11 w-11 relative z-10 drop-shadow-md"
        />
      </motion.div>
      <motion.span 
        className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
      >
        Techkhwa
      </motion.span>
    </Link>
  );
};
