import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-orange": "#EA815D",
      },
    },
  },
  plugins: [],
} satisfies Config;
