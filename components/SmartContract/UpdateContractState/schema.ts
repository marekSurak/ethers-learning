import * as yup from 'yup'

export const schema = yup.object({
  message: yup.string().required('Please insert the message.'),
})
