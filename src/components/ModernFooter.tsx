
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";

const ModernFooter = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/atifcyber7", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "AI & Machine Learning",
    "Cybersecurity",
    "Web Development",
    "Data Science",
    "Mobile Development",
    "Cloud Computing"
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900" />
        
        {/* Floating Particles */}
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm opacity-60" />
                <img 
                  src="/lovable-uploads/3b227453-b8a0-44a9-b1f9-b79b76a5bd7f.png" 
                  alt="Techkhwa Logo" 
                  className="h-12 w-12 relative z-10"
                />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Techkhwa
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering the next generation of tech leaders through innovative, 
              hands-on education and cutting-edge curriculum.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    backgroundColor: "rgba(147, 51, 234, 0.2)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-slate-800/50 text-gray-400 hover:text-purple-400 transition-colors duration-300 border border-slate-700 hover:border-purple-500"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Quick Links
              <motion.div
                className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <motion.span
                      className="w-2 h-2 rounded-full bg-purple-500 mr-3 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Our Services
              <motion.div
                className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Get in Touch
              <motion.div
                className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center space-x-3 text-gray-300"
              >
                <Mail className="h-5 w-5 text-purple-400" />
                <span>info@techkhwa.com</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center space-x-3 text-gray-300"
              >
                <Phone className="h-5 w-5 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-center space-x-3 text-gray-300"
              >
                <MapPin className="h-5 w-5 text-purple-400" />
                <span>Global Online Campus</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 mb-4 md:mb-0 flex items-center">
            © 2025 Techkhwa. Developed by Atif Zeb. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mx-1"
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.span>
            for the future of tech education.
          </p>
          
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link to="#" className="hover:text-purple-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-purple-400 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-purple-400 transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default ModernFooter;
