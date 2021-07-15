// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        violet: colors.violet,
      },
      gridTemplateColumns: {
        blogs: 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
