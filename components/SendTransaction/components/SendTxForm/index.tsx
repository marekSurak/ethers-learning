import { yupResolver } from '@hookform/resolvers/yup'
import type { FC } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { Text } from 'components/Text'
import { Transaction } from 'types/transaction'

import { schema } from './schema'
import { Form, FormLine } from './styled'
import type { ISendTxFormData } from './types'

interface IProps {
  onSubmit: (data: ISendTxFormData) => void
  txStatus: Transaction
}

const INPUT_ID = 'recipientAddress'

export const SendTxForm: FC<IProps> = ({ onSubmit, txStatus }) => {
  const formMethods = useForm({
    defaultValues: {
      recipientAddress: '',
    },
    resolver: yupResolver(schema),
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = formMethods

  const inputError = errors.recipientAddress?.message
  const isPending = txStatus === Transaction.PENDING

  return (
    <FormProvider {...formMethods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLine>
          <Input
            id={INPUT_ID}
            placeholder="Enter your wallet address (0x...)"
            {...register(INPUT_ID)}
          />
          {inputError && <Text color="error">{inputError}</Text>}
        </FormLine>
        <Button variant="secondary" type="submit" disabled={isPending}>
          {isPending ? 'Sending...' : 'Send 0.01 ETH'}
        </Button>
      </Form>
    </FormProvider>
  )
}
