// app/layout.js
import "@styles/globals.scss";
import Header from "@components/Header";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>John Villafania</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
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
      </head>
      <body>
        <div>
          <Header></Header>
          {children}
        </div>
      </body>
    </html>
  );
}
