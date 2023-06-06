/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'light-blueXlavender': '#D2DAFF',
      'whitish-purple': '#EEF1FF',
      'blue-purple': '#B1B2FF',
      'sky-pastel-blue': '#AAC4FF'
    },},
  },
  plugins: [],
}

