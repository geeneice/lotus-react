/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'rgba(151, 151, 151, 1)',
        custompurple: 'rgba(151, 71, 255, 1)',
        customGray: 'rgba(184, 181, 218, 1)',
        customBg: 'rgba(244, 247, 255, 1)',
      },
      scrollbar: {none: 'none',},
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          '::-webkit-scrollbar': { display: 'none' }, /* For Chrome, Safari, and Opera */
          '-ms-overflow-style': 'none',  /* For Internet Explorer and Edge */
          'scrollbar-width': 'none',  /* For Firefox */
        }
      })
    }
  ],
}