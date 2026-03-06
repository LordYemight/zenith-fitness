import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#2A2A2A",
        accent: "#FF4500",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;