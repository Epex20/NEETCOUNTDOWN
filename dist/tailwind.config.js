/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
    container: false,
    accessibility: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    textOpacity: false,
  },
  theme: {
    extend: {
      colors: {
        gray: {
          300: '#d1d5db',
          400: '#9ca3af',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712'
        },
        purple: {
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7'
        },
        pink: {
          400: '#f472b6'
        }
      },
      spacing: {
        '18': '4.5rem'
      }
    },
  },
  plugins: [
  ],
  purge: {
    enabled: true,
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: []
    }
  }
};