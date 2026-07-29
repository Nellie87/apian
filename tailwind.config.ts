import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        script: ["var(--font-caveat)", "cursive"],
        sans: ["var(--font-outfit)", "Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        yellow: "#FFD237",
        "yellow-deep": "#E8A812",
        orange: "#E87A1A",
        "orange-deep": "#D4650F",
        ink: "#2A1A12",
        "ink-muted": "#6B5A4E",
        cream: "#FFFFFF",
        mist: "#F6F6F6",
      },
    },
  },
  plugins: [],
};

export default config;
