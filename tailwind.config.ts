import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "clamp(12px, 2.0vh, 28px)",
      base: "clamp(16px, 2.3vh, 28px)",
      lg: "clamp(18px, 2.4vh, 28px)",
      xl: "clamp(20px, 2.6vh, 28px)",
      "2xl": "clamp(22px, 3vh, 28px)",
      "3xl": "clamp(26px, 4vh, 48px)",
      "4xl": "clamp(30px, 5vh, 58px)",
      "5xl": "clamp(48px, 10vh, 68px)",
    },
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
