module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
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
