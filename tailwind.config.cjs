/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      //add clash display font
      display: ["Clash Display", "sans-serif"],
    },
    colors: {
      "white": "#FFFFFF",
      "blue": "#190E55",
      "light-blue": "#90D6F7",
      "purple": "#9D78FD",
    },
    extend: {
    },
  },
  plugins: [],
}