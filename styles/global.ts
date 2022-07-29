import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'Montserrat',
      src: 'local("Montserrat"), url("/fonts/Montserrat-Regular.ttf")',
      fontWeight: 400,
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Montserrat-bold',
      src: 'local("Montserrat-bold"), url("/fonts/Montserrat-Bold.ttf")',
      fontWeight: 700,
      fontDisplay: 'swap',
    },
  ],
  '*, *::before, *::after': { boxSizing: 'border-box' },
  'body, h1, h2, h3, h4, p, figure, blockquote, dl, dd': {
    margin: 0,
    fontWeight: 400,
    fontSize: '1.6rem',
    fontFamily: 'Montserrat',
  },
  html: {
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
  },
  body: {
    background: '$linearGradient',
    height: '100vh',
  },
  'ul, li': {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  'button, input': {
    fontFamily: 'Montserrat',
  },
  a: {
    color: '#000',
  },
  'button, a': {
    cursor: 'pointer',
  },
})
