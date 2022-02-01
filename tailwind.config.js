module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      main: ['Proxima Nova'],
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        'pattern': "url('/dist/img/dot-grid.png')",
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1280px',
      },
      colors: {
        'esa-blue': '#0f75bb',
        'esa-purple': '#3e3968',
        'esa-pink': '#ef3d56',
        'esa-orange': '#f58626',
        'esa-black': '#171717',
        'esa-gray-dark': '#2b2b2b',
        'esa-gray-light': '#f2f2f2',
        'esa-gray': '#484848',
      },
    },
  },
  plugins: [],
}