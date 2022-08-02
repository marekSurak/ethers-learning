import { Text } from 'components/Text'
import { styled } from 'styles/stitches.config'

export const Form = styled('form', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$2',
})

export const FormLine = styled('div', {
  width: '100%',
})

export const ErrorMsg = styled(Text, {
  color: '$textError',
})
