/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      screens: {
        xl: '1440px',
        lg: '1280px',
        md: '1024px',
        sm: '768px',
        xs: '375px',
      },
      colors: {
        colorprimary: 'var(--main-bg-color, #ff0000)',
      },
      fontFamily: {
        monteserrate: ['"Montserrat"', "sans-serif"]
      }
    },
  },
  plugins: [],
};

