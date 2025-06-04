
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useState, useMemo } from "react";
import { Logo } from "./navigation/Logo";
import { DesktopNavigation } from "./navigation/DesktopNavigation";
import { MobileMenu } from "./navigation/MobileMenu";
import { MobileMenuButton } from "./navigation/MobileMenuButton";

const InteractiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

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

  const handleMobileMenuClose = () => setIsOpen(false);

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
          <Logo logoVariants={logoVariants} />
          <DesktopNavigation navItems={navItems} />
          <MobileMenuButton 
            isOpen={isOpen} 
            onClick={() => setIsOpen(!isOpen)} 
          />
        </div>

        <MobileMenu 
          isOpen={isOpen} 
          navItems={navItems} 
          onLinkClick={handleMobileMenuClose} 
        />
      </div>
    </motion.nav>
  );
};

export default InteractiveNavbar;
