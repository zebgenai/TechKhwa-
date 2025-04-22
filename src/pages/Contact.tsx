
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">contact@techkhwa.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+1 (234) 567-8900</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">123 Tech Street, Silicon Valley, CA</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Contact Us"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
