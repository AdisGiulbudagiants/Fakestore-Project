/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontWeight: { regular: '400', medium: '500', semibold: '600', bold: '700' },
    extend: {},
  },
  plugins: [],
}
