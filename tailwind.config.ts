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
      },
      colors: {
        primary: "#0C1147",
        secondary: "#152090",
        ternary: "#F9774B",
        bl:"#D9D9D91C",
        grad:"#202A96"
      },
    },
  },
  plugins: [],
};
export default config;
