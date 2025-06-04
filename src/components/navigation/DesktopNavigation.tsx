
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  path: string;
}

interface DesktopNavigationProps {
  navItems: NavItem[];
}

export const DesktopNavigation = ({ navItems }: DesktopNavigationProps) => {
  const location = useLocation();

  return (
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
  );
};
