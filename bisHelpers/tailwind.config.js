/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './node_modules/flowbite/**/*.js'],
  theme: {
    colors: {
      brand: {
        50: '#eafffe',
        100: '#cbfffe',
        200: '#9efeff',
        300: '#5bf9ff',
        400: '#10ebff',
        500: '#00cde5',
        600: '#00a3c0',
        700: '#03819b',
        800: '#0d677d',
        900: '#105569',
        950: '#033849',
      },
      default: {
        50: '#4E5663',
      },
      
    },
    extend: {
      fontSize: {
        'heading-xxlg': '40px',
        'heading-xlg': '36px',
        'heading-lg': '32px',
        'heading-md': '28px',
        'heading-sm': '24px',
        'heading-xs': '20px',

        'paragraph-xlg': '20px',
        'paragraph-lg': '18px',
        'paragraph-md': '16px',
        'paragraph-sm': '14px',
        'paragraph-xs': '12px',
      },
      lineHeight: {
        'heading-xxlg': '48px',
        'heading-xlg': '44px',
        'heading-lg': '36px',
        'heading-md': '32px',
        'heading-sm': '28px',
        'heading-xs': '20px',

        'paragraph-xl': '32px',
        'paragraph-lg': '28px',
        'paragraph-md': '24px',
        'paragraph-sm': '20px',
        'paragraph-xs': '20px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
