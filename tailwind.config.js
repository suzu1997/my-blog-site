// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        violet: colors.violet,
      },
      fontFamily: {
        lobster: ['Lobster', 'cursive'],
      },
      gridTemplateColumns: {
        blogs: 'repeat(auto-fill, minmax(220px, 300px))',
      },
      minWidth: {
        64: '16rem',
      },
    },
  },
  variants: {
    extend: {
      margin: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
