module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'height-full': '100vh',
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%'
      },
      width: {
        'width-full': '100vw',
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '49p': '49%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%'
      },
      colors: {
        'poke-700': '#e49e19',
        'poke-600': '#efb231',
        'poke-500': '#f4ba3b',
        'poke-400': '#fbc649',
        'poke-text': '#919191'
      },
      cursor: {
        'poke': 'url(/img/cursor.png), pointer'
      }
    },
    
  },
  plugins: [],
}