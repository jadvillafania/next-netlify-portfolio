/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appBlack: "#272932", //raisin black
        appWhite: "#e7ecef", //anti-flash white
        appGreen: "#4EC9AB", //caribbean green
        appRed: "#f05d5e", //bittersweet
        appOrange: "#d8a47f", //buff
        appGray: "#37373D", //gray
        appAsh: "#2A2D2E",
        appDimWhite: "#CCCCCC", //dim white
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
