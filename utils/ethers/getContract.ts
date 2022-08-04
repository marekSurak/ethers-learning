import type { WalletState } from '@web3-onboard/core'
import { ethers } from 'ethers'

import { contractABI } from 'constants/contractABI'

import { getEthProvider } from './getEthProvider'

interface IProps {
  wallet: WalletState | null
}

export const getContract = ({ wallet }: IProps) => {
  const ethProvider = getEthProvider(wallet)
  const contractAddress = process.env.NEXT_PUBLIC_SMART_CONTRACT_ADDRESS ?? ''

  if (ethProvider) {
    return new ethers.Contract(contractAddress, contractABI, ethProvider)
  }

  return null
}
