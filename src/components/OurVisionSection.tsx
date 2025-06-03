
import { motion, useReducedMotion } from "framer-motion";
import { Eye, Sparkles, Globe, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const OurVisionSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const visionPoints = [
    {
      icon: Globe,
      title: "Global Tech Ecosystem",
      description: "Creating a vibrant, innovative tech ecosystem that spans across borders and connects minds worldwide.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Foster Innovation",
      description: "Empowering creativity and innovation through cutting-edge resources and collaborative environments.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Sustainable Growth",
      description: "Building sustainable pathways for personal and professional growth in the rapidly evolving tech landscape.",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const reducedAnimations = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  const fullAnimations = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const animations = shouldReduceMotion ? reducedAnimations : fullAnimations;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/30 relative overflow-hidden">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10" />
      
      {/* Reduced Particles for Performance */}
      {!shouldReduceMotion && Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -40, -20],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          variants={animations}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl" />
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full shadow-2xl">
                <Eye className="h-12 w-12 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Vision
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Our vision is to create a vibrant, innovative tech ecosystem that empowers students, 
            professionals, and entrepreneurs to thrive in a rapidly evolving world. We aim to foster 
            creativity, growth, and sustainability by connecting individuals to the right resources, 
            mentorship, and opportunities.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={animations}
              whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group h-full"
            >
              <Card className="h-full bg-gradient-to-b from-slate-800/60 to-slate-900/60 border-slate-700/50 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, rgba(147, 51, 234, 0.1), transparent 70%)`
                  }}
                />

                <CardContent className="p-8 relative z-10 text-center">
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className={`inline-block p-4 rounded-xl bg-gradient-to-r ${point.gradient} mb-6 shadow-lg`}
                  >
                    <point.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {point.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {point.description}
                  </p>

                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${point.gradient}`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
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

export default OurVisionSection;
