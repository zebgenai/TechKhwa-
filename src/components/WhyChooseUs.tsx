
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Learning Environment"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Why Choose Techkhwa?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We're committed to providing the best learning experience through:
            </p>
            <ul className="space-y-4">
              {[
                "Industry-relevant curriculum updated regularly",
                "Flexible learning schedules for working professionals",
                "One-on-one mentorship sessions",
                "Networking opportunities with industry leaders",
                "Lifetime access to course materials"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <span className="h-2 w-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-700 dark:text-gray-200">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
