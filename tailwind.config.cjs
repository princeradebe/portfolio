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
    extend: {
      colors: {
        "brand-blue": "#190E55",
        "brand-blue-dark": "#0B0046",
        "brand-light-blue": "#90D6F7",
        "brand-magenta": "#9D78FD",
      },
    },
  },
  plugins: [],
}