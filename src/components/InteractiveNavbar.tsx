
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const InteractiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  // Optimized transforms
  const navbarY = useTransform(scrollY, [0, 100], [0, -2]);
  const navbarOpacity = useTransform(scrollY, [0, 50], [0.95, 1]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = useMemo(() => [
    { name: "Home", path: "/modern" },
    { name: "Courses", path: "/modern/courses" },
    { name: "About", path: "/modern/about" },
    { name: "Contact", path: "/modern/contact" }
  ], []);

  // Memoized animation variants
  const logoVariants = useMemo(() => ({
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  }), []);

  const navVariants = useMemo(() => ({
    hidden: { y: -60, opacity: 0 },
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
  }), []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{ y: navbarY, opacity: navbarOpacity }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/98 backdrop-blur-lg shadow-xl border-b border-purple-500/20' 
          : 'bg-slate-900/10 backdrop-blur-sm'
      }`}
    >
      {/* Enhanced background glow */}
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/8 to-pink-500/5 pointer-events-none"
        />
      )}

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Optimized Logo */}
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
          
          {/* Optimized Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                <Link
                  to={item.path}
                  className={`font-semibold text-lg transition-all duration-300 relative px-2 py-1 ${
                    location.pathname === item.path
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {item.name}
                  
                  {/* Active indicator */}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                      initial={false}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ 
                      scaleX: location.pathname !== item.path ? 1 : 0,
                      opacity: location.pathname !== item.path ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative text-gray-300 p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-purple-500/20"
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
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-slate-800/95 backdrop-blur-lg rounded-xl mt-3 border border-purple-500/20"
        >
          <div className="py-4 space-y-1">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  x: isOpen ? 0 : -20 
                }}
                transition={{ delay: idx * 0.08, duration: 0.2 }}
              >
                <Link
                  to={item.path}
                  className={`block px-6 py-3 font-semibold transition-all duration-200 rounded-lg mx-2 ${
                    location.pathname === item.path
                      ? 'text-purple-400 bg-purple-500/20 border border-purple-500/30'
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
