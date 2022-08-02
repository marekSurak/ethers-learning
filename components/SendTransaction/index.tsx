import { ethers } from 'ethers'
import { useState } from 'react'

import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { Transaction } from 'types/transaction'

import { TxHistory } from './components/TxHistory'
import { Form } from './styled'

interface IProps {
  ethProvider: ethers.providers.Web3Provider
}

export const SendTransaction = ({ ethProvider }: IProps) => {
  const signer = ethProvider.getSigner()
  const [tsxData, setTsxData] =
    useState<ethers.providers.TransactionResponse | null>(null)

  const [txStatus, setTxStatus] = useState<Transaction>(Transaction.INITIAL)

  const [recipientAddress, setRecipientAddress] = useState<string>('')

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setTxStatus(Transaction.PENDING)

    try {
      const tx = await signer.sendTransaction({
        to: recipientAddress,
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
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <Form onSubmit={handleSubmitForm}>
        <Input
          value={recipientAddress}
          id="recipientAddress"
          onChange={(e) => setRecipientAddress(e.target.value)}
          placeholder="Enter your wallet address (0x...)"
        />
        <Button
          variant="secondary"
          type="submit"
          disabled={txStatus === Transaction.PENDING}
        >
          Send ETH
        </Button>
      </Form>
      {tsxData && <TxHistory txData={tsxData} txStatus={txStatus} />}
    </Box>
  )
}
