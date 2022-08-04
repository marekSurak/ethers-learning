import { ethers } from 'ethers'
import { useState } from 'react'

import { Box } from 'components/Box'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { BLOCK_CONFIRMATION_WAIT } from 'constants/ethers'
import { Transaction } from 'types/transaction'

import { SendTxForm } from './components/SendTxForm'
import type { ISendTxFormData } from './components/SendTxForm/types'
import { TxHistory } from './components/TxHistory'

interface IProps {
  ethProvider: ethers.providers.Web3Provider
}

export const SendTransaction = ({ ethProvider }: IProps) => {
  const signer = ethProvider.getSigner()
  const [tsxData, setTsxData] =
    useState<ethers.providers.TransactionResponse | null>(null)

  const [txStatus, setTxStatus] = useState<Transaction>(Transaction.INITIAL)

  const handleSubmitForm = async (data: ISendTxFormData) => {
    setTsxData(null)
    setTxStatus(Transaction.PENDING)

    try {
      const tx = await signer.sendTransaction({
        to: data.recipientAddress,
        value: ethers.utils.parseEther('0.01'), // convert to BigNumber
      })

      setTsxData(tx)

      // wait for at least 1 block confirmation
      await tx.wait(BLOCK_CONFIRMATION_WAIT)

      setTxStatus(Transaction.SUCCESS)
    } catch (e) {
      setTxStatus(Transaction.ERROR)
      console.error(e)
    }
  }

  return (
    <Box>
      <Heading variant="terniary" as="h3" size="4">
        Writing to blockchain
      </Heading>
      <SendTxForm txStatus={txStatus} onSubmit={handleSubmitForm} />
      {tsxData && <TxHistory txData={tsxData} txStatus={txStatus} />}
      {txStatus === Transaction.ERROR && (
        <Text css={{ color: '$textError' }}>
          Error while sending transaction.
        </Text>
      )}
    </Box>
  )
}
