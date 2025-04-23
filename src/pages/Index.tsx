
import Navbar from "@/components/Navbar";
import EnhancedHero from "@/components/EnhancedHero";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CourseRegistrationForm from "@/components/CourseRegistrationForm";
import { motion } from "framer-motion";
import { Book, Globe, Users } from "lucide-react";
import CrawlForm from "@/components/CrawlForm";

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
        
        <div className="grid md:grid-cols-3 gap-8">
          {missionItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <item.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <EnhancedHero />
      <Features />
      <OurMissionSection />
      <WhyChooseUs />
      <Testimonials />
      {/* Add the Website Scraper */}
      <CrawlForm />
      <CourseRegistrationForm />
      <footer className="mt-16 flex flex-col items-center border-t pt-8 gap-2 text-center">
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
      </footer>
    </div>
  );
};

export default Index;
