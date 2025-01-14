/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'cell': 'inset 0 -8px 0 #10212a',
      } 
    },
  },
  plugins: [],
}

