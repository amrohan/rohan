/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        text: "#dff1f1",
        background: "#071111",
        primary: "#9bd4d1",
        secondary: "#653274",
        accent: "#a6c34e",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
