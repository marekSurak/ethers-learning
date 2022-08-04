import { styled } from 'styles/stitches.config'

export const Text = styled('span', {
  fontSize: '$3',

  variants: {
    color: {
      primary: {
        color: '$text',
      },
      secondary: {
        color: '$textSecondary',
      },
      error: {
        color: '$textError',
      },
    },
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
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 3,
  },
})
