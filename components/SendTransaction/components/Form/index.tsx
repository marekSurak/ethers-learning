import { yupResolver } from '@hookform/resolvers/yup'
import type { FC } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { Input } from 'components/Input'

import { schema } from './schema'

interface IProps {
  onSubmit: () => void
}

const INPUT_ID = 'recipientAddress'

export const SendTxForm: FC<IProps> = ({ onSubmit }) => {
  const formMethods = useForm({
    resolver: yupResolver(schema),
  })

  const { handleSubmit } = formMethods

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input id={INPUT_ID} placeholder="Enter your wallet address (0x...)" />
      </form>
    </FormProvider>
  )
}
