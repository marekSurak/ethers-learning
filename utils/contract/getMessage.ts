import type { ethers } from 'ethers'

interface IProps {
  contract: ethers.Contract
}

export const getMessage = async ({ contract }: IProps): Promise<string> => {
  const message = (await contract.message()) as string
  return message
}
