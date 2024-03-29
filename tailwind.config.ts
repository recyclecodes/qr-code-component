import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "qr": "0 4px 6px -1px hsl(220,15%,55%)",
      },
      colors: {
        "qr-white": "hsl(0, 0%, 100%)",
        "light-gray": "hsl(212,45%,89%)",
        "grayish-blue":"hsl(220,15%,55%)",
        "dark-blue":"hsl(218,44%,22%)"
      },
    },
  },
  plugins: [],
};
export default config;
