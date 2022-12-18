/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./theme/**/*.html", "./themes/"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'title': ['Sorts Mill Goudy', 'sans-serif'],
        'spectral': ['Spectral SC', 'sans-serif'],
        'inria': ['Inria Sans', 'sans-serif'],
      },
      screens: {
        'mobile': '414px',
        'tablet': '912px',
        'laptop': '1024px',
        'lg': '1240px',
      },
      colors: {
        // 'cutepink': '#E0C5C6',
        'cutepink': {
          DEFAULT: '#E0C5C6',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FCFAFA',
          '400': '#EEE0E0',
          '500': '#E0C5C6',
          '600': '#CCA0A2',
          '700': '#B97C7E',
          '800': '#A5585B',
          '900': '#804447'
        },
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};