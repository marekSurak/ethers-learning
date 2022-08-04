import type { WalletState } from '@web3-onboard/core'
import { ethers } from 'ethers'

import { contractABI } from 'constants/contractABI'

import { getEthProvider } from './getEthProvider'

interface IProps {
  wallet: WalletState | null
}

// Create Contract - normal JS object with methods from smart-contract
export const getContract = ({ wallet }: IProps) => {
  const ethProvider = getEthProvider(wallet)
  const contractAddress = process.env.NEXT_PUBLIC_SMART_CONTRACT_ADDRESS ?? ''

  // contractABI - interface how we can comunicate with smart-contract
  // contains list of public methods and variables we can access
  if (ethProvider) {
    return new ethers.Contract(contractAddress, contractABI, ethProvider)
  }

  return null
}
