/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/js/script.js', './**/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage:{
        'mobile': 'url("../../assets/images/mobile.jpg")',
        'desktop': 'url("../../assets/images/desktop1.jpg")',
        'arrow-icon': 'url("../../assets/images/icon-arrow.svg")'
      },
      fontFamily:{
        'silk': "'Silkscreen', sans-serif"
      }
    },
  },
  plugins: [],
}

