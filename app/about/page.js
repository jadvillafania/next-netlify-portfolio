import React from "react";

export default function pages() {
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
            className="flex flex-row flex-wrap gap-4 w-full md:w-3/4 "
          >
            <div
              id="client"
              className="flex flex-grow flex-col border p-3 rounded border-appGreen"
            >
              <h3 className="font-bold text-center text-white mb-3">
                Frontend
              </h3>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>Vue 3</span>
              <span>VueJS</span>
              <span>React</span>
              <span>NextJS</span>
              <span>Tailwind</span>
            </div>
            <div
              id="backend"
              className="flex flex-grow flex-col border p-3 rounded border-appGreen "
            >
              <h3 className="font-bold text-center text-white mb-3">Backend</h3>
              <span>PHP</span>
              <span>Laravel</span>
            </div>
            <div
              id="data"
              className="flex flex-grow flex-col border p-3 rounded border-appGreen "
            >
              <h3 className="font-bold text-center text-white mb-3">
                Database
              </h3>
              <span>MySQL</span>
              <span>MS SQL</span>
            </div>
            <div
              id="infra"
              className="flex flex-grow flex-col border p-3 rounded border-appGreen "
            >
              <h3 className="font-bold text-center text-white mb-3">Infra</h3>
              <span>Oracle Cloud</span>
              <span>Docker</span>
              <span>Linux</span>
            </div>
            <div
              id="services"
              className="flex flex-grow flex-col border p-3 rounded border-appGreen "
            >
              <h3 className="font-bold text-center text-white mb-3">Others</h3>
              <span>Git</span>
              <span>VS Code</span>
              <span>Vuetify</span>
              <span>Material Design</span>
              <span>Wordpress</span>
              <span>Oracle APEX</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
