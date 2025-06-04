
import { motion, useReducedMotion } from "framer-motion";
import { createContext, useContext, useMemo, ReactNode } from "react";

interface AnimationContextType {
  shouldReduceMotion: boolean;
  sectionVariants: any;
  containerVariants: any;
}

const AnimationContext = createContext<AnimationContextType | null>(null);

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within AnimationProvider");
  }
  return context;
};

interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = useMemo(() => shouldReduceMotion ? 
    {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } }
    } :
    {
      hidden: { 
        opacity: 0, 
        y: 20
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }
    }, [shouldReduceMotion]);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05
      }
    }
  }), [shouldReduceMotion]);

  const value = {
    shouldReduceMotion,
    sectionVariants,
    containerVariants
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
