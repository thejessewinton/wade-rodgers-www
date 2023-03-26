/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
      },
      blur: {
        xs: "2px",
      },
      backgroundImage: {
        arrow:
          "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1NSAyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTUgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBvbHlnb24gc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkOyIgcG9pbnRzPSI0My4zLDAgNTUsMTAgNDMuMywyMCA0Mi40LDE5LjEgNTIuMiwxMC43IDAsMTAuNyAwLDkuMyA1Mi4yLDkuMyAKCTQyLjQsMC45IDQzLjMsMCAiLz4KPC9zdmc+Cg==')",
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
      aspectRatio: {
        widescreen: "3/1",
      },
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
