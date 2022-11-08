/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
    },
    screens: {
      mobile: '400px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',    
    },
  },
  plugins: [],
}
