/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A192F',
        'navy-light': '#112240',
        gold: '#C8A259',
        'gold-light': '#D4B76A',
        cream: '#F0F2F5',
        'cream-dark': '#D6D9DE',
        slate: '#8892B0',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
