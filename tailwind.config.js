/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./public/*.html"
  ],
  theme: {
    fontFamily: {
      'sans': ['Oleo Script', 'cursive'],
      'regular': ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "#914714",
      },
      padding: {
        small: "5px",
        normal:"15px",
      },
    },
  },
  plugins: [],
}

