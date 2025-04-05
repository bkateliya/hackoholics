/** @type {import('tailwindcss').Config} */
import path from 'path';
import fs from 'fs';

const configPath = path.resolve(process.cwd(), 'data', 'tailwind-config.json');
const rawData = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: rawData,
  },
  plugins: [],
};
