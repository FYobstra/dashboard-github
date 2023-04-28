/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark" : "#161c24",
        "bg-light" : "#fefeff",
        "cards-bg-dark" : "#212b36",
        "cards-bg-light" : "#ffffff",
        "text-color-dark" : "#ffffff",
        "text-color-light" : "#212b36",
        "color-primary" : "#36b37e"
      }
    },
  },
  plugins: [],
}