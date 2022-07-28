import type { WalletState } from '@web3-onboard/core'
import { ethers } from 'ethers'

// create an ethers provider
// provider provides read-only connection to blockchain
export const getEthProvider = (wallet: WalletState | null) => {
  let ethProvider = null

  if (wallet) {
    ethProvider = new ethers.providers.Web3Provider(wallet?.provider, 'any')
  }

  return ethProvider
}
