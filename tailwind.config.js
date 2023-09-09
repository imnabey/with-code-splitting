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
        DEFAULT: '#1f2026',
      },
      ocean: {
        medium: '#70a0af',
      },
      gray: {
        DEFAULT: '#23242a',
        dark: '#ecebff',
        light: '#edeced',
        medium: '#79787B',
      },
    },
    extend: {},
  },
}
