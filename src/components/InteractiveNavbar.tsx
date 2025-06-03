
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const InteractiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  const navbarY = useTransform(scrollY, [0, 100], [0, -5]);
  const navbarOpacity = useTransform(scrollY, [0, 50, 100], [0.95, 0.98, 1]);

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
        stiffness: 300,
        damping: 25
      }
    }
  };

  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 25,
        duration: 0.8
      }
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{ y: navbarY, opacity: navbarOpacity }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/96 backdrop-blur-xl shadow-2xl border-b border-purple-500/30' 
          : 'bg-slate-900/20 backdrop-blur-sm'
      }`}
    >
      {/* Enhanced Glow Effect */}
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-pink-500/5 pointer-events-none"
        />
      )}

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link to="/modern" className="flex items-center space-x-4 group">
            <motion.div
              variants={logoVariants}
              whileHover={{ 
                rotate: 360, 
                scale: 1.15,
                transition: { duration: 0.8, ease: "easeInOut" }
              }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-70"
              />
              <motion.img 
                src="/lovable-uploads/3b227453-b8a0-44a9-b1f9-b79b76a5bd7f.png" 
                alt="Techkhwa Logo" 
                className="h-12 w-12 relative z-10 drop-shadow-lg"
              />
            </motion.div>
            <motion.span 
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm"
              whileHover={{ 
                scale: 1.08,
                transition: { duration: 0.3 }
              }}
            >
              Techkhwa
            </motion.span>
          </Link>
          
          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <Link
                  to={item.path}
                  className={`font-semibold text-lg transition-all duration-400 relative ${
                    location.pathname === item.path
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {item.name}
                  
                  {/* Enhanced Active Indicator */}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                      initial={false}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  )}
                  
                  {/* Enhanced Hover Effect */}
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full origin-left"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ 
                      scaleX: location.pathname !== item.path ? 1 : 0,
                      opacity: location.pathname !== item.path ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />

                  {/* Glow Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.90 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative text-gray-300 p-3 rounded-xl bg-slate-800/60 backdrop-blur-sm border border-purple-500/30 shadow-lg"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </motion.div>
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              whileHover={{ scale: 1.2 }}
            />
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
            scale: isOpen ? 1 : 0.95
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-slate-800/95 backdrop-blur-xl rounded-2xl mt-4 border border-purple-500/20 shadow-2xl"
        >
          <div className="py-6 space-y-2">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  x: isOpen ? 0 : -30 
                }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
              >
                <Link
                  to={item.path}
                  className={`block px-8 py-4 font-semibold text-lg transition-all duration-300 rounded-xl mx-4 ${
                    location.pathname === item.path
                      ? 'text-purple-400 bg-purple-500/20 border border-purple-500/30'
                      : 'text-gray-300 hover:text-purple-400 hover:bg-slate-700/60'
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
