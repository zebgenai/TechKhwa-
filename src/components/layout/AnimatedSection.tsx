
import { motion } from "framer-motion";
import { useAnimation } from "@/providers/AnimationProvider";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedSection = ({ children, className = "" }: AnimatedSectionProps) => {
  const { sectionVariants } = useAnimation();

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
