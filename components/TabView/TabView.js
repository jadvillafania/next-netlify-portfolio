"use client";

import style from "./style.module.css";
import React, { useEffect, useState } from "react";
import TabBody from "./TabBody";
import TabNavi from "./TabNavi";
import md from "markdown-it";

export default function TabView(props) {
  const [activeItem, setActiveItem] = useState(null);

  const handleNaviClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    setActiveItem(props.items[0]);
  }, []);

  return (
    <div className={style.tabview}>
      <div className={style.tabview__navigation}>
        <b className="p-3 text-sm uppercase text-slate-100">{props.header}</b>
        {props.items.map((work) => {
          return (
            <button
              key={work.id}
              onClick={() => handleNaviClick(work)}
              className={`py-2 pl-6 block text-sm text-left ${
                activeItem?.id == work.id
                  ? "text-appGreen bg-appGray"
                  : "hover:bg-appAsh text-appDimWhite"
              }`}
            >
              {work.label}
            </button>
          );
        })}
      </div>
      <div className="w-4/5 min-h-screen text-appWhite overflow-hidden relative">
        {props.items.map((item) => {
          return (
            <div
              key={item.id}
              className={`tabview__body ${
                activeItem?.id == item.id ? "active" : "inactive"
              }`}
              dangerouslySetInnerHTML={{
                __html: md({ html: true }).render(item.body),
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
