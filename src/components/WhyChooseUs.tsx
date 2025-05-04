
import { motion } from "framer-motion";
import { CheckCircle2, User, Code, Layers, ChefHat, Network } from "lucide-react";

const WhyChooseUs = () => {
  // Container and item variants for more advanced entrance animation
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } }
  };
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.93, x: -50 },
    show: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.75, type: "spring", bounce: 0.28 } },
    hover: { scale: 1.035, boxShadow: "0 4px 26px rgba(80,0,230,0.16)" }
  };
  const contentVariant = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.72, type: "spring", bounce: 0.22 } }
  };

  const featureItems = [
    { 
      icon: User, 
      title: "Expert Instructors",
      description: "Learn from industry veterans with proven track records" 
    },
    { 
      icon: Code, 
      title: "Hands-on Projects",
      description: "Apply your knowledge through real-world projects" 
    },
    { 
      icon: Layers, 
      title: "Comprehensive Curriculum",
      description: "Cover all essential topics and cutting-edge technologies" 
    },
    { 
      icon: ChefHat, 
      title: "Career Preparation",
      description: "Get ready for the job market with resume workshops and interview prep" 
    },
    { 
      icon: Network, 
      title: "Industry Connections",
      description: "Network with tech professionals and companies" 
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-96 bg-gradient-to-r from-blue-400/5 via-purple-300/5 to-pink-300/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={imageVariant}
            whileHover="hover"
            className="relative"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg blur-xl -m-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            ></motion.div>
            <motion.img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Learning Environment"
              className="rounded-lg shadow-xl relative z-10 w-full object-cover"
              style={{ height: "500px" }}
              initial={{ opacity: 0, scale: 0.95, y: 22 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          <motion.div
            variants={contentVariant}
            className="space-y-8"
          >
            <div>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
              ></motion.div>
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                Why Choose Techkhwa?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                We're committed to providing the best learning experience through a combination of quality education, practical training, and industry connections.
              </p>
            </div>
            
            <div className="space-y-6 mt-8">
              {featureItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="mt-1 bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg transform group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
