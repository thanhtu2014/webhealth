/** @type {import('tailwindcss').Config} */
/* eslint-disable max-len */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/container/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mg: '480px',
        'sm-lg': '991px',
        'lg-xl': '1440px',
        '1300px': '1300px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        bgprimary: '#414141',
        black: '#000',
        white: {
          light: '#FFFFFF',
        },
        primary: {
          300: '#FFCC21',
          400: '#FF963C',
          500: '#EA6C00',
        },
        secondary: {
          300: '#8FE9D0',
        },
        gradient: {
          '300-400': 'linear-gradient(90deg, #FFCC21, #FF963C)',
        },
        dark: {
          600: '#2E2E2E',
          '500-text': '#414141',
        },
        gray: {
          400: '#777777',
        },
        width: {
          70: '17.5rem',
        },
      },
      fontFamily: {
        roboto: ['Noto Sans JP', 'sans-serif'],
      },
      backgroundImage: {
        'custom-pattern':
          'url(\'https://assets.website-files.com/641c0410c17bb111523922e8/64352ebe31b3f575af86e331_pattern.png\')',
        'bg-icon-contactus': 'url(\'/images/bg-icon-contactus.svg\')',
      },
    },
  },
  plugins: [],
};
