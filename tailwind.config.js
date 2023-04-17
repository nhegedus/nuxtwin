/** @type {import('tailwindcss').Config} */
const colors = require('./styles/tw-extend/color')

module.exports = {
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
  ],
  darkMode: ['class'],
  theme: {
    extend: { colors },
  },
  plugins: [],
}