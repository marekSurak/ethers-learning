/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { getEthProvider } from '../../utils/getEthProvider'
import { useInitOnboard } from '../../utils/useInitOnboard'

export const Onboard: NextPage = () => {
  const { connect, disconnect, wallet, isConnecting } = useInitOnboard()
  const ethProvider = getEthProvider(wallet)

  console.log('ethersProvider', ethProvider)

  const handleConnectWallet = async () => {
    await connect()
  }

  const handleDisconnectWallet = async () => {
    if (wallet?.label) await disconnect({ label: wallet.label })
  }

  return (
    <main>
      <Button
        isLoading={isConnecting}
        onClick={wallet ? handleDisconnectWallet : handleConnectWallet}
      >
        {wallet ? 'Disconnect' : 'Connect'}
      </Button>
    </main>
  )
}
