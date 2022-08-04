import type { ethers } from 'ethers'

interface IProps {
  contract: ethers.Contract
}

// For read-only methods you just need contract
// new ethers.Contract(contractAddress, contractABI, ethProvider)
// there is no need for Signer

export const getMessage = async ({ contract }: IProps): Promise<string> => {
  //  message is public variable in smart-contract
  // it also automatically creates getter function for you
  const message = (await contract.message()) as string
  return message
}
