/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
    extend: {
      fontFamily: {
        'sans': ['"Work Sans"', 'sans-serif'],
        'play': ['"Playfair Display"', 'serif']
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

