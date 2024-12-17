import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      "main-bg": "url('/background.png')",
      "out-bg": "url('/out-background.png')",
    },
    extend: {
      screens: {
        sm: "480px",
      },
      colors: {
        primary: "#2477a6",
        secondary: "#9bd3eb",
        tertiay: "#D8EFFF",
        quaternary: "#F0F8FF",
        warn: "#ff5449",
        disable: "#d9d9d9",
        black: "#111111",
        white: "#ffffff",
        gray: "#dadada",
        darkgray: "#5e5454",
      },
      fontFamily: {
        regular: ["var(--font-regular)"],
        bold: ["var(--font-bold)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
