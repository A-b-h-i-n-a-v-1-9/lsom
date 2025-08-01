/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
  animation: {
    'ping-once': 'pingOnce 1s ease-in-out',
  },
  keyframes: {
    pingOnce: {
      '0%': { transform: 'scale(1)', opacity: '1' },
      '50%': { transform: 'scale(1.5)', opacity: '0.5' },
      '100%': { transform: 'scale(1)', opacity: '1' },
    },
  },
},
  },
  plugins: [],
};
