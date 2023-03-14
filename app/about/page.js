import TechStack from "@components/TechStack";
import React from "react";

export const metadata = {
  description:
    "Page where prospective employers and/or clients go to learn about me.",
};

export default function pages() {
  const frontend = [
    "JavaScript",
    "TypeScript",
    "Vue",
    "React",
    "NextJS",
    "Tailwind",
  ];

  const backend = ["PHP", "Laravel", "C#"];

  const databases = ["MySQL", "MS SQL"];

  const others = ["Oracle Cloud", "Docker", "Linux", "Git", "Wordpress"];

  return (
    <>
      <main className="relative overflow-hidden">
        <div className="container px-4 md:mx-auto py-32 text-slate-400">
          <div className="w-3/4 text-lg">
            <h1 className="text-5xl mb-12 text-white">About Me</h1>
            <p className="mb-2">
              My name is <b className="text-appGreen">John Villafania</b> and I
              love to help people build stuff on the web.
            </p>
            <p className="mb-2">
              My interest in programming starts at a young age when I started
              playing video games.
              <br /> I was curious on how it was made and how it works.
            </p>
            <p className="mb-2">
              I earned my degree in{" "}
              <b className="text-appGreen">
                Bachelors of Science in Computer Engineering
              </b>{" "}
              on March 2013.
            </p>
            <p className="mb-12">
              Since then, I have been creating applications on the web.
            </p>
            <p className="mb-2">
              Here are the technologies that I've been working with:
            </p>
          </div>
          <div
            id="techstack"
            className="flex flex-row overflow-hidden flex-wrap gap-4 w-full md:w-3/4"
          >
            <TechStack label="Frontend" items={frontend} delay={1}></TechStack>
            <TechStack label="Backend" items={backend} delay={0.6}></TechStack>
            <TechStack
              label="Database"
              items={databases}
              delay={1.2}
            ></TechStack>
            <TechStack label="Others" items={others} delay={0.8}></TechStack>
          </div>
        </div>
      </main>
    </>
  );
}
