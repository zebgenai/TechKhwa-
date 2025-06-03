
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Globe } from "lucide-react";

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);

  const stats = [
    { icon: Zap, number: "10K+", label: "Students Trained", color: "from-yellow-400 to-orange-500" },
    { icon: Target, number: "95%", label: "Success Rate", color: "from-green-400 to-emerald-500" },
    { icon: Globe, number: "50+", label: "Countries Reached", color: "from-blue-400 to-cyan-500" }
  ];

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-slate-900">
      {/* Enhanced Parallax Background with Multiple Layers */}
      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["0%", "60%"]),
          rotateX
        }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
      />
      
      {/* Additional Background Layer */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]) }}
        className="absolute inset-0 bg-gradient-to-tr from-blue-800/30 via-transparent to-purple-800/30"
      />
      
      {/* Enhanced Floating Geometric Shapes */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
        className="absolute inset-0"
      >
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, 
                ${i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#8b5cf6' : '#f59e0b'}, 
                ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#ec4899' : '#f97316'})`,
              boxShadow: `0 0 ${Math.random() * 20 + 10}px ${i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#8b5cf6' : '#f59e0b'}60`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.8, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Main Content with Enhanced Effects */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl lg:text-8xl font-bold mb-8 text-white"
          >
            Transforming Lives Through
            <motion.span 
              className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Technology Education
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl text-gray-300 max-w-4xl mx-auto mb-20"
          >
            Join thousands of students who have transformed their careers and lives 
            through our cutting-edge technology programs.
          </motion.p>

          {/* Enhanced Stats */}
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.08,
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.4 }
                }}
                className="group perspective-1000"
              >
                <div className="relative p-10 rounded-3xl bg-white/8 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-500 transform-gpu">
                  {/* Enhanced Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 70%)`,
                      filter: "blur(20px)",
                    }}
                  />

                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className={`inline-block p-6 rounded-2xl bg-gradient-to-r ${stat.color} mb-8 shadow-2xl`}
                    style={{
                      boxShadow: `0 0 40px ${stat.color.includes('yellow') ? '#f59e0b' : stat.color.includes('green') ? '#10b981' : '#06b6d4'}60`,
                    }}
                  >
                    <stat.icon className="h-10 w-10 text-white drop-shadow-lg" />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1, type: "spring", bounce: 0.4 }}
                    className="text-5xl font-bold text-white mb-4 drop-shadow-lg"
                  >
                    {stat.number}
                  </motion.div>

                  <p className="text-gray-300 font-semibold text-xl">{stat.label}</p>
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
