/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "!./node_modules/**" ],
  theme: {
    extend: {
      colors: {
        primary: "#BA0000",
        adminbg: "#FDFBFB",
        secondary: "rgba(255, 255, 255, 0.2)",
        tertiary: "rgba(174, 24, 24, 0.66)",
        background: "#0D0D0D",
        successgreen: "rgba(15, 186, 0, 0.15)",
        danger: "rgba(229, 9, 9, 0.2)",
        invalid: "rgba(255, 200, 0, 0.2))",
        newgray: "#c8c8c8",
        admingray: "#1E1E1F",
        inputline: "rgba(255, 255, 255, 0.2)",
        splash: "rgba(174, 24, 24, 0.66)",
        textgrey: "#1D1D1D",
        glass: "rgba(255, 255, 255, 0.04)",
        pending: "#FF7D01",
        paid: "#34C759",
        admininput: "hsba(240, 3%, 12%, 0.12)",
      },
      boxShadow: {
        sm: "0px 0px 2px rgba(0, 0, 0, 0.05)",
        md: "0px 0px 6px rgba(106, 78, 78, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.06)",
        lg: "0px 0px 15px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.05)",
        xl: "0px 0px 25px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.04)",
        "2xl": "0px 0px 50px rgba(0, 0, 0, 0.25)",
        "3xl": "0px 0px 50px rgba(0, 0, 0, 0.3)",
        'new': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        none: "none",
      },
      screens: {
        "1xl": "1280px",
        "2xl": "1440px",
      },
      maxWidth: {
        "screen-2xl": "1440px",
        "screen-1xl": "1280px",
      },
      lineHeight: {
        "extra-tight": "1.1px",
        "extra-loose": "110px",
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'], 
        meutasRegular: ["Meutas Regular", "sans-serif"],
        meutasLight: ["Meutas Light", "sans-serif"],
        meutasThin: ["Meutas Thin", "sans-serif"],
        meutasBold: ["Meutas Bold", "sans-serif"],
        meutasBlack: ["Meutas Black", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      ringColor: ["focus"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".body-fixed": {
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          overflow: "hidden",
        },
      });
    },
  ],
};
