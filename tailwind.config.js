/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color" : "#4359E1",
        "secondary-color" : "#111B21",
        "blue-color" : "#3762FD",
        "header-color" : "#03349C",
      }
    },
  },
  plugins: [],
}