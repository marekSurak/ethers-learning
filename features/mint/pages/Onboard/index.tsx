/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { SendTransaction } from '../../components/SendTransaction'
import { WalletInfo } from '../../components/WalletInfo'
import { getEthProvider } from '../../utils/getEthProvider'
import { useInitOnboard } from '../../utils/useInitOnboard'

export const Onboard: NextPage = () => {
  const { connect, disconnect, wallet, isConnecting } = useInitOnboard()
  const ethProvider = getEthProvider(wallet)

  console.log('ethersProvider', ethProvider)
  console.log('wallet', wallet)

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
      {wallet && ethProvider && (
        <>
          <WalletInfo data={wallet} />
          <SendTransaction ethProvider={ethProvider} />
        </>
      )}
    </main>
  )
}
