
import { motion } from "framer-motion";
import { GraduationCap, Rocket, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StudentsEntrepreneurship = () => {
  const entrepreneurshipSteps = [
    {
      step: "1",
      title: "Ideation & Validation",
      description: "We help students refine their business ideas and validate them through market research and feasibility studies.",
      icon: Lightbulb,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      step: "2",
      title: "Mentorship & Guidance",
      description: "Our experienced mentors provide personalized guidance to navigate the challenges of starting a business.",
      icon: Users,
      gradient: "from-orange-500 to-red-500"
    },
    {
      step: "3",
      title: "Resources & Funding",
      description: "We connect students with essential resources and potential funding opportunities to bring their ideas to life.",
      icon: GraduationCap,
      gradient: "from-red-500 to-purple-500"
    },
    {
      step: "4",
      title: "Launch & Growth",
      description: "We support the launch phase and provide continued assistance to help student ventures grow and succeed.",
      icon: Rocket,
      gradient: "from-purple-500 to-blue-500"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50, y: 10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { 
        type: "spring", 
        damping: 15, 
        stiffness: 100 
      } 
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="flex justify-center mb-5"
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          >
            <div className="bg-gradient-to-br from-amber-500 to-red-500 p-4 rounded-xl shadow-lg">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-red-500 to-purple-500"
          >
            Student Entrepreneurship
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We empower students by supporting their ideas, helping them turn their dreams 
            into reality, and guiding them on their entrepreneurial journey.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0.8 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute -z-10 inset-0 bg-gradient-to-br from-amber-500/20 to-red-500/20 blur-2xl rounded-2xl"
            />
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Students Entrepreneurship"
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            {entrepreneurshipSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-5">
                      <motion.div 
                        whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`flex-shrink-0 bg-gradient-to-br ${step.gradient} text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <step.icon className="h-8 w-8" />
                      </motion.div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-red-500 transition-all duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudentsEntrepreneurship;
