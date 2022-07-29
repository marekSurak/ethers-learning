import { createStitches } from '@stitches/react'

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      montserrat: 'Montserrat, -aple-system, system-ui',
      montserratBold: 'Montserrat-bold, -aple-system, system-ui',
    },
    colors: {
      text: '#fff',
      textSecondary: '#026388',
      textTerniary: '#845ec2',
      backgroundLight: '#fee152',
      backgroundDark: '#7d8adb',
      border: '#caced4',
      linearGradient:
        'linear-gradient(to right top, #845ec2, #806ecc, #7e7cd4, #7d8adb, #7f97e1, #76a5eb, #6eb2f2, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
    },
    fontSizes: {
      1: '11px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '25px',
      6: '72px',
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
    radii: {
      1: '0.375rem',
      2: '0.75rem',
      3: '1.25rem',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '1rem',
      4: '2rem',
    },
    shadows: {
      boxShadow: 'rgba(255, 255, 255, 0.35) 0px 5px 15px',
    },
  },
})
