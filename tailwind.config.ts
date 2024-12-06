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
        primary: "#2477a6",
        secondary: "#9bd3eb",
        warn: "#ff5449",
        disable: "#d9d9d9",
        background: "#f0f8ff",
        black: "#111111",
        white: "#ffffff",
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
