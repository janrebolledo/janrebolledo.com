/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  extend: {},
  theme: {
    fontFamily: {
      sans: [
        "-apple-system",
        "PP Neue Montreal",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      serif: [
        "PP Editorial Old",
        "Libre Baskerville",
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
