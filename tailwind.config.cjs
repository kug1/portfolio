/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'github-blue': '#58a6ff',
        'dark': "#0b0f10"
      },
      textDecorationThickness: {
        3: '3px',
      },
    },
  },
  plugins: [],
};
