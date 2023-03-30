// app/layout.js
import "@styles/globals.scss";
import Header from "@components/Header";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import style from "./style.module.css";
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>John Villafania</title>
        <link
          rel="icon"
          href="/favicon/favicon.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon-invert/favicon.ico"
          media="(prefers-color-scheme: dark)"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <div>
          <svg
            className={style.svg}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 100 100"
          >
            <path
              fill="#00000008"
              className={style["out-top"]}
              d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
            />
            <path
              fill="#00000008"
              className={style["in-top"]}
              d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
            />
          </svg>
          <Header></Header>
          {children}
        </div>
      </body>
    </html>
  );
}
