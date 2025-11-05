import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        brand: {
          50: '#f1f5f7',
          100: '#e4ebef',
          200: '#c4d4dc',
          300: '#9cb1c0',
          400: '#7590a4',
          500: '#4f7089',
          600: '#3a556d',
          700: '#2a4056',
          800: '#1b2b3f',
          900: '#101b2b'
        }
      }
    }
  },
  plugins: []
};

export default config;
