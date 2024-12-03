import type { Config } from "tailwindcss";
import { PluginAPI } from 'tailwindcss/types/config';

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
      },
    },
  },
  plugins: [
    function (api: PluginAPI) {
      const { addUtilities } = api;
      const newUtilities = {
        ".scrollbar-hidden": {
          "-ms-overflow-style": "none", /* IE 10+ */
          "scrollbar-width": "none", /* Firefox */
          "&::-webkit-scrollbar": {
            display: "none", /* Chrome, Safari, and Edge */
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
