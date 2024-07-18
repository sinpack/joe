import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        header: '1250px', // header breakpoint
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        dark: '#010918', // Dark -> Overlays Shadows Headings
        input: '#FFFFFF', // Inputs
        primary: {
          // Primary Brand
          100: '#E8EFFF',
          150: '#D1E1FF',
          200: '#BAD1FF',
          300: '#7AA6FF',
          400: '#1A63F5',
          500: '#0043C8',
        },
        secondary: {
          100: '#E9E4FF',
          200: '#B8AAFF',
          250: '#7458FF',
          300: '#3F1AF5',
          400: '#1A0099',
        },
        text: {
          100: '#BDBEC2', // Subtle Text -> Helper text Deemphasized text
          200: '#787C84', // Text -> Body text
        },
        disabled: '#DEE0E5',
        blackWhite: {
          100: '#FFFFFF',
          150: '#FCFDFF',
          200: '#F6F6F9',
          250: '#E9EBEF',
          300: '#DEE0E5',
          350: '#BDBEC2',
          400: '#787C84',
          500: '#010918',
        },
        outline: {
          // Outlines
          100: '#FCFDFF',
          200: '#F6F6F9',
          300: '#DEE0E5',
        },
        negative: {
          // Negative Values
          100: '#FFE4E8',
          200: '#FB576A',
        },
        positive: {
          // Positive Values
          100: '#E9FFE9',
          150: '#9DEB9B',
          200: '#09CE05',
        },
        orange: {
          100: '#FFE3B9',
          200: '#FFA012',
        },
        alabaster: '#FBFBFB',
        cornflower: '#F6F8FF', // Input Background
        yellow: {
          200: '#F3F500',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
};
export default config;
