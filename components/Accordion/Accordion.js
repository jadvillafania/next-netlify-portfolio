"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import AccordionHeader from "./AccordionHeader";

export default function Accordion(props) {
  const [activeItem, setActiveItem] = useState(null);

  const [accordionitems, setAccordionItems] = useState(
    props.items.map((item) => ({
      isActive: false,
      ...item,
    }))
  );

  useState(() => {
    const list = [...accordionitems];
    const item = list[0];
    item.isActive = true;
    setAccordionItems(list);
  }, []);

  const handleHeaderClicked = (item) => {
    const list = [...accordionitems];
    const currentActive = list.find((o) => o.isActive);

    if (currentActive?.id == item.id) {
      currentActive.isActive = false;
      setAccordionItems(list);
      return;
    }

    list.forEach((o) => (o.isActive = false));
    const _item = list.find((o) => o.id == item.id);
    if (!!_item) _item.isActive = true;

    setAccordionItems(list);
  };

  return (
    <>
      <div className="accordion">
        {accordionitems.map((item) => {
          return (
            <div key={item.id} className="accordion__wrapper">
              <AccordionHeader
                item={item}
                setActive={handleHeaderClicked}
              ></AccordionHeader>
              <AnimatePresence initial={false}>
                {item.isActive && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <div className="accordion__body">{item.body}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </>
  );
}
