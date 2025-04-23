
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.42 }}
      className="fixed w-full bg-white/80 backdrop-blur-md dark:bg-gray-900/80 z-50 shadow-lg animate-fade-in"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.img 
              src="/lovable-uploads/3b227453-b8a0-44a9-b1f9-b79b76a5bd7f.png" 
              alt="Techkhwa Logo" 
              className="h-10 w-10"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.45 }}
            />
            <motion.span 
              className="text-xl font-bold text-gray-800 dark:text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.55 }}
            >
              Techkhwa
            </motion.span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {["Home", "Courses", "About", "Contact"].map((item, idx) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.13 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: -24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 + idx * 0.1, duration: 0.4 }}
                className="transition"
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors story-link"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.3 }}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          className="md:hidden overflow-hidden"
        >
          <motion.div
            className="pb-4 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.35 }}
          >
            {["Home", "Courses", "About", "Contact"].map((item, idx) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.93 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
                transition={{ delay: 0.1 + idx * 0.05, duration: 0.2 }}
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
