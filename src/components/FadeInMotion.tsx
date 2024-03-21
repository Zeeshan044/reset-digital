import React from "react";
import { motion } from "framer-motion";

function FadeInMotion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInMotion;
