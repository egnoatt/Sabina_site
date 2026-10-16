/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: { primary: '#1F5C4A', text: '#172E29', accent: '#BFD8CC' },
        // Essenza v2 tokens: home/article baseline and opt-in internal surfaces.
        editorial: {
          paper: '#FAF8F4',
          mist: '#F0F2EA',
          line: '#D8DCD2',
        },
      },
      fontFamily: {
        sans: ['OpenSans', 'Arial', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: { fontWeight: '700' },
            h2: { fontWeight: '600' },
            a: { color: '#1F5C4A', '&:hover': { color: '#172E29' } },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
