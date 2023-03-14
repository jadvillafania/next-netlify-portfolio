import style from "./style.module.css";

export const metadata = {
  description: "Portfolio landing page.",
};

export default function Home() {
  return (
    <>
      <main className="h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto">
          <div className="w-3/5 ml-5 text-lg overflow-hidden">
            <h1 className={`text-5xl mb-5 ${style.name}`}>John Villafania</h1>
            <p className={`text-slate-400 ${style.caption}`}>
              I am <b className="text-appGreen">Full Stack Developer</b>{" "}
              passionate in bringing ideas to life using web technologies. I
              communicate effectively with clients to comprehend their needs and
              turn them into comprehensive system requirements.
            </p>
          </div>
        </div>

        {/* <div className=""
          style={{
            position: "absolute",
            right: -1000,
            bottom: -430,
            background: "#0f7173",
            height: 1000,
            width: 1200,
            transform: "rotate(-30deg)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            right: -1080,
            bottom: -450,
            background: "#fff",
            height: 1000,
            width: 1200,
            transform: "rotate(-30deg)",
          }}
        ></div> */}
        {/* <div
          style={{
            position: "absolute",
            right: -900,
            bottom: -700,
            background: "#0f7173",
            height: 1000,
            width: 1200,
            transform: "rotate(-30deg)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            right: -980,
            bottom: -700,
            background: "#fff",
            height: 1000,
            width: 1200,
            transform: "rotate(-30deg)",
          }}
        ></div> */}
        {/* <div style={{ position: "absolute", right: -50, bottom: -100 }}>
          <Image
            src="/site-logo.png"
            width={500}
            height={500}
            role="presentation"
            alt="site-logo-invert"
          ></Image>
        </div> */}
      </main>
    </>
  );
}
