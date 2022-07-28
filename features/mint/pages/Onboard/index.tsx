// import { ethers } from 'ethers'
import type { NextPage } from 'next'

import { useInitOnboard } from '../../utils/useInitOnboard'

export const Onboard: NextPage = () => {
  const { connect } = useInitOnboard()

  // create an ethers provider
  // let ethersProvider

  // if (wallet) {
  //   ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
  // }

  const handleConnectWallet = async () => {
    await connect()
  }

  return (
    <main>
      <button type="button" onClick={handleConnectWallet}>
        Connect wallet
      </button>
    </main>
  )
}
