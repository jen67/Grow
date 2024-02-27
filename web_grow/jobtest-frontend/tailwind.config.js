/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2dce9c',
        'dark-green': '#07271D',
        'light-grey': '#f7f7f7',
        'grey': '#f5f5f5',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      boxShadow: { 
        'outline-green': '0 0 0 3px rgba(0, 200, 150, 0.5)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
      textColor: ['hover'],
      borderColor: ['hover'],
    },
  },
  plugins: [],
}