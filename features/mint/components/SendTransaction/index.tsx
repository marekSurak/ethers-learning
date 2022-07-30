import { ethers } from 'ethers'
import { useState } from 'react'

import { Button } from 'components/Button'
import { Heading } from 'components/Heading'
import { Input } from 'components/Input'
import { Text } from 'components/Text'
import { Transaction } from 'types/transaction'

import { Form, TxHistory, TxLine } from './styled'

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
    <>
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
      {tsxData && (
        <TxHistory>
          <Heading as="h3" size="4" variant="terniary">
            Your latest transaction:
          </Heading>
          <TxLine>
            <Text>
              <a
                href={`https://rinkeby.etherscan.io/tx/${tsxData.hash}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tsxData.hash}
              </a>
            </Text>
            <Text role="img" aria-label="transaction status emoji">
              {txStatus === Transaction.SUCCESS && <>&#9989;</>}
              {txStatus === Transaction.PENDING && <>&#9203;</>}
              {txStatus === Transaction.ERROR && <>&#10060;</>} - {txStatus}
            </Text>
          </TxLine>
        </TxHistory>
      )}
    </>
  )
}
