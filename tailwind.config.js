/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDarkGrey: "#373A40",
        primaryLightGrey: "#686D76",
        primaryDarkOrange: "#DC5F00",
        primaryWhite: "#F5F7F8"
      }
    },
  },
  plugins: []
}

