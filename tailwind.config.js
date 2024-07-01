/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#86D72F',
        secondary: '#007A05',
        brown: '#7D4533',
        vert: '#CCFFB0',
        gray: '#999999',
        graay: '#D9D9D9',
        vertt: '#00B207'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '25px 25px 90px rgba(0, 0, 0, 0.5)', // Adjust the color and opacity as needed
      },
    },
  },
  plugins: [],
}
