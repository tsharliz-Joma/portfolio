const { transform } = require("next/dist/build/swc");
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "430px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
        "2xl": "1400px",
      },
      spacing: {
        xxs: ".5rem",
        xs: ".75rem",
        sm: "1rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
        xxl: "4rem",
        xxxl: "5rem",
        xxxxl: "7.5rem",
        xxxxxl: "10rem",
        xxxxxxl: "12.5rem",
        btn: "0.5rem 0.75rem",
      },
      boxShadow: {
        "custom-shadow": "0px 5px 15px #00000026",
        "custom-blur": "0px 5px 25px rgba(255, 255, 255, 0.3)",
      },
      backgroundColor: {
        "custom-transparent": "transparent",
        "custom-black-transparent": "rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "skytopia-mobile": 'url("/static/img/skytopia-mobile.jpeg")',
        "skytopia-desktop": 'url("/static/img/skytopia-desktop.jpeg")',
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideUp: {
          "100%": { transform: "translateY(-100%)" },
          "0%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slideDown: `slideDown 300ms ease-out forwards`,
        slideUp: `slideUp 300ms ease-in forwards`,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "0.625rem",
          md: "2rem",
          lg: "4rem",
          xl: "0.625rem",
          "2xl": "0.625rem",
        },
        screens: {
          mobile: "430px",
          tablet: "640px",
          laptop: "1024px",
          desktop: "1280px",
          "2xl": "1400px",
        },
      },
      borderRadius: {
        base: "25px",
      },
      padding: {
        base: "25px",
      },
      margin: {
        base: "25px",
      },
      maxHeight: {
        624: "624px",
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        grey: "#282828",
        red: "#ff0222",
        charcoal: "#333333",
        secondary_charcoal: "#282828",
        paper: "#424242",
        "border-green": "#008000",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        anta: ["Anta", "sans-serif"],
        exo: ["Exo", "sans-serif"],
        jaro: ["Jaro", "sans-serif"],
        jersey: ["Jersey", "sans-serif"],
        permanentMaker: ["Permanent Marker", "cursive"],
        rockSalt: ["Rock Salt", "cursive"],
        yarndings: ["Yarndings", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
