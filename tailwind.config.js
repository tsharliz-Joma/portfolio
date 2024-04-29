/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "0.625em",
          sm: "2rem",
          lg: "4rem",
          xl: "0.625rem",
          "2xl": "0.625rem",
        },
        screens: {
          "2xl": "1400px",
          desktop: "1280px",
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
      colors: {
        black: "#000000",
        white: "#ffffff",
        grey: "#282828",
        red: "#ff0222",
        charcoal: "#333333",
        secondary_charcoal: "#282828",
        paper: "#424242",
      },
      fontFamily: {
        anta: ["Anta", "sans-serif"],
        exo: ["Exo", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
