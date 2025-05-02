
import { motion } from "framer-motion";
import { Book, Copyright, Globe, Users } from "lucide-react";

const OurMissionSection = () => {
  const missionItems = [
    {
      icon: Book,
      title: "Comprehensive Learning",
      description: "Our curated curriculum covers the latest technologies and industry trends, ensuring you stay ahead in the fast-evolving tech landscape."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We provide insights into global tech innovations, preparing you for international opportunities and challenges."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a vibrant community of learners, mentors, and industry professionals who support your growth journey."
    }
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.91 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, type: "spring", bounce: 0.33 } }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Our Mission
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            At Techkhwa, we're committed to transforming tech education through innovative, accessible, and personalized learning experiences.
          </p>
        </div>
        
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
              whileHover={{ scale: 1.05, boxShadow: "0 6px 18px rgba(80,0,230,0.26)" }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <missionItem.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                {missionItem.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {missionItem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurMissionSection;
