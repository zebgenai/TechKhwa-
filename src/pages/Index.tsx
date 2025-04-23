import Navbar from "@/components/Navbar";
import EnhancedHero from "@/components/EnhancedHero";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CourseRegistrationForm from "@/components/CourseRegistrationForm";
import { motion } from "framer-motion";
import { Book, Globe, Users } from "lucide-react";

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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-blue-50 to-purple-50 dark:bg-gradient-to-tr dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 46, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.95, type: "spring", bounce: 0.27 }}
      >
        <EnhancedHero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, type: "spring", bounce: 0.17 }}
        viewport={{ once: true, amount: 0.33 }}
      >
        <Features />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, type: "spring", bounce: 0.17 }}
        viewport={{ once: true, amount: 0.33 }}
      >
        <OurMissionSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.88, type: "spring", bounce: 0.15 }}
        viewport={{ once: true, amount: 0.28 }}
      >
        <WhyChooseUs />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.12 }}
        viewport={{ once: true, amount: 0.23 }}
      >
        <Testimonials />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.96, type: "spring", bounce: 0.15 }}
        viewport={{ once: true, amount: 0.15 }}
      >
        <CourseRegistrationForm />
      </motion.div>
      <motion.footer
        className="mt-16 flex flex-col items-center border-t pt-8 gap-2 text-center"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.19, delay: 0.4, type: "spring" }}
      >
        <div className="text-gray-700 dark:text-gray-200 font-medium">
          Developer:{" "}
          <span className="font-semibold text-blue-700 dark:text-blue-400">Atif Zeb</span>
        </div>
        <div className="flex gap-6 justify-center mt-2">
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/atif-zeb-76b866290/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-scale text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block align-middle">
              <path d="M16 8a6 6 0 0 1 6 6v5h-4v-5a2 2 0 0 0-4 0v5h-4v-5a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" rx="2" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/atifzeb_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-scale text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block align-middle">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
