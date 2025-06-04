
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Cpu, Code, Cloud, Network, Database, Star, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import InteractiveNavbar from "@/components/InteractiveNavbar";
import ModernFooter from "@/components/ModernFooter";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ModernCourses = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const { toast } = useToast();

  const handleEnrollClick = (courseTitle: string) => {
    toast({
      title: "Enrollment Started!",
      description: `You've started enrollment for ${courseTitle}. Redirecting to registration...`,
    });
    
    // Simulate enrollment process
    setTimeout(() => {
      // In a real app, this would redirect to a payment/enrollment page
      window.location.href = "/modern#course-registration";
    }, 2000);
  };

  const courses = [
    {
      title: "Cybersecurity Mastery",
      description: "Master advanced cybersecurity techniques, ethical hacking, and defense strategies.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      duration: "12 weeks",
      level: "Intermediate",
      students: "2.5K+",
      rating: "4.9",
      gradient: "from-red-500 to-orange-500",
      features: ["Ethical Hacking", "Network Security", "Threat Analysis", "Incident Response"]
    },
    {
      title: "AI & Machine Learning",
      description: "Dive deep into artificial intelligence, neural networks, and cutting-edge ML algorithms.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      duration: "16 weeks",
      level: "Advanced",
      students: "3.2K+",
      rating: "4.8",
      gradient: "from-purple-500 to-pink-500",
      features: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"]
    },
    {
      title: "Full Stack Development",
      description: "Build complete web applications using modern frameworks and best practices.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      duration: "20 weeks",
      level: "Beginner to Advanced",
      students: "5.1K+",
      rating: "4.9",
      gradient: "from-blue-500 to-cyan-500",
      features: ["React/Next.js", "Node.js", "Database Design", "DevOps"]
    },
    {
      title: "Cloud Architecture",
      description: "Master cloud computing with AWS, Azure, and modern infrastructure patterns.",
      icon: Cloud,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      duration: "14 weeks",
      level: "Intermediate",
      students: "1.8K+",
      rating: "4.7",
      gradient: "from-green-500 to-teal-500",
      features: ["AWS/Azure", "Kubernetes", "Microservices", "CI/CD"]
    },
    {
      title: "Network Engineering",
      description: "Build and manage complex network infrastructures with hands-on experience.",
      icon: Network,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      duration: "10 weeks",
      level: "Beginner",
      students: "1.3K+",
      rating: "4.6",
      gradient: "from-indigo-500 to-purple-500",
      features: ["Routing/Switching", "Network Security", "Wireless", "Troubleshooting"]
    },
    {
      title: "Data Science & Analytics",
      description: "Extract insights from data using Python, R, and advanced statistical methods.",
      icon: Database,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      duration: "18 weeks",
      level: "Intermediate",
      students: "2.1K+",
      rating: "4.8",
      gradient: "from-yellow-500 to-orange-500",
      features: ["Python/R", "Machine Learning", "Data Visualization", "Big Data"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <InteractiveNavbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" />
        
        {/* Floating Elements */}
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
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
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl lg:text-8xl font-bold mb-8"
            >
              <span className="text-white block mb-4">Our</span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Courses
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Transform your career with our comprehensive, hands-on technology courses. 
              Learn from industry experts and build real-world projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center space-x-8 text-gray-300"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">15K+</div>
                <div>Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div>Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">95%</div>
                <div>Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section ref={containerRef} className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="relative rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, rgba(147, 51, 234, 0.1), transparent 70%)`
                    }}
                  />

                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${course.gradient} opacity-60`} />
                    
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm rounded-full"
                    >
                      <course.icon className="h-6 w-6 text-white" />
                    </motion.div>
                  </div>

                  <div className="p-8 relative z-10">
                    {/* Course Stats */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {course.title}
                    </h3>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-2">Level: {course.level}</div>
                      <div className="flex flex-wrap gap-2">
                        {course.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => handleEnrollClick(course.title)}
                      className={`w-full py-3 rounded-xl bg-gradient-to-r ${course.gradient} text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      Enroll Now
                    </Button>
                  </div>
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

export default ModernCourses;
