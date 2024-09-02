/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '3px 3px 4.5px rgba(220, 147, 246, 0.5)', // x-offset, y-offset, blur-radius, color with opacity
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["light", "dark", "night"],
  },
} 