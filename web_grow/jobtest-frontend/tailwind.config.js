/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        larger: "1440px",
      },
      height: {
        400: "400px",
        900: "900px",
      },
      display: ["responsive", "hover", "focus"],
      flex: ["responsive", "hover", "focus"],
      colors: {
        primary: "#2dce9c",
        "dark-green": "#07271D",
        "light-grey": "#f7f7f7",
        grey: "#f5f5f5",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        "outline-green": "0 0 0 3px rgba(0, 200, 150, 0.5)",
        light: "0 10px 15px rgba(255, 255, 255, 0.1)",
        'custom': '2px 0px 12px 8px rgba(0,0,0,0.1)', // Add your custom box-shadow here
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
      textColor: ["hover"],
      borderColor: ["hover"],
    },
  },
  plugins: [],
};