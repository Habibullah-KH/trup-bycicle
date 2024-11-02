/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'clr-100': '#c0d3ec',
      'clr-200': '#ade8f4',
      'clr-300': '#04060b',

    },
    
    extend: {
      backgroundImage:{
      banner: "url('./assets/banner.webp')"
      },
    },
  },
  plugins: [],
}

