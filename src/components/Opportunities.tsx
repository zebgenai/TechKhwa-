
import { motion } from "framer-motion";
import { Award, Globe, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Opportunities = () => {
  const opportunityItems = [
    {
      icon: Users,
      title: "Networking Events",
      description: "Connect with industry professionals and expand your professional network through our regular networking events.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "Industry Partnerships",
      description: "Benefit from our partnerships with leading tech companies offering internships, job placements, and collaborative projects.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Mentorship Programs",
      description: "Receive guidance from experienced professionals who can help navigate your career path in the tech industry.",
      gradient: "from-pink-500 to-orange-500"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.8, 
        type: "spring", 
        bounce: 0.4 
      } 
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7 } 
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="flex justify-center mb-4"
            variants={titleVariants}
          >
            <motion.div
              initial={{ rotate: -5, scale: 0.9 }}
              animate={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full"
            >
              <Award className="h-12 w-12 text-white" />
            </motion.div>
          </motion.div>
          
          <motion.h2
            variants={titleVariants}
            className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600"
          >
            Opportunities
          </motion.h2>
          
          <motion.p
            variants={titleVariants}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We create valuable opportunities for individuals to connect with industry leaders 
            and like-minded peers, fostering growth and collaboration.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {opportunityItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="relative"
            >
              <Card className="h-full backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 overflow-hidden shadow-lg">
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${item.gradient}`}></div>
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                
                <CardContent className="p-8 relative">
                  <div className="mb-6 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} blur-xl opacity-20 rounded-full`}></div>
                    <div className={`flex justify-center items-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient}`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
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

export default Opportunities;
