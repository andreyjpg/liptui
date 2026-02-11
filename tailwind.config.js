/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        redCustom: '#ff3b5f',
        greenCustom: '#4ade80',
        blueCustom: '#60a5fa',
        yellowCustom: '#fbbf24',
        purpleCustom: '#a78bfa',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
