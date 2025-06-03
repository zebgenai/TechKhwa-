
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

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

  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(147, 51, 234, 0.3) 0%, 
            rgba(59, 130, 246, 0.2) 35%, 
            rgba(16, 185, 129, 0.1) 70%, 
            transparent 100%)`
        }}
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-60 blur-sm"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.9, 0.6],
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
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-2 text-blue-400"
            >
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium tracking-wide uppercase">Empowering the Next Generation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="block text-white mb-2">Empowering</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tech Innovators
              </span>
              <span className="block text-white text-3xl lg:text-4xl mt-2">of Tomorrow</span>
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
          </motion.div>

          {/* Interactive Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Central Orb */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-60"
              />

              {/* Orbiting Elements */}
              {Array.from({ length: 8 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className="w-full h-full rounded-full shadow-lg"
                    style={{
                      transform: `translateX(${80 + i * 20}px)`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                </motion.div>
              ))}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full">
                {Array.from({ length: 6 }, (_, i) => (
                  <motion.line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={`${50 + Math.cos(i * 60 * Math.PI / 180) * 30}%`}
                    y2={`${50 + Math.sin(i * 60 * Math.PI / 180) * 30}%`}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 2, delay: i * 0.1 }}
                  />
                ))}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
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
