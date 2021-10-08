const defaultTheme = require('tailwindcss/defaultTheme');  // import the defaul theme
 
module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Insert the custom font families at the beginning of the array
      fontFamily: {
        sans: ['Nunito'],
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
};