import { Lexend_Giga, Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lexend:["Lexend","sans-serif"],
        kanit:["Kanit", "sans-serif"],
        lexendexa: ["Lexend Exa", "sans-serif"],
        Montserrat:["Montserrat", "sans-serif"],
        Lexend_Giga:["Lexend Giga","sans-serif"]
      },
      backgroundImage: {
        backgroundGradient:"linear-gradient(180deg, #0A1045 53.93%, #0F197D 97.96%)",
        btnTextGradient : "linear-gradient(92deg, #F9774B 1%, #202A96 75.67%)",
        bgImgGradient:"linear-gradient(78deg, #D94E71 20.65%, #F9774B 80.41%)",
      },
      colors: {
        primary: "#0C1147",
        secondary: "#152090",
        ternary: "#F9774B",
        background:"rgba(62, 62, 62, 0.50)"

      }
    },
  },
  plugins: [],
};
export default config;
