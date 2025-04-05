const fs = require('fs');
const path = require('path');

const configPath = path.resolve(process.cwd(), 'data', 'tailwind-config.json');
const rawData = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

const tailwindConfig = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: rawData,
  },
  plugins: [],
};

// Define the path to save the Tailwind config
const configPath2 = path.resolve(process.cwd(), 'tailwind.config.js');

// Write the config data to a JavaScript file
fs.writeFileSync(configPath2, `module.exports = ${JSON.stringify(tailwindConfig, null, 2)};`);
