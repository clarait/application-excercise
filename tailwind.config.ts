import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        brutalist: "-8px 8px 0 #000",
      },
    },
  },
  plugins: [],
} satisfies Config;
