/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkColor: '#050c2a',
        hoverdarkColor: '#1E2E75',
        lightColor: '#F6F5F4',
        hoverlightColor: '#D8D8D7',
      },
      padding: {
        big: '50px'
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1028px',
        xl: '1440px'
      }
    },
  },
  plugins: [],
}

