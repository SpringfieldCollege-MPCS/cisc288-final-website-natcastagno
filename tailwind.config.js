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
        'spectral': ['Spectral SC', 'sans-serif'],
        'inria' : ['Inria Sans', 'sans-serif'],
      },
      screens: {
        'mobile' : '414px',
        'tablet' : '912px',
        'laptop' : '1024px',
        'lg': '1240px',
      },
      colors: {
        'cutepink': '#E0C5C6'
      }
    }
  },
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
      
  ],
};