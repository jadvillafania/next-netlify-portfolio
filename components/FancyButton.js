"use client";
import React from "react";
import { motion, useCycle } from "framer-motion";

const divMotion = {
  initial: {
    width: "2.5rem",
  },
  expand: {
    width: "350px",
  },
};

const labelMotion = {
  initial: {
    color: "red",
    width: "0px",
    x: -5,
  },
  expand: {
    color: "yellow",
    width: "100%",
    x: 0,
    paddingLeft: "3.5rem",
    paddingRight: "2.5rem",
  },
};

export default function FancyButton() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.div
      variants={divMotion}
      initial="initial"
      animate={isOpen ? "expand" : "initial"}
      className="relative isolate cursor-pointer"
    >
      <div
        onClick={() => toggleOpen()}
        className="rounded-full h-10 w-10 bg-white flex align-middle justify-center items-center z-10"
      >
        <i className="bx bxl-google text-appBlack"></i>
      </div>
      <motion.div
        variants={labelMotion}
        className="ml-2 bg-red-500 overflow-hidden absolute left-0 -z-10 rounded-full"
        style={{ top: "6px" }}
      >
        johnarnoldvillafania@gmail.com
      </motion.div>
    </motion.div>
  );
}
