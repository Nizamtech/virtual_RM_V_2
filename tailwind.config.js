/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        Roboto: " Roboto",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
