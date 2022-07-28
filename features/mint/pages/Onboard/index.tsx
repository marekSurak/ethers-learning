/* eslint-disable @typescript-eslint/no-misused-promises */
import type { NextPage } from 'next'

import { getEthProvider } from '../../utils/getEthProvider'
import { useInitOnboard } from '../../utils/useInitOnboard'

export const Onboard: NextPage = () => {
  const { connect, wallet } = useInitOnboard()
  const ethProvider = getEthProvider(wallet)

  console.log('ethersProvider', ethProvider)

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
