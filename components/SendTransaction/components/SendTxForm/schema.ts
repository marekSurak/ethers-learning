import * as yup from 'yup'

export const schema = yup.object({
  recipientAddress: yup
    .string()
    .required('Please insert recipient wallet address.'),
})
