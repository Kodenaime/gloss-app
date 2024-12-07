/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      white: "#ffffff",
      black: "#000",
      main: "#111731",
      blue: "#63add7",
      gray: "#708496",
      grayLight: "#f6f6f6"
    },
    fontFamily: {
      titi: ["Titillium Web", "serif"]
    }
  },
  plugins: [],
}
