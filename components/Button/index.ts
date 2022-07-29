import { styled } from 'styles/stitches.config'

export const Button = styled('button', {
  border: 'none',
  borderRadius: '$1',
  padding: '$2 $4',
  background: '$backgroundLight',
  // fontFamily: '$montserratBold',
  fontSize: '$4',
  boxShadow: '$boxShadow',
  color: '$textSecondary',
  fontFamily: '$montserratBold',
  whiteSpace: 'nowrap',

  '&:hover': {
    filter: 'contrast(120%)',
  },

  variants: {
    variant: {
      primary: {
        background: '$backgroundLight',
        color: '$textSecondary',
      },
      secondary: {
        background: '$backgroundDark',
        color: '$text',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})
