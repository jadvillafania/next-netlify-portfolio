"use client";
import React, { Children } from "react";
import { motion, useCycle } from "framer-motion";

const divMotion = {
  initial: {
    width: "2.5rem",
    transform: ["translateX(-1000%)", "translateY(-0%)"],
    transition: {
      delay: 1.5,
    },
  },
  expand: {
    width: "350px",
  },
};

const buttonMotion = {
  initial: {
    color: "#94a3b8",
    backgroundColor: "#94a3b8",
    x: 0,
  },
  expand: {
    color: "#1e293b",
    backgroundColor: "#fff",
    x: [0, 3, 0, 2, 0],
  },
};

const labelMotion = {
  initial: {
    color: "#94a3b8",
  },
  expand: {
    color: "#fff",
  },
};

export default function FancyButton(props) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.div
      variants={divMotion}
      initial="initial"
      animate={isOpen ? "expand" : "initial"}
      whileHover="expand"
      className={`relative isolate cursor-pointer flex gap-3 items-center ${props.className}`}
    >
      <motion.button
        onClick={() => toggleOpen()}
        className="rounded-full p-3 bg-white flex align-middle justify-center items-center z-10"
        variants={buttonMotion}
      >
        <i className={`${props.icon} text-appBlack`}></i>
      </motion.button>
      <motion.div
        className="text-sm md:text-base rounded-full"
        variants={labelMotion}
      >
        {props.children}
      </motion.div>
    </motion.div>
  );
}
