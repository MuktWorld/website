/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Bebas Neue Pro"', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#2C2C2C',   
        secondary: '#007BFF', 
      },
    },
  },
  plugins: [],
};
