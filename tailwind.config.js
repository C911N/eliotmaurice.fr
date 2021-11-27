module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'primary-layout': '#181818',
      'seconday-layout': '#1C0000',
      // TODO: To remove, tmp color to replace images
      'dev-layout': '#232323',
      'primary-content': '#FF7B7B',
      'secondary-content': '#FFFFFF',
      'tertiary-content': '#D9D9D9'
    },
    fontFamily: {
      'primary': 'Sansita One',
      'secondary': ['Sarabun', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
