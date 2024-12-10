import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgPreHeader: "#f6f6f6",
        menuColor: "#7F7F7F",
        colorMenuItem: "#173097"
      },
    },
  },
  plugins: [],
} satisfies Config;
