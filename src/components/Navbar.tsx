
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md dark:bg-gray-900/80 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Techkhwa
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Home</Link>
            <Link to="/courses" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Courses</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 space-y-4">
            <Link to="/" className="block text-gray-700 dark:text-gray-300">Home</Link>
            <Link to="/courses" className="block text-gray-700 dark:text-gray-300">Courses</Link>
            <Link to="/about" className="block text-gray-700 dark:text-gray-300">About</Link>
            <Link to="/contact" className="block text-gray-700 dark:text-gray-300">Contact</Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
