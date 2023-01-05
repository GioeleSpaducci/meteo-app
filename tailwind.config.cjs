/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '17r': '17rem'
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}
