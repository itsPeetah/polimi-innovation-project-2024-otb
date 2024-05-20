import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bold: {
          bg: "#d97307",
          text: "#ffffff",
        },
        fearless: {
          bg: "#b8b0a9",
          text: "#1e1e1e",
        },
        dauntless: {
          bg: "#ebd807",
          text: "#3b3a37",
        },
        intrepid: {
          bg: "#b9f2ff",
          text: "#2e3638",
        },
      },
    },
  },
  plugins: [],
};
export default config;
