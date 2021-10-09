const defaultTheme = require('tailwindcss/defaultTheme');  // import the defaul theme
 
module.exports = {
purge: {
    content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"]
    // These options are passed through directly to PurgeCSS
  },
  darkMode: 'class', // or 'media' or 'class'
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