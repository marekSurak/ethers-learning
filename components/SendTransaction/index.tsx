import { ethers } from 'ethers'
import { useState } from 'react'

import { Box } from 'components/Box'
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
    setTxStatus(Transaction.PENDING)

    try {
      const tx = await signer.sendTransaction({
        to: data.recipientAddress,
        value: ethers.utils.parseEther('0.01'),
      })

      setTsxData(tx)

      // wait for at least 1 block confirmation
      await tx.wait(1)

      setTxStatus(Transaction.SUCCESS)
    } catch (e) {
      setTxStatus(Transaction.ERROR)
    }
  }

  return (
    <Box>
      <SendTxForm txStatus={txStatus} onSubmit={handleSubmitForm} />
      {tsxData && <TxHistory txData={tsxData} txStatus={txStatus} />}
    </Box>
  )
}
