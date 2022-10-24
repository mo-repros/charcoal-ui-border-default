const { light, dark } = require('@charcoal-ui/theme')
const { createTailwindConfig } = require('@charcoal-ui/tailwind-config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  media: false,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [
    createTailwindConfig({
      version: 'v3',
      theme: {
        ':root': light,
        'html[data-theme="dark"]': dark
      },
    }),
  ]
}
