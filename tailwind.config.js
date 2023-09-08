/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  theme: {
    colors: {
      black: {
        DEFAULT: '#1F2026',
      },
      ocean: {
        medium: '#70A0AF',
      },
      gray: {
        DEFAULT: '#23242A',
        dark: '#ecebff',
        light: '#EDECED',
        medium: '#79787B',
      },
    },
    extend: {},
  },
  // plugins: [],
}
