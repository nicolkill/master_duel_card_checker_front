/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'navbar': '7vh',
        'restscreen': '93vh',
        'halfscreen': '50vh',
        'footer': '20vh',
      },
      minWidth: {
        '100px': '100px',
      },
      minHeight: {
        'restscreen': '90vh',
      },
      maxHeight: {
        'modalcontent': '50vh',
        'list': '90vh',
      },
      fontSize: {
        '2xs': '0.5rem',
      },
      colors: {
        "back": {
          100: "#1B2430",
          200: "#3a4d67",
          300: "#59779f",
        },
        "primary": {
          100: "#51557E",
          200: "#5c6190",
          300: "#6b70a0",
          400: "#7d81ac",
          500: "#9093b7",
        },
        "secondary": {
          100: "#816797",
          200: "#9a85ab",
        },
        "accent": {
          100: "#D6D5A8",
          200: "#deddb9",
        },
      }
    },
  },
  plugins: [],
}
