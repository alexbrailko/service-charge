import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        light: 'var(--light)',
        lightGreen: 'var(--light-green)',
        highlight: 'var(--highlight)',
        highlightLighter: 'var(--highlight-lighter)',
        highlightSecondary: 'var(--highlight-secondary)',
        dark: 'var(--dark)',
        white: 'var(--white)',
        grey: 'var(--grey)',
        grey2: 'var(--grey2)',
        error: 'var(--error)',
        border: 'var(--border)'
      },
      borderRadius: {
        md: 'var(--border-radius)'
      },
      screens: {
        xs: { max: '500px' },
        sm: { min: '0px', max: '767px' },
        md: { min: '0px', max: '1199px' },
        tb: { min: '768px', max: '1199px' },
        lg: { min: '1200px' }
      },
      transitionProperty: {
        height: 'height'
      }
    }
  },
  plugins: []
};
export default config;
