/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
  theme: {

      backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '6rem',
    },
    extend: {
       // font family
    fontFamily:{
      'Josefin': ['Josefin Sans'],
      'Alata': ['Alata'],
    },
    backgroundImage: {
        'desktop-hero': "url('../images/desktop/image-hero.jpg')",
        'mobile-hero': "url('../images/mobile/image-hero.jpg')",
    },
     // media quries
       screens: {
      'sm': {'max': '720px'},
      // => @media (max-width: 639px) { ... }
      'tb': {'min': '721px', 'max': '1290px'},
      // => @media (min-width: 768px and max-width: 1023px)
      'md': {'min': '722px'},
      // => @media (min-width: 768px) { ... }
    },
  },
},
  plugins: [],
}
