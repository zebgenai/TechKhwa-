
import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const EnhancedHero = () => {
  // Parallax background with proper container positioning
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Simplified parallax effect - reduced range for smoother animation
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Simplified image variants with smoother transitions
  const imageVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.8 
      } 
    },
    hover: { 
      scale: 1.03, 
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // Simplified button variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05, 
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { scale: 0.98 }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-full"
      >
        {/* Simplified Parallax Background with proper positioning */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0 will-change-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
            alt="Tech Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-purple-900/85" />
        </motion.div>

        {/* Content with simplified animations */}
        <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Text Area with staggered animations */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
              >
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Techkhwa</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8"
              >
                Our vision is to create a vibrant, innovative tech ecosystem that empowers students, professionals, and entrepreneurs to thrive in a rapidly evolving world.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="space-x-4"
              >
                <motion.div
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-block"
                >
                  <Link
                    to="/modern-courses"
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block"
                  >
                    Explore Courses
                  </Link>
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="inline-block"
                >
                  <Link
                    to="/modern-about"
                    className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors inline-block"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Simplified Floating Images */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="hidden md:block relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.img
                  variants={imageVariants}
                  whileHover="hover"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Programming"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <motion.img
                  variants={imageVariants}
                  whileHover="hover"
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  alt="Technology"
                  className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
                  transition={{ delay: 0.2 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedHero;
