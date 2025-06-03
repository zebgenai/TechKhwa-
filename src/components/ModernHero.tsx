
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModernHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 3,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 8,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Dynamic Background with Multiple Gradients */}
      <motion.div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(147, 51, 234, 0.4) 0%, 
              rgba(59, 130, 246, 0.3) 25%, 
              rgba(16, 185, 129, 0.2) 50%, 
              transparent 80%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
              rgba(236, 72, 153, 0.3) 0%, 
              rgba(168, 85, 247, 0.2) 40%, 
              transparent 70%)
          `
        }}
      />

      {/* Enhanced Animated Grid with Glow Effect */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="h-full w-full" 
          animate={{ 
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.4) 1px, transparent 1px),
              radial-gradient(circle, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 60px 60px, 30px 30px'
          }} 
        />
      </div>

      {/* Enhanced Floating Elements with Glow */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 opacity-70 blur-sm shadow-lg"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
            boxShadow: `0 0 ${element.size * 2}px rgba(147, 51, 234, 0.6)`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 container mx-auto px-4 min-h-screen flex items-center"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-3 text-blue-400"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="h-6 w-6" />
              </motion.div>
              <span className="text-sm font-medium tracking-wide uppercase bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Empowering the Next Generation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
              className="text-6xl lg:text-8xl font-bold leading-tight"
            >
              <motion.span 
                className="block text-white mb-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Empowering
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Tech Innovators
              </motion.span>
              <motion.span 
                className="block text-white text-4xl lg:text-5xl mt-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                of Tomorrow
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Join our vibrant, innovative tech ecosystem that empowers students, professionals, 
              and entrepreneurs to thrive in a rapidly evolving world. We foster creativity, 
              growth, and sustainability by connecting you to the right resources and opportunities.
            </motion.p>

            {/* Enhanced Call-to-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-6 pt-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative flex items-center gap-3">
                    Get Started Today
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="group bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="flex items-center gap-3">
                    <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                    Watch Demo
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Interactive Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[600px]">
              {/* Enhanced Central Orb with Multiple Layers */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="w-48 h-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-70"
                />
                <motion.div
                  animate={{
                    rotate: -360,
                    scale: [1.2, 1, 1.2],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-xl opacity-80"
                />
              </motion.div>

              {/* Enhanced Orbiting Elements with Trails */}
              {Array.from({ length: 12 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-6 h-6 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 12 + i * 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className="w-full h-full rounded-full shadow-2xl"
                    style={{
                      background: `linear-gradient(45deg, 
                        ${i % 4 === 0 ? '#06b6d4' : i % 4 === 1 ? '#8b5cf6' : i % 4 === 2 ? '#f59e0b' : '#ef4444'}, 
                        ${i % 4 === 0 ? '#3b82f6' : i % 4 === 1 ? '#ec4899' : i % 4 === 2 ? '#f97316' : '#dc2626'})`,
                      transform: `translateX(${100 + i * 25}px)`,
                      boxShadow: `0 0 20px ${i % 4 === 0 ? '#06b6d4' : i % 4 === 1 ? '#8b5cf6' : i % 4 === 2 ? '#f59e0b' : '#ef4444'}60`,
                    }}
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                </motion.div>
              ))}

              {/* Enhanced Connecting Lines with Animated Gradients */}
              <svg className="absolute inset-0 w-full h-full">
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={`${50 + Math.cos(i * 45 * Math.PI / 180) * 35}%`}
                    y2={`${50 + Math.sin(i * 45 * Math.PI / 180) * 35}%`}
                    stroke={`url(#gradient-${i})`}
                    strokeWidth="3"
                    strokeDasharray="8,4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 0], 
                      opacity: [0, 0.8, 0] 
                    }}
                    transition={{ 
                      duration: 4, 
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
                <defs>
                  {Array.from({ length: 8 }, (_, i) => (
                    <linearGradient key={i} id={`gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  ))}
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ModernHero;
