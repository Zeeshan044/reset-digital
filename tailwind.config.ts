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
          DEFAULT: "#82E8F2",
          dark: "#82E8F2",
          grey: "#D0D0D0",
          faq: "#111A21",
        },
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#1D2025",
        },
        body: {
          DEFAULT: "#D0D0D0",
          dark: "#111111",
        },
        card: {
          DEFAULT: "#FFFFFF",
          dark: "#292D32",
        },
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        archia: ["Archia", "sans-serif"],
        inter: ["Inter", "sans-serif"],
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
