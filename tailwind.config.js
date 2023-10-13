/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      rotate: {
        '_45': '-45deg',
      },
      backgroundImage: {
        'hero-pattern': "url('/design-elegante-de-fundo-abstrato-de-memphis.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'salmon': '#E7C192',
        'transparent': 'rgb(0,0,0,0)',
        'half-transparent': 'rgb(0,0,0,0.8)',
      },
      transitionProperty: {
        'width': 'width',
      },
       fontFamily: {
        sans: [
          '"Inter var", sans-serif',
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32'
          },
        ],
      },
    },
  },
  plugins: [],
}

