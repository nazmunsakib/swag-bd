import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#171310",
          soft: "#3D362E",
          muted: "#57503F",
        },
        mist: "#6F665A",
        stone: "#A3998A",
        line: "#E6DFD1",
        paper: {
          DEFAULT: "#F7F4ED",
          deep: "#EFE9DD",
        },
        clay: {
          DEFAULT: "#AE4818",
          deep: "#8E3A12",
          tint: "#F4E9E0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3rem, 6vw, 5.5rem)",
          { lineHeight: "0.98", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(2.4rem, 4.5vw, 4rem)",
          { lineHeight: "1", letterSpacing: "-0.025em" },
        ],
        "display-md": [
          "clamp(1.9rem, 3vw, 2.75rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        heading: [
          "clamp(1.4rem, 2vw, 1.85rem)",
          { lineHeight: "1.15", letterSpacing: "-0.015em" },
        ],
      },
      maxWidth: {
        measure: "68ch",
      },
      letterSpacing: {
        label: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;