import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--white-bg)",
        primary: "var(--primary-blue)",
        accent: "var(--accent-red)",
        gray: "var(--gray)",
      }, 
    },
  },
  plugins: [],
} satisfies Config;
