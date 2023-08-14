/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#d4d4d8',
            h1: {
              color: '#d4d4d8'
            },
            h2: {
              color: '#d4d4d8'
            },
            h3: {
              color: '#d4d4d8'
            },
            p: {
              color: '#d4d4d8'
            },
            strong: {
              color: '#d4d4d8'
            },
            a: {
              color: '#656ceb',
              '&:hover': {
                color: '#434acc'
              }
            }
          }
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        text_white: '#d4d4d8',
        text_black: '#18181b',
        link: '#71717a'
      },
      backgroundColor: {
        primary_dark: '#18181b',
        hover_dark: '#3b3b40',
        secundary_white: '#d1d5db',
        box_primary_dark: '#3f3f46',
        box_secundary_white: '#9ca3af',
        box_m_primary_dark: '#27272a',
        box_m_primary_secundary: '#6b7280'
      },
      objectPosition: {
        'center-bottom': 'center bottom'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
