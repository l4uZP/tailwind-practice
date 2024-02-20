/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [".src/**/*jsx", ".src/**/*.css", "./index.html"],
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
