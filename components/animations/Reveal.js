import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({ children, width = "fit-content" }) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
