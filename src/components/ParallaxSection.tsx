
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

  // Optimized transforms with reduced calculations
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const stats = [
    { icon: Zap, number: "10K+", label: "Students Trained", color: "from-yellow-400 to-orange-500" },
    { icon: Target, number: "95%", label: "Success Rate", color: "from-green-400 to-emerald-500" },
    { icon: Globe, number: "50+", label: "Countries Reached", color: "from-blue-400 to-cyan-500" }
  ];

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-slate-900 flex items-center">
      {/* Optimized Background with reduced layers */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : y }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
      />
      
      {/* Simplified overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/10 via-transparent to-purple-800/10" />
      
      {/* Reduced floating elements for better performance */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full will-change-transform"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 2 === 0 ? '#06b6d4' : '#8b5cf6',
                boxShadow: `0 0 ${Math.random() * 10 + 5}px ${i % 2 === 0 ? '#06b6d4' : '#8b5cf6'}60`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content - Better centered */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold mb-6 text-white"
            >
              Transforming Lives Through
              <motion.span 
                className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Technology Education
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
            >
              Join thousands of students who have transformed their careers and lives 
              through our cutting-edge technology programs and innovative learning approach.
            </motion.p>

            {/* Optimized Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { 
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 h-full">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className={`inline-block p-4 rounded-xl bg-gradient-to-r ${stat.color} mb-6 shadow-lg relative z-10`}
                    >
                      <stat.icon className="h-8 w-8 text-white" />
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold text-white mb-3 relative z-10"
                    >
                      {stat.number}
                    </motion.div>

                    <p className="text-gray-300 font-medium text-lg relative z-10">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
