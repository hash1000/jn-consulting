import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      clipPath: {
        hexagon: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        "hexagon-border":
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%, 50% 0%, 50% 10px, 10px calc(25% + 5px), 10px calc(75% - 5px), 50% calc(100% - 10px), calc(100% - 10px) calc(75% - 5px), calc(100% - 10px) calc(25% + 5px), 50% 10px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
