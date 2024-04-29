import Accordion from "@components/Accordion/Accordion";
import Image from "next/image";
import React from "react";

export default function page() {
  const items = [
    {
      id: 1,
      header: "Rongelap Atoll Local Government - Sensus System",
      body: "Online sensus system for the constituents of Rongelap Atoll Local Government at Marshall Islands.",
      image: "/ralgov-census.png",
      technologies: ["PHP", "Laravel", "VueJS", "MySQL"],
      url: "census.ralgov.com",
    },
    {
      id: 2,
      header: "Helpdesk Ticketing System",
      body: "A web-based ticketing system used to track client requests. Develop to replace a legacy system. The system has the capacity to handle multiple user domains, multiple support groups and perform scheduled tasks.",
      image: "/helpdesk-1.jpg",
      technologies: ["PHP", "Laravel", "VueJS", "MySQL"],
      url: "#",
    },
    {
      id: 3,
      header: "Portfolio Website",
      body: "A personal portfolio website.",
      image: "/portfolio-1.png",
      technologies: ["React", "NextJS", "Netlify"],
      repo: "https://github.com/jadvillafania/next-netlify-portfolio",
      url: "https://johnvillafania.dev",
    },
    {
      id: 4,
      header: "CMI Alumni Survey",
      body: "A survey creation tool created to replace Google Forms due to some limitations. It is capable of rending questions can be rendered based on answers to other questions. This is used to run surveys for alumni of College of the Marshall Islands.",
      image: "/tracer-1.JPG",
      technologies: ["Laravel", "VueJS", "MySQL"],
      url: "https://alumnitracer.cmi.edu",
    },
  ];

  return (
    <>
      <main className="relative overflow-hidden">
        <div className="container px-4 md:mx-auto py-32 text-slate-400">
          <div className="w-full text-lg">
            <h1 className="text-5xl mb-12 text-white">Things I Built</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {items.map((item) => (
                <div key={item.id}>
                  <a
                    href={item.url}
                    target="_blank"
                    className="p-3 hover:cursor-pointer block"
                  >
                    <div
                      className="rounded-xl overflow-hidden relative mb-2 md:h-60 h-28
                    "
                    >
                      <Image
                        src={item.image}
                        fill
                        alt="banner image"
                        role="presentation"
                        className="hover:scale-110 transition-all"
                        style={{ objectFit: "cover", objectPosition: "top" }}
                      ></Image>
                    </div>
                    <div className="text-appWhite mb-2">{item.header}</div>
                    <div className="text-base mb-3">{item.body}</div>
                    <div className="text-sm">
                      <i>{item.technologies.join(", ")}</i>
                    </div>
                  </a>
                  {item.repo != undefined && (
                    <div className="mt-3 mb-1 ml-3">
                      <a
                        className="text-sm text-appGreen px-3 py-2 bg-gray-700 rounded-sm hover:bg-gray-600"
                        href={item.repo}
                        target="_blank"
                      >
                        link to repository
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
