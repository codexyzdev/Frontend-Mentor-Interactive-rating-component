/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      Orange: "hsl(25, 97%, 53%)",
      White: "hsl(0, 0%, 100%)",
      LightGrey: "hsl(217, 12%, 63%)",
      MediumGrey: "hsl(216, 12%, 54%)",
      DarkBlue: "hsl(213, 19%, 18%)",
      VeryDarkBlue: "hsl(216, 12%, 8%)",
    },
  },
  plugins: [],
};
