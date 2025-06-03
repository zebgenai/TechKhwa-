
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, Eye, Award, BookOpen, Rocket, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const visionPoints = [
    {
      icon: Eye,
      title: "Global Tech Ecosystem",
      description: "Creating a vibrant, innovative tech ecosystem that spans across borders and connects minds worldwide.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "Foster Innovation",
      description: "Empowering creativity and innovation through cutting-edge resources and collaborative environments.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Sustainable Growth",
      description: "Building sustainable pathways for personal and professional growth in the rapidly evolving tech landscape.",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const missionItems = [
    {
      icon: BookOpen,
      title: "Cutting-edge Training",
      description: "Providing cutting-edge training programs designed to equip individuals with the skills needed to excel.",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: Sparkles,
      title: "Innovation Opportunities",
      description: "Creating opportunities for innovation and collaboration in the tech ecosystem.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Student Ventures",
      description: "Supporting student-led entrepreneurial ventures and empowering the next generation.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Rocket,
      title: "Shape the Future",
      description: "Empowering individuals to shape the future through technology and innovation.",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  const coreValues = [
    {
      icon: BookOpen,
      title: "Trainings",
      description: "We offer expert-led training programs designed to equip individuals with the skills and knowledge needed to excel in today's tech industry.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Award,
      title: "Opportunities",
      description: "We create valuable opportunities for individuals to connect with industry leaders and like-minded peers, fostering growth and collaboration.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Students Entrepreneurship",
      description: "We empower students by supporting their ideas, helping them turn their dreams into reality, and guiding them on their entrepreneurial journey.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Rocket,
      title: "Innovation & Growth",
      description: "Let's start the journey towards success and enhance revenue for your business. Take your company to the next level.",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const teamMembers = [
    {
      name: "Kashif Ali",
      position: "Founder & CEO",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Rohullah Hamid",
      position: "Co Founder & CTO",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Syed Hasnain Ali Shah",
      position: "Co Founder & COO",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900" />
          
          {/* Floating Particles */}
          {Array.from({ length: 50 }, (_, i) => (
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
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse" />
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-white mb-2 block">Empowering the Next Generation</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                of Tech Innovators
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-300 mb-12 leading-relaxed"
            >
              Join our vibrant, innovative tech ecosystem that empowers students, professionals, 
              and entrepreneurs to thrive in a rapidly evolving world. We foster creativity, 
              growth, and sustainability by connecting you to the right resources and opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/courses"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden inline-block"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Join Community</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="group px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-white transition-all duration-300 inline-block"
                >
                  <span className="flex items-center space-x-2">
                    <span>Learn More</span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse" />
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full">
                  <Eye className="h-12 w-12 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Vision
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Our vision is to create a vibrant, innovative tech ecosystem that empowers students, 
              professionals, and entrepreneurs to thrive in a rapidly evolving world. We aim to foster 
              creativity, growth, and sustainability by connecting individuals to the right resources, 
              mentorship, and opportunities.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Card className="h-full bg-gradient-to-b from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 overflow-hidden relative">
                  <CardContent className="p-8 relative z-10 text-center">
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                      className={`inline-block p-4 rounded-xl bg-gradient-to-r ${point.gradient} mb-6 shadow-lg group-hover:shadow-xl`}
                    >
                      <point.icon className="h-8 w-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {point.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0.8 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-full shadow-lg">
                <Sparkles className="h-14 w-14 text-white" />
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Our Mission
            </motion.h2>
            
            <motion.p
              className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              TechKhwa's mission is to provide a collaborative space where technology, education, and entrepreneurship intersect. We are committed to empowering individuals through comprehensive learning experiences.
            </motion.p>
          </motion.div>
          
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {missionItems.map((missionItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.8, 
                  type: "spring", 
                  stiffness: 100 
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300 }
                }}
                viewport={{ once: true }}
                className="h-full group"
              >
                <Card className="h-full backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-0 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${missionItem.gradient}`}></div>
                  
                  <CardContent className="p-8 relative text-center">
                    <div className="mb-6 relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${missionItem.gradient} blur-xl opacity-20 rounded-full`}></div>
                      <div className={`flex justify-center items-center w-16 h-16 rounded-2xl bg-gradient-to-br ${missionItem.gradient} mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <missionItem.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {missionItem.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {missionItem.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0.8 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-full shadow-lg">
                <Award className="h-14 w-14 text-white" />
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-purple-600"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Our Core Values
            </motion.h2>
            
            <motion.p
              className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Our commitment to excellence drives everything we do. We believe in empowering individuals 
              through comprehensive training, creating meaningful opportunities, and fostering innovation.
            </motion.p>
          </motion.div>
          
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.8, 
                  type: "spring", 
                  stiffness: 100 
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300 }
                }}
                viewport={{ once: true }}
                className="h-full group"
              >
                <Card className="h-full backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-0 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${value.gradient}`}></div>
                  
                  <CardContent className="p-8 relative text-center">
                    <div className="mb-6 relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} blur-xl opacity-20 rounded-full`}></div>
                      <div className={`flex justify-center items-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-full blur-xl opacity-60 animate-pulse" />
                <div className="relative bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-full">
                  <Users className="h-12 w-12 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                Our Team
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Meet the talented team behind TechKhwa. Together, we bring years of experience and a shared 
              commitment to helping others achieve their goals. We're here to guide you every step of the way.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Card className="h-full bg-gradient-to-b from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-green-500/50 transition-all duration-500 overflow-hidden relative">
                  <CardContent className="p-8 relative z-10 text-center">
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${member.gradient} mb-6 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                    >
                      <Users className="h-10 w-10 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-teal-400 transition-all duration-300">
                      {member.name}
                    </h3>

                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {member.position}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Launching Ceremony Section */}
      <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-60 animate-pulse" />
                <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full">
                  <Star className="h-12 w-12 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Launching Ceremony Glimpse
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Witness the beginning of a revolutionary journey in tech education. Our launching ceremony 
              brought together industry leaders, innovators, and aspiring tech professionals.
            </motion.p>
          </motion.div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="inline-block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-30" />
                <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-full shadow-2xl">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="text-6xl font-bold"
                  >
                    3
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-2xl text-gray-300 mt-6"
            >
              Days of Innovation and Learning
            </motion.p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
