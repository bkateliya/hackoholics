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
        primary1: '#350078',
        neutral1: '#FFFFFF',
        neutral6: '#000000',
        gray9: '#111827',
        gray7: '#374151',
        gray6: '#4b5563',
        gray3: '#d1d5db',
        gray5: '#6b7280',
        gray2: '#e5e7eb',
      },
      fontFamily: {
        monteserrate: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

