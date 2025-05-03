
import { motion } from "framer-motion";
import { Book, Globe, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const OurMissionSection = () => {
  const missionItems = [
    {
      icon: Book,
      title: "Comprehensive Learning",
      description: "Our curated curriculum covers the latest technologies and industry trends, ensuring you stay ahead in the fast-evolving tech landscape.",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We provide insights into global tech innovations, preparing you for international opportunities and challenges.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a vibrant community of learners, mentors, and industry professionals who support your growth journey.",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.91 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, type: "spring", bounce: 0.33 } },
    hover: { 
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      
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
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full shadow-lg">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Our Mission
          </motion.h2>
          
          <motion.p
            className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            At Techkhwa, we're committed to transforming tech education through innovative, accessible, and personalized learning experiences that empower individuals to thrive in today's digital economy.
          </motion.p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {missionItems.map((missionItem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="h-full"
            >
              <Card className="h-full backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 overflow-hidden shadow-lg">
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${missionItem.gradient}`}></div>
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                
                <CardContent className="p-8 relative">
                  <div className="mb-6 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${missionItem.gradient} blur-xl opacity-20 rounded-full`}></div>
                    <div className={`flex justify-center items-center w-16 h-16 rounded-2xl bg-gradient-to-br ${missionItem.gradient}`}>
                      <missionItem.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                    {missionItem.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {missionItem.description}
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

export default OurMissionSection;
