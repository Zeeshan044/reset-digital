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
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        background: "var(--color-background)",
        body: {
          DEFAULT: "var(--color-body)",
        },
        card: "var(--color-card)",
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
