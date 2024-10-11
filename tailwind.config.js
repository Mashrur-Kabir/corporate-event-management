/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: "'Ubuntu', sans-serif",
        poppins: "'Poppins', sans-serif"
      },
      screens: {
        'w700': '700px', // Custom breakpoint at 700px
      },
      colors: {
        'custom-pink': 'rgba(247, 0, 104)',
        'custom-blue': 'rgba(68, 16, 102, 1)',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotateTwice: 'rotate 0.8s ease-in-out',
      },
    },
  },
  plugins: [],
}
