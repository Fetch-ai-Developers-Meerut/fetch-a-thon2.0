
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
      backgroundImage: {
        backgroundGradient:
          "linear-gradient(180deg, #0A1045 53.93%, #0F197D 97.96%)",
        btnTextGradient : "linear-gradient(92deg, #F9774B 1%, #202A96 75.67%)",
        // nav:"linear-gradient(180deg, #0A1045 36%, #0F197D 97.96%)",
        button:"linear-gradient(92deg, #F9774B 1%, #202A96 75.67%)",
        resnav:" linear-gradient(91deg, #0C1147 0.59%, #171E67 99.3%)"
      },
      colors: {
        primary: "#0C1147",
        secondary: "#152090",
        ternary: "#F9774B",
        footer:"rgba(1, 14, 62, 0.30)",
        circle:"#11185F"
      },
      fontFamily:{
        lexend:["Lexend","sans-serif"],
        kanit:[ "Kanit", "sans-serif"],
        lexendexa: ["Lexend Exa", "sans-serif"]
      },
      screens:{
        '3xl':"1000px"
      }
    },
  },
  plugins: [],
};
export default config;