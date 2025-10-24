/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2F6CE5',
        'primary-600': '#2456B7',
        'sky': '#5AB8FF',
        'bg': '#ffffffff',
        'muted': '#fcfdffff',
        'accent': '#FFA54C',
        'text': '#1C2434',
        'text-muted': '#4B5563',
        'footer-navy': '#0B1B3F',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 8px 32px rgba(47, 108, 229, 0.1)',
      }
    },
  },
  plugins: [],
}