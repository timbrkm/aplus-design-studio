import { motion, Transition, Variants } from 'framer-motion';
import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  color: string;
}

const transition: Transition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.4,
};

const backgroundVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const contentVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children, color }) => {
  return (
    <>
      <motion.div
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: color,
          zIndex: -1,
        }}
      />
      <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageWrapper;
