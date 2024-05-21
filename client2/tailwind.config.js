/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  darkMode: "class",
  content: ["./index.css", "./src/**/*.{ts,js,jsx,tsx}"],
  theme: {
    screens: {
      xs: "366px",
      mx: "650px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        orbitron: ["Orbitron"],
        righteous: ["righteous"],
      },
    },
  },
  plugins: [],
};

