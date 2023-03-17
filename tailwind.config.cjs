/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        brand: "#e0494a",
      },
      fontFamily: {
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        brand: ["var(--font-brand)", ...defaultTheme.fontFamily.sans],
      },
      blur: {
        xs: "2px",
      },
      keyframes: (theme) => ({
        "animate-blur": {
          "0%": {
            filter: "blur(5px)",
          },
          "100%": {
            filter: "blur(0px)",
          },
        },
        "animate-up": {
          "0%": {
            transform: `translateY(${theme("spacing.4")})`,
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        "animate-opacity": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      }),
      animation: {
        up: "animate-up 0.75s ease-in-out both",
        blur: "animate-blur 0.75s ease-in-out both, animate-opacity 0.75s ease-in-out both",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
    require("@tailwindcss/typography"),
  ],
};
