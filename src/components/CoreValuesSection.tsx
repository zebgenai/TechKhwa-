
import { motion } from "framer-motion";
import { Award, BookOpen, Users, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CoreValuesSection = () => {
  const coreValues = [
    {
      icon: BookOpen,
      title: "Trainings",
      description: "We offer expert-led training programs designed to equip individuals with the skills and knowledge needed to excel in today's tech industry.",
      gradient: "from-blue-500 to-indigo-600",
      delay: 0.1
    },
    {
      icon: Award,
      title: "Opportunities",
      description: "We create valuable opportunities for individuals to connect with industry leaders and like-minded peers, fostering growth and collaboration.",
      gradient: "from-purple-500 to-pink-600",
      delay: 0.2
    },
    {
      icon: Users,
      title: "Students Entrepreneurship",
      description: "We empower students by supporting their ideas, helping them turn their dreams into reality, and guiding them on their entrepreneurial journey.",
      gradient: "from-green-500 to-teal-600",
      delay: 0.3
    },
    {
      icon: Rocket,
      title: "Innovation & Growth",
      description: "Let's start the journey towards success and enhance revenue for your business. Take your company to the next level.",
      gradient: "from-orange-500 to-red-600",
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-96 max-w-5xl bg-gradient-to-r from-blue-400/5 via-violet-300/5 to-purple-300/5 rounded-full blur-3xl"></div>

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
                delay: value.delay, 
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
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                
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

                  {/* Animated Bottom Border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.gradient}`}
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

export default CoreValuesSection;
