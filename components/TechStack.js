"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function TechStack(props) {
  const animVariant = {
    visible: { opacity: 1, transform: "translateY(0%)" },
    hidden: { opacity: 0, transform: "translateY(-100%)" },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={animVariant}
      initial="hidden"
      animate={control}
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
