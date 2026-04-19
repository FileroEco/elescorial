/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pergamino: '#faf6f0',
        hueso: '#f0ebe3',
        sepia: '#8b7355',
        tinta: '#2c2419',
        borgoña: '#6b1d2a',
        dorado: '#b8860b',
        'dorado-claro': '#d4a843',
        granito: '#5a5a5a',
        'verde-escorial': '#2d5016',
      },
      fontFamily: {
        display: ['EB Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
