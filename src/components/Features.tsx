
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, BarChart3, GraduationCap } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Expert Mentorship",
      description: "Learn from industry professionals with years of experience",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      icon: GraduationCap,
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Hands-on Projects",
      description: "Build real-world projects to strengthen your portfolio",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      icon: BarChart3,
      color: "from-violet-600 to-purple-600"
    },
    {
      title: "Career Support",
      description: "Get guidance for job placement and career advancement",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      icon: Star,
      color: "from-pink-600 to-rose-600"
    }
  ];

  // Framer Motion containers and item animations
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.33
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 64, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, type: "spring", bounce: 0.32 }
    },
    hover: { 
      y: -10, 
      scale: 1.02,
      transition: { duration: 0.3, type: "spring" }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0.8 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full shadow-lg">
              <Star className="h-12 w-12 text-white" />
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            What We Offer
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            At Techkhwa, we provide comprehensive learning experiences that empower 
            you to succeed in the rapidly evolving tech industry.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover="hover"
              className="h-full"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr bg-opacity-70"
                    initial={{ opacity: 0.4 }}
                    whileHover={{ opacity: 0.7 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-tr ${feature.color} opacity-30`}></div>
                  </motion.div>
                  
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 1.5 }}
                  />
                  
                  <motion.div 
                    className="absolute top-0 right-0 bg-white dark:bg-gray-800 p-2 m-4 rounded-full shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <feature.icon className={`h-8 w-8 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                  </motion.div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
