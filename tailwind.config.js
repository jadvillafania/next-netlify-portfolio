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
        appGreen: "#0f7173", //caribbean green
        appRed: "#f05d5e", //bittersweet
        appOrange: "#d8a47f", //buff
      },
    },
  },
  plugins: [],
};
