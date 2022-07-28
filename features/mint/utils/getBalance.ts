import { ethers } from 'ethers'

interface IProps {
  ethProvider: ethers.providers.Web3Provider
  walletAddress: string
}

// get balance in the account given wallet address
export const getBalance = async ({ ethProvider, walletAddress }: IProps) => {
  const balance = await ethProvider.getBalance(walletAddress)
  return ethers.utils.formatEther(balance)
}
