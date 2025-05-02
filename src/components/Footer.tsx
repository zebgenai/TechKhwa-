
import { motion } from "framer-motion";
import { Copyright } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer
      className="mt-16 flex flex-col items-center border-t pt-8 pb-8 gap-2 text-center"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.19, delay: 0.4, type: "spring" }}
    >
      <div className="flex items-center justify-center text-gray-700 dark:text-gray-200 font-medium mb-2">
        <Copyright className="h-4 w-4 mr-1" />
        <span>{currentYear} Techkhwa. All Rights Reserved.</span>
      </div>
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
  );
};

export default Footer;
