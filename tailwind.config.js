/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        lilita: ['var(--font-lilita)', 'cursive'],
      },
      colors: {
        primary: '#007C91',
        secondary: '#00C2A8',
      },
    },
  },
  plugins: [],
}
