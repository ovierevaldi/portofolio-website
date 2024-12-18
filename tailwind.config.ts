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
        ['primary-blue']: '#19ADE3',
        ['primary-gray']: '#252F35',
        ['primary-yellow']: '#EAC435',
        ['primary-mint']: '#03CEA4',
        ['primary-tomato']: '#FB4D3D'
      },
    },
  },
  plugins: [],
} satisfies Config;
