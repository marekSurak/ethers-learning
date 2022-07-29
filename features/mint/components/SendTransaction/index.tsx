import { ethers } from 'ethers'

import { Button } from 'components/Button'
import { Input } from 'components/Input'

import { Form } from './styled'

interface IProps {
  ethProvider: ethers.providers.Web3Provider
}

export const SendTransaction = ({ ethProvider }: IProps) => {
  const signer = ethProvider.getSigner()

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await signer.sendTransaction({
      to: e.target[0].value,
      value: ethers.utils.parseEther('0.01'),
    })
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Form onSubmit={handleSubmitForm}>
      <Input id="address" placeholder="Enter your wallet address (0x...)" />
      <Button variant="secondary" type="submit">
        Send ETH
      </Button>
    </Form>
  )
}
