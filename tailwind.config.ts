import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#82E8F2",
          btn: "#786DFF4D",
          grey: "#D0D0D0",
        },
        secondary: {
          dark: "#1D2025",
          light: "#F5F5F5",
          cold: "#111111",
          box: "#292D32",
        },
      },
      backgroundImage: {
        "gradient-system-dark":
          "linear-gradient(3.95deg, #82E8F2 -19.7%, #1D2025 96.77%)",
        "gradient-system-light": "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
