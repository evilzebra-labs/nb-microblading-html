/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/flowbite/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        brandPrimary: '#DF3B57',
        brandPrimaryHover: '#D3344F',
        brandSecondary: '#3A5E7E',
        brandSecondaryHover: '#385671',
        brandDark: '#262A2C',
        brandDarkOpacity: '#393e4166',
        brandLight: '#D6D6D6',
        brandLighter: '#EFEFEF',
        blueZodiac: {
          50: '#e1d6eb',
          100: '#c7bdd6',
          200: '#9690af',
          300: '#6b6c8c',
          400: '#4e546c',
          500: '#3a4353',
          600: '#2d3741',
          700: '#252f35',
          800: '#212a2e',
          900: '#1f272a',
        },
        grapeExpectations: {
          50: '#f1dcee',
          100: '#e2c8e1',
          200: '#c3a4c6',
          300: '#a286ab',
          400: '#836c92',
          500: '#68587b',
          600: '#524967',
          700: '#403c55',
          800: '#323245',
          900: '#282a35',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],
};
