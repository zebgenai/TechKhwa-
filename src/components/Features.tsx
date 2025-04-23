
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Expert Mentorship",
      description: "Learn from industry professionals with years of experience",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998"
    },
    {
      title: "Hands-on Projects",
      description: "Build real-world projects to strengthen your portfolio",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Career Support",
      description: "Get guidance for job placement and career advancement",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
    }
  ];

  // Framer Motion containers and item animations
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.23
      }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 64, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, type: "spring", bounce: 0.32 }
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in">
            What We Offer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in">
            At Techkhwa, we provide comprehensive learning experiences that prepare you for success in the tech industry.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{ scale: 1.09, boxShadow: "0 12px 35px rgba(80,0,230,0.13)" }}
              className="transition-shadow duration-300 animate-scale-in hover-scale"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
