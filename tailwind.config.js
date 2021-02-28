const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito', 'sans-serif'],
        'serif': ['Raleway', 'serif'],
        'mono': [...defaultTheme.fontFamily.mono]
      },
      colors: {
        mbuella: {
          gray: {
            '50': '#FAFAFA',
            '300': '#D4D4D4',
            '400': '#A3A3A3',
            '500': '#737373',
            '700': '#404040',
            '800': '#262626',
            '900': '#171717',
          },
          fuchsia: {
            '50':  '#fdf9f9',
            '100': '#fdeef4',
            '200': '#fbcee9',
            '300': '#faa4d7',
            '400': '#fb6eae',
            '500': '#fc4094',
            '600': '#f6256d',
            '700': '#dc1d56',
            '800': '#b01841',
            '900': '#8b1534',
          }
        }
      }
    },
  },
  variants: {
    extend: {
      margin: ['odd', 'even']
    },
  },
  plugins: [],
}
