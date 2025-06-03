
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const InteractiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { name: "Home", path: "/modern" },
    { name: "Courses", path: "/modern/courses" },
    { name: "About", path: "/modern/about" },
    { name: "Contact", path: "/modern/contact" }
  ];

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-purple-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/modern" className="flex items-center space-x-3">
            <motion.div
              variants={logoVariants}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm opacity-60"
              />
              <motion.img 
                src="/lovable-uploads/3b227453-b8a0-44a9-b1f9-b79b76a5bd7f.png" 
                alt="Techkhwa Logo" 
                className="h-10 w-10 relative z-10"
              />
            </motion.div>
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Techkhwa
            </motion.span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {item.name}
                  
                  {/* Active Indicator */}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={false}
                    />
                  )}
                  
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: location.pathname !== item.path ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 p-2 rounded-full bg-slate-800/50 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2"
        >
          <div className="py-4 space-y-3">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  x: isOpen ? 0 : -20 
                }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`block px-6 py-3 font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-purple-400 bg-purple-500/10'
                      : 'text-gray-300 hover:text-purple-400 hover:bg-slate-700/50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default InteractiveNavbar;
