
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const Opportunities = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Award className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Opportunities
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We create valuable opportunities for individuals to connect with industry leaders and like-minded peers, fostering growth and collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Networking Events",
              description: "Connect with industry professionals and expand your professional network through our regular networking events."
            },
            {
              title: "Industry Partnerships",
              description: "Benefit from our partnerships with leading tech companies offering internships, job placements, and collaborative projects."
            },
            {
              title: "Mentorship Programs",
              description: "Receive guidance from experienced professionals who can help navigate your career path in the tech industry."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
