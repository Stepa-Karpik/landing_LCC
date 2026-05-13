import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Source Sans 3"', '"Source Sans Pro"', "system-ui", "sans-serif"],
        body: ['"Source Sans 3"', '"Source Sans Pro"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1440px",
      },
    },
  },
  plugins: [],
} satisfies Config;
