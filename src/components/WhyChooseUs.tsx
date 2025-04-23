
import { motion } from "framer-motion";

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

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
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
          >
            <motion.img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Learning Environment"
              className="rounded-lg shadow-xl"
              initial={{ opacity: 0, scale: 0.95, y: 22 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          <motion.div
            variants={contentVariant}
            className="space-y-6"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in">
              Why Choose Techkhwa?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 animate-fade-in">
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
                  transition={{ duration: 0.5, delay: index * 0.09 }}
                  whileHover={{ scale: 1.11, color: "#725CFE" }}
                  className="flex items-center space-x-3 animate-fade-in"
                >
                  <span className="h-2 w-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-700 dark:text-gray-200">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
