import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Target, Users, Award, Lightbulb, Globe } from "lucide-react";
import InteractiveNavbar from "@/components/InteractiveNavbar";
import ModernFooter from "@/components/ModernFooter";
import DeveloperProfile from "@/components/about/DeveloperProfile";

const ModernAbout = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const stats = [
    { icon: Users, number: "10K+", label: "Students Trained", color: "from-blue-500 to-cyan-500" },
    { icon: Award, number: "98%", label: "Success Rate", color: "from-purple-500 to-pink-500" },
    { icon: Globe, number: "50+", label: "Countries", color: "from-green-500 to-emerald-500" },
    { icon: Target, number: "500+", label: "Projects", color: "from-orange-500 to-red-500" }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology and creative solutions.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive ecosystem where everyone can thrive and grow.",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Delivering world-class education with proven results and outcomes.",
      gradient: "from-green-400 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <InteractiveNavbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        
        {/* Animated Background */}
        {Array.from({ length: 100 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
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
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse" />
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-full">
                  <Sparkles className="h-16 w-16 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl lg:text-8xl font-bold mb-8"
            >
              <span className="text-white block mb-4">About</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Techkhwa
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Empowering the next generation of tech leaders through innovative education, 
              hands-on experience, and a vibrant community of learners and innovators.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={containerRef} className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative">
        <motion.div style={{ y, opacity }} className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group text-center"
              >
                <div className="relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition-all duration-500">
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at center, rgba(147, 51, 234, 0.2), transparent 70%)`
                    }}
                  />

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={`inline-block p-4 rounded-full bg-gradient-to-r ${stat.color} mb-6`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="text-5xl font-bold text-white mb-2"
                  >
                    {stat.number}
                  </motion.div>

                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Developer Profile Section */}
      <DeveloperProfile />

      {/* Values Section */}
      <section className="py-24 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-800 to-slate-800" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do at Techkhwa
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -20 }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-b from-slate-700/50 to-slate-800/50 border border-slate-600 hover:border-purple-500/50 transition-all duration-500 h-full">
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at center, rgba(147, 51, 234, 0.1), transparent 70%)`
                    }}
                  />

                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-block p-4 rounded-xl bg-gradient-to-r ${value.gradient} mb-6`}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {value.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
};

export default ModernAbout;
