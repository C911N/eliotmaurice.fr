module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

    },
    colors: {
      'primary-layout': '#181818',
      'secondary-layout': '#1C0000',
      'tertiary-layout': '#313A4A',
      // TODO: To remove, tmp color to replace images
      'dev-layout': '#232323',
      'primary-content': '#FF7B7B',
      'secondary-content': '#FFFFFF',
      'tertiary-content': '#D9D9D9',
      'linked-in': '#3272AE',
      'malt': '#EB576B',
      'comet': '#FFFFFF',
      'black': '#000000',
      'green': '#90FFB9'
    },
    fontFamily: {
      'primary': ['Sansita One', 'sans-serif'],
      'secondary': ['Sarabun', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
