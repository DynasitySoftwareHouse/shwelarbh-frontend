/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  
  plugins: [require('daisyui')],
}

// module.exports = {
 
//   content: ['node_modules/daisyui/dist/**/*.{js,jsx,ts,tsx}', 'node_modules/react-daisyui/dist/**/*.{js,jsx,ts,tsx}'],
//   plugins: [require('daisyui')],
// }