/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-grey': '#d2d1cf',
        'brand-black': '#000000',
        'brand-offwhite': '#f8f7f6',
        'brand-gold': '#ac925e',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};