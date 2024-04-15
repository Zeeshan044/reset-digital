import React from "react";
import { motion } from "framer-motion";

function fadeInMotion(WrappedComponent: React.ComponentType<any>) {
  const ComponentWithAnimation: React.FC<any> = (props) => (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.8 }}
    >
      <WrappedComponent {...props} />
    </motion.div>
  );

  ComponentWithAnimation.displayName = `fadeInMotion(${getDisplayName(
    WrappedComponent
  )})`;

  return ComponentWithAnimation;
}

function getDisplayName(WrappedComponent: React.ComponentType<any>) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default fadeInMotion;
