"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TechStack(props) {
  const animVariant = {
    visible: { opacity: 1, transform: "translateY(0%)" },
    hidden: { opacity: 0, transform: "translateY(-100%)" },
  };

  return (
    <motion.div
      viewport={{ once: true }}
      variants={animVariant}
      initial="hidden"
      whileInView={{ opacity: 1, transform: "translateY(0%)" }}
      transition={{ delay: props.delay || 1 }}
      className="box flex flex-grow flex-col p-3 border rounded border-appGreen bg-appBlack w-1/3 md:w-1/5"
    >
      <label className="font-bold text-center text-white mb-3">
        {props.label}
      </label>
      {props.items.map((item) => {
        return (
          <span
            className="text-appBlack p-1 border border-appGreen rounded text-center bg-appGreen mb-1"
            key={item}
          >
            {item}
          </span>
        );
      })}
    </motion.div>
  );
}
