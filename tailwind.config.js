
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index1.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      keyframes: {
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-down': 'fadeDown 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}

