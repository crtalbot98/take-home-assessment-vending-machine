/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.tsx',
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      maxHeight: {
        '128': '46rem',
      }
    },
  },
  plugins: [],
}
