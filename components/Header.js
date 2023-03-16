"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navigation() {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu(!menu);
  };

  const links = [
    { label: "about", href: "/about", external: false },
    { label: "experience", href: "/experience", external: false },
    { label: "projects", href: "/projects", external: false },
    // { label: "contact", href: "/", external: false },
    {
      label: "resume",
      href: "https://drive.google.com/file/d/1RICHTdPMNftDGv8E8VHdNwnycand3kRv/view?usp=sharing",
      external: true,
    },
  ];

  return (
    <>
      <nav
        id="site-header"
        className="container flex py-4 gap-4 items-center px-4 md:px-0 bg-appBlack"
      >
        <Link
          href={"/"}
          className="flex items-center gap-2 hover:text-slate-400"
        >
          <Image
            src="/site-logo-invert.png"
            width={40}
            height={40}
            alt="site-logo"
          ></Image>
          <span>John Villafania</span>
        </Link>
        <div className="hidden md:flex gap-4 ml-auto">
          {links.map((link) => {
            return (
              <Link
                className="hover:text-slate-400"
                href={link.href}
                key={link.label}
                target={link.external ? "_blank" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="md:hidden ml-auto">
          <button onClick={() => handleMenuClick()}>
            <FontAwesomeIcon icon={faBars} className="" />
          </button>
        </div>
      </nav>
      {menu && (
        <>
          <div className="overlay" onClick={handleMenuClick}></div>
          <div className={`mobile-nav bg-appBlack ${menu ? "is-open" : ""}`}>
            {links.map((link) => {
              return (
                <Link
                  className="hover:text-slate-400 text-lg my-2"
                  href={link.href}
                  key={link.label}
                  onClick={handleMenuClick}
                  target={link.external ? "_blank" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
