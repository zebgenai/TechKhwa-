
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";

const EnhancedHero = () => {
  // Parallax background
  const bgRef = useRef(null);
  const { scrollY } = useScroll({ target: bgRef, offset: ["start start", "end start"] });
  // Move bg image up to 50px on scroll
  const y = useTransform(scrollY, [0, 600], [0, -50]);

  // Image container variants for floating in
  const imageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.3, duration: 1.1 } },
    hover: { scale: 1.06, boxShadow: "0 8px 32px rgba(80,0,230,0.22)" }
  };

  // Button variants
  const buttonVariants = {
    initial: { scale: 1, boxShadow: "0 2px 8px rgba(80,0,230,0.1)" },
    hover: { scale: 1.07, boxShadow: "0 6px 32px rgba(80,0,230,0.21)" },
    tap: { scale: 0.97 }
  };

  return (
    <motion.section 
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0, y: 64 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, type: "spring", bounce: 0.27 }}
    >
      {/* Advanced Parallax Background */}
      <motion.div
        ref={bgRef}
        style={{ y }}
        className="absolute inset-0 z-0 will-change-transform"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
          alt="Tech Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Text Area */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, type: "spring" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg animate-fade-in">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Techkhwa</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, type: "spring" }}
              className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 animate-fade-in"
            >
              Our vision is to create a vibrant, innovative tech ecosystem that empowers students, professionals, and entrepreneurs to thrive in a rapidly evolving world.
            </motion.p>
            <motion.div
              className="space-x-4"
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.a
                variants={buttonVariants}
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors hover:scale-105"
                whileHover="hover"
                whileTap="tap"
                href="/courses"
              >
                Explore Courses
              </motion.a>
              <motion.a
                variants={buttonVariants}
                className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors hover:scale-105"
                whileHover="hover"
                whileTap="tap"
                href="/about"
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Animated Floating Images */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="hidden md:block"
            style={{ perspective: 600 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                variants={imageVariants}
                whileHover="hover"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Programming"
                className="w-full h-48 object-cover rounded-lg shadow-lg animate-scale-in"
              />
              <motion.img
                variants={imageVariants}
                whileHover="hover"
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                alt="Technology"
                className="w-full h-48 object-cover rounded-lg shadow-lg mt-8 animate-scale-in"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default EnhancedHero;
