
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Shield, Rocket, Users, Trophy } from "lucide-react";

const EnhancedFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Master cutting-edge AI technologies with hands-on projects and real-world applications.",
      gradient: "from-pink-500 to-rose-500",
      delay: 0.1,
      glowColor: "rgba(236, 72, 153, 0.3)"
    },
    {
      icon: Shield,
      title: "Cybersecurity Excellence",
      description: "Learn advanced security protocols and ethical hacking techniques from industry experts.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2,
      glowColor: "rgba(59, 130, 246, 0.3)"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Build complete web applications using modern frameworks and best practices.",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.3,
      glowColor: "rgba(16, 185, 129, 0.3)"
    },
    {
      icon: Rocket,
      title: "Innovation Labs",
      description: "Experiment with emerging technologies and create groundbreaking solutions.",
      gradient: "from-purple-500 to-violet-500",
      delay: 0.4,
      glowColor: "rgba(147, 51, 234, 0.3)"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Join a vibrant community of learners and industry professionals.",
      gradient: "from-orange-500 to-amber-500",
      delay: 0.5,
      glowColor: "rgba(249, 115, 22, 0.3)"
    },
    {
      icon: Trophy,
      title: "Career Success",
      description: "Achieve your career goals with personalized mentorship and job placement support.",
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.6,
      glowColor: "rgba(99, 102, 241, 0.3)"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900" />
      
      {/* Animated Background Particles */}
      {Array.from({ length: 30 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse" />
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full">
                <Brain className="h-12 w-12 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Next-Gen Learning
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Dive into the future of technology education with our comprehensive curriculum
            designed for tomorrow's digital leaders.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group h-full"
            >
              <Card className="h-full bg-gradient-to-b from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 overflow-hidden relative">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${feature.glowColor}, transparent 70%)`
                  }}
                />

                <CardContent className="p-8 relative z-10">
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                    className={`inline-block p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg group-hover:shadow-xl`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedFeatures;
