import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
}

// Standalone Reveal Component
export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, width = "100%", delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
          visible: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            transition: { 
                duration: 0.8, 
                delay: delay, 
                ease: [0.22, 1, 0.36, 1] // Custom easeOutQuart-like curve
            } 
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Stagger Container for coordinating lists
interface ScrollStaggerProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

export const ScrollStagger: React.FC<ScrollStaggerProps> = ({ children, className = "", delay = 0, staggerDelay = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

// Item to be used inside ScrollStagger
export const ScrollStaggerItem: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            transition: { duration: 0.6, ease: "easeOut" } 
        }
      }}
    >
      {children}
    </motion.div>
  );
};