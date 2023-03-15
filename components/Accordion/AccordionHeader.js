"use client";

import React, { useEffect, useState } from "react";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";

export default function AccordionHeader(props) {
  const [isOpen, setIsOpen] = useState(0);
  const control = useAnimation();
  const animVariant = {
    rotate: { rotate: [0, 180] },
    default: { rotate: [180, 0] },
  };

  const handleClicked = (item) => {
    props.setActive(item);
  };

  return (
    <div className="accordion__header">
      <button onClick={() => handleClicked(props.item)}>
        <div className="flex flex-row">
          <motion.span
            variants={animVariant}
            initial={false}
            animate={{ rotate: props.item.isActive ? [0, 180] : [180, 0] }}
            style={{ width: "18px" }}
          >
            <FontAwesomeIcon icon={faChevronCircleDown}></FontAwesomeIcon>
          </motion.span>
          <span className="ml-2">{props.item.header}</span>
        </div>
      </button>
    </div>
  );
}
