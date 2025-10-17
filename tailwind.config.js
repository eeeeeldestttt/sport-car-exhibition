/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // agar mencakup semua file di folder src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'brand-yellow': {
          400: '#facc15', // kuning terang
          500: '#eab308', // kuning gelap
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),       // styling form
    require('tailwind-scrollbar'),       // untuk scrollbar custom
  ],
}
