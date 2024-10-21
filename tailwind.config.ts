import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          100: "#1F1F33",
          200: "#3b3b52",
          300: "#1D43E0",
          400: "#14141A",
          500: "#2F2F40",
          600: "#2B2B46",
          700: "#1D1D2F",
          800: "#11111D",
          900: "#1E1E29",
        },
        sub: {
          400: "#3C0CA6",
          500: "#ADFF00",
          600: "#FF8A00",
          700: "#3290FF",
          800: "#2F58FE",
          900: "#B56BFF",
        },
      },
      screens: {
        medium: "1921px", //1920이하
        small: "961px", //960이하
      },
    },
  },
  plugins: [],
};

export default config;
