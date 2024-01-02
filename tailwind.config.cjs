/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    fontFamily: {
      sans: [
        '-apple-system',
        'Inter',
        'ui-sans-serif',
        'system-ui',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      serif: [
        'Libre Baskerville',
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
    },
  },
  plugins: [],
};
