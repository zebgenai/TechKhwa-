
import { motion } from "framer-motion";
import { Copyright, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer
      className="mt-16 flex flex-col items-center border-t border-gray-300 dark:border-gray-600 pt-8 pb-8 gap-2 text-center bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.19, delay: 0.4, type: "spring" }}
    >
      <div className="flex items-center justify-center text-gray-800 dark:text-gray-100 font-semibold mb-2 text-lg">
        <Copyright className="h-5 w-5 mr-2" />
        <span>{currentYear} Techkhwa. All Rights Reserved.</span>
      </div>
      <div className="text-gray-700 dark:text-gray-200 font-medium text-base">
        Developer:{" "}
        <span className="font-bold text-blue-600 dark:text-blue-400">Atif Zeb</span>
      </div>
      <div className="flex gap-6 justify-center mt-4">
        <a
          aria-label="LinkedIn"
          href="https://pk.linkedin.com/in/atif-zeb-76b866290"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-scale text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-2 font-medium"
        >
          <Linkedin className="w-6 h-6" />
          <span className="text-base">LinkedIn</span>
        </a>
        <a
          aria-label="Instagram"
          href="https://www.instagram.com/atifzeb_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-scale text-gray-800 dark:text-gray-100 hover:text-pink-600 dark:hover:text-pink-400 transition flex items-center gap-2 font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span className="text-base">Instagram</span>
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
