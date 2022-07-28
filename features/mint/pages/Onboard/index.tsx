/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { getEthProvider } from '../../utils/getEthProvider'
import { useInitOnboard } from '../../utils/useInitOnboard'

export const Onboard: NextPage = () => {
  const { connect, wallet, isConnecting } = useInitOnboard()
  const ethProvider = getEthProvider(wallet)

  console.log('ethersProvider', ethProvider)

  const handleConnectWallet = async () => {
    await connect()
  }

  return (
    <main>
      <Button
        isLoading={isConnecting}
        type="button"
        onClick={handleConnectWallet}
        colorScheme="blue"
      >
        Connect wallet
      </Button>
    </main>
  )
}
