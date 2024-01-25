/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily : {
        font1 : ["Dancing Script", "cursive"],
        font2 : ["Lobster", "sans-serif"],
        font3 : ["Permanent Marker", "cursive"],
        font4 : ["Bungee", "sans-serif"],
        font5 : ["Roboto Condensed","sans-serif" ]
      },

    },
  },
  plugins: [],
}

