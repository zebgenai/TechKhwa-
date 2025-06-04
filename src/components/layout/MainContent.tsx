
import { motion } from "framer-motion";
import { useAnimation } from "@/providers/AnimationProvider";
import { ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
}

export const MainContent = ({ children }: MainContentProps) => {
  const { containerVariants } = useAnimation();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-0"
    >
      {children}
    </motion.div>
  );
};
