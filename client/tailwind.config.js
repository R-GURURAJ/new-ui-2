/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),
    require('tailwind-scrollbar-hide'),
  ],
  
  daisyui: {
    themes: ["night", "nord", "sunset"],
  },
}

