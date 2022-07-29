import { styled } from 'styles/stitches.config'

export const Heading = styled('h1', {
  fontSize: '$6',

  variants: {
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
      4: {
        fontSize: '$4',
      },
      5: {
        fontSize: '$5',
      },
      6: {
        fontSize: '$6',
      },
    },
    light: {
      false: {
        fontFamily: '$montserratBold',
      },
      true: {
        fontFamily: '$montserrat',
      },
    },
    variant: {
      primary: {
        color: '$text',
      },
      secondary: {
        color: '$textSecondary',
      },
      terniary: {
        color: '$textTerniary',
      },
    },
  },
  defaultVariants: {
    size: '6',
    light: false,
    variant: 'primary',
  },
})
