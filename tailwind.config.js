module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
            '400': '#FB6EAE',
            '500': '#C74375'
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
