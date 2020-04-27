const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Ubuntu"', 'system-ui'],
    },
    colors: {
      ...colors,
      primary: colors.indigo['600'],
      secondary: colors.teal['100'],
      danger: colors.red['600'],
      warning: colors.orange['500'],
      success: colors.green['500'],
      info: colors.blue['400'],
      dark: colors.gray['900'],
      light: colors.white,
    },
  },
  variants: {
    margin: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    fontFamily: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
