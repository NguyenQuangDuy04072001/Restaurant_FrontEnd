import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const LazyLoadComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const style = {
    minHeight: "1px",
    visibility: inView ? "visible" : "hidden",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default LazyLoadComponent;
