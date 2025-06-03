
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Globe } from "lucide-react";

const ParallaxSection = () => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Reduced motion for better performance
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const stats = [
    { icon: Zap, number: "10K+", label: "Students Trained", color: "from-yellow-400 to-orange-500" },
    { icon: Target, number: "95%", label: "Success Rate", color: "from-green-400 to-emerald-500" },
    { icon: Globe, number: "50+", label: "Countries Reached", color: "from-blue-400 to-cyan-500" }
  ];

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Simplified Parallax Background */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : y }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
      />
      
      {/* Reduced Background Layers */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "20%"]) }}
        className="absolute inset-0 bg-gradient-to-tr from-blue-800/20 via-transparent to-purple-800/20"
      />
      
      {/* Optimized Floating Shapes */}
      {!shouldReduceMotion && (
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
          className="absolute inset-0"
        >
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full will-change-transform"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(45deg, 
                  ${i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#8b5cf6' : '#f59e0b'}, 
                  ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#ec4899' : '#f97316'})`,
                boxShadow: `0 0 ${Math.random() * 15 + 5}px ${i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#8b5cf6' : '#f59e0b'}40`,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 h-full flex items-center justify-center py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl lg:text-7xl font-bold mb-8 text-white"
          >
            Transforming Lives Through
            <motion.span 
              className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Technology Education
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-16"
          >
            Join thousands of students who have transformed their careers and lives 
            through our cutting-edge technology programs.
          </motion.p>

          {/* Enhanced Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300">
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, rgba(255,255,255,0.1), transparent 70%)`,
                    }}
                  />

                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-block p-4 rounded-xl bg-gradient-to-r ${stat.color} mb-6 shadow-xl`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-3"
                  >
                    {stat.number}
                  </motion.div>

                  <p className="text-gray-300 font-medium text-lg">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
