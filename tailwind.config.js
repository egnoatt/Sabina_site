/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: { brand: { primary: '#1F5C4A', text: '#172E29', accent: '#BFD8CC' } },
      fontFamily: { sans: ['OpenSans', 'Arial', 'sans-serif'] },
      typography: {
        DEFAULT: {
          css: {
            h1: { fontWeight: "700" },
            h2: { fontWeight: "600" },
            a: { color: "#007BFF", "&:hover": { color: "#0056b3" } }
          }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
