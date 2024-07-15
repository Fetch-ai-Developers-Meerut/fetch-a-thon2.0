import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xxs: "0.6rem",
      xs: "0.75rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    screens: {
      sm: "640px",
      lg: "1024px",
      "2xl": "1440px",
    },
    extend: {
      backgroundImage: {
        backgroundGradient:
          "linear-gradient(180deg, #0A1045 53.93%, #0F197D 97.96%)",
        btnTextGradient: "linear-gradient(92deg, #F9774B 1%, #202A96 75.67%)",

        button: "linear-gradient(92deg, #F9774B 1%, #202A96 75.67%)",
        navGradient:
          " linear-gradient(99deg, rgba(255, 255, 255, 0.13) -2.23%, rgba(255, 255, 255, 0.02) 108.31%)",
        primaryGradient: "linear-gradient(180deg, #0D1350 0%, #0F197D 100%)",
        secondaryGradient: "linear-gradient(180deg, #D94E71 0%, #F9774B 100%)",
      },
      colors: {
        primary: "#0D1350",
        secondary: "#F9774B",
        ternary: "#5F38FB",
        navbarBorder: "rgba(255, 255, 255, 0.22)",
        footer: "rgba(1, 14, 62, 0.30)",
        circle: "#11185F",
        glasseffect: "rgba(217, 217, 217, 0.11)",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        lexendexa: ["Lexend Exa", "sans-serif"],
      },
      screens: {
        "3xl": "1000px",
      },
    },
  },
  plugins: [],
};
export default config;
