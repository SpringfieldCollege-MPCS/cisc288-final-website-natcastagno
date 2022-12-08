/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./theme/**/*.html",  "./themes/"],
  theme: {
    container: {
      center : true,
    },
    extend: {
      fontFamily: {
        'title': ['Sorts Mill Goudy', 'sans-serif'],
        'spectral': ['Spectral SC', 'sans-serif']
      }
    }
  },
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
};