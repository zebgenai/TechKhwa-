
import { motion } from "framer-motion";
import { Shield, Cpu, Code } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const courses = [
  {
    title: "Cybersecurity Fundamentals",
    description: "Learn the essential concepts and practices of cybersecurity, including network security, encryption, and threat detection.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    duration: "12 weeks",
    level: "Beginner to Intermediate"
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "Explore the world of AI and ML, covering neural networks, deep learning, and practical applications in business.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    duration: "16 weeks",
    level: "Intermediate"
  },
  {
    title: "Full Stack Development",
    description: "Master both frontend and backend development using modern technologies and frameworks.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    duration: "20 weeks",
    level: "Beginner to Advanced"
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Our Courses
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="relative h-48 mb-4">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <course.icon className="w-5 h-5 text-blue-600" />
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                    </div>
                    <CardDescription>
                      Duration: {course.duration} | Level: {course.level}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{course.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Learn More
                    </motion.button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
