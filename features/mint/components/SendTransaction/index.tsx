import { Input, Button } from '@chakra-ui/react'
import { ethers } from 'ethers'

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
    <form onSubmit={handleSubmitForm}>
      <Input id="address" placeholder="Enter wallet address to send ETH" />
      <Button type="submit" colorScheme="telegram">
        send
      </Button>
    </form>
  )
}
