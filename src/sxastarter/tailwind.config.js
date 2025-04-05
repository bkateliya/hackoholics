/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'tailwindcss';
import path from 'path';
import fs from 'fs';

const configPath = path.resolve(process.cwd(), 'data', 'tailwind-config.json');
const configData = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: configData.colors,
    },
  },
  plugins: [],
};
