import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBackground: "#202C37",
        lightBackground: "#FAFAFA",

        darkElement: "#2B3945",
        lightElement: "#FFFFFF",

        lightText: "#111517",
        darkText: "#FFFFFF",

        lightInput: "#858585",
      },
    },
  },
  plugins: [],
};
export default config;
