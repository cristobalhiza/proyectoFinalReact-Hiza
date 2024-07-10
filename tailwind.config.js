module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'custom-red': '#E2725B',
        'custom-green': '#00A676',
        'custom-blue': '#002F6C',
        'custom-yellow': '#FFB000',
        'custom-gray-light': '#F2F2F2',
        'custom-gray-dark': '#4B4B4B',
        'custom-brown-dark': '#4B2E2A',
      },
      dropShadow: {
        'md': '0 4px 3px rgba(0, 0, 0, 0.7)',
      },
      fontFamily: {
        text: ['Roboto', 'system-ui'],
        heading: ['Montserrat', 'Helvetica', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
