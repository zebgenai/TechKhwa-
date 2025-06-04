
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  onLinkClick: () => void;
}

export const MobileMenu = ({ isOpen, navItems, onLinkClick }: MobileMenuProps) => {
  const location = useLocation();

  return (
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
              onClick={onLinkClick}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
