/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        text_white: '#d4d4d8',
        text_black: '#18181b',
        link: '#71717a',
      },
      backgroundColor: {
        primary_dark: '#18181b',
        secundary_white: '#d1d5db',
        box_primary_dark: '#3f3f46',
        box_secundary_white: '#9ca3af',
        box_m_primary_dark: '#27272a',
        box_m_primary_secundary: '#6b7280'
      },
      objectPosition: {
        'center-bottom': 'center bottom',
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}