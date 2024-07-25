/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.js'],
  theme: {
    extend: {
      colors:{
        'headingText': '#373B3D',
      },

      backgroundImage:{
        'headingBG': 'linear-gradient(0deg, rgba(92,202,226,1) 0%, rgba(193,112,230,1) 100%)',
        'packageBG': 'radial-gradient(circle, rgba(238,174,198,0.9981785063752276) 0%, rgba(148,187,233,0.994535519125683) 100%)',
      },
    },
  },
  plugins: [],
}

