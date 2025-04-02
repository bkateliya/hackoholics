/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        colorprimary: 'var(--main-bg-colo9r, #ff0000)',
      },
    },
  },
  plugins: [],
};

