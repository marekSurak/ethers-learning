import { yupResolver } from '@hookform/resolvers/yup'
import type { ethers } from 'ethers'
import type { FC } from 'react'
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { Input } from 'components/Input'
import { FormLine } from 'components/SendTransaction/components/SendTxForm/styled'
import { TxHistory } from 'components/SendTransaction/components/TxHistory'
import { Text } from 'components/Text'
import { Transaction } from 'types/transaction'
import { updateMessage } from 'utils/contract/updateMessage'
import { getContract } from 'utils/ethers/getContract'
import { useInitOnboard } from 'utils/ethers/useInitOnboard'

import { schema } from './schema'
import type { IUpdateStateData } from './types'

interface IProps {
  ethProvider: ethers.providers.Web3Provider
}

const INPUT_ID = 'message'

export const UpdateStateContract: FC<IProps> = ({ ethProvider }) => {
  const [tsxData, setTsxData] =
    useState<ethers.providers.TransactionResponse | null>(null)
  const [txStatus, setTxStatus] = useState<Transaction>(Transaction.INITIAL)

  const { wallet } = useInitOnboard()

  const formMethods = useForm({
    defaultValues: {
      message: '',
    },
    resolver: yupResolver(schema),
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = formMethods

  const handleUpdateState = async (data: IUpdateStateData) => {
    setTsxData(null)
    setTxStatus(Transaction.PENDING)

    try {
      const tx = await updateMessage({
        provider: ethProvider,
        contract: getContract({ wallet: wallet }),
        data: data.message,
      })

      setTsxData(tx)

      // wait for at least 1 block confirmation
      await tx.wait(1)

      setTxStatus(Transaction.SUCCESS)
    } catch (e) {
      setTxStatus(Transaction.ERROR)
      console.error(e)
    }
  }

  const inputError = errors.message?.message
  const isPending = txStatus === Transaction.PENDING

  return (
    <FormProvider {...formMethods}>
      <Form onSubmit={handleSubmit(handleUpdateState)}>
        <FormLine>
          <Input
            id={INPUT_ID}
            placeholder="Enter the message to update the state with"
            {...register(INPUT_ID)}
          />
          {inputError && <Text color="error">{inputError}</Text>}
        </FormLine>
        <Button variant="secondary" type="submit" disabled={isPending}>
          {isPending ? 'Updating...' : 'Update contract state'}
        </Button>
      </Form>
      {tsxData && <TxHistory txData={tsxData} txStatus={txStatus} />}
      {txStatus === Transaction.ERROR && (
        <Text css={{ color: '$textError' }}>
          Error while sending transaction.
        </Text>
      )}
    </FormProvider>
  )
}
