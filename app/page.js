import FancyButton from "@components/FancyButton";
import style from "./style.module.css";
export const metadata = {
  description: "Portfolio landing page.",
};

export default function Home() {
  return (
    <>
      <main className="h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto">
          <div className="w-4/5 md:w-3/5 ml-5 text-lg overflow-hidden">
            <h1 className={`text-5xl mb-5 ${style.name}`}>John Villafania</h1>
            <p className={`text-slate-400 ${style.caption}`}>
              I am <b className="text-appGreen">Full Stack Developer</b>.
            </p>
            <p className={`text-slate-400 ${style.caption}`}>
              I use web technologies to create responsive web applications.
            </p>
            <div className="mt-3">
              <FancyButton icon="bx bxl-google" className="mb-3">
                <span>johnarnoldvillafania@gmail.com</span>
              </FancyButton>
              <FancyButton icon="bx bxl-linkedin" className="mb-3">
                <a
                  href="https://www.linkedin.com/in/john-villafania/"
                  target="_blank"
                >
                  <span className="whitespace-nowrap">/in/john-villafania</span>
                </a>
              </FancyButton>
              <FancyButton icon="bx bxl-github" className="">
                <a href="https://github.com/jadvillafania" target="_blank">
                  <span className="whitespace-nowrap">jadvillafania</span>
                </a>
              </FancyButton>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
