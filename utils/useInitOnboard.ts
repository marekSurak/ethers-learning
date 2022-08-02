import { init, useConnectWallet } from '@web3-onboard/react'

import { appMetaData } from '../constants/appMetaData'
import { wallets } from '../constants/wallets'

init({
  wallets: wallets,
  chains: [
    {
      id: process.env.NEXT_PUBLIC_CHAIN_ID ?? '',
      token: process.env.NEXT_PUBLIC_CHAIN_TOKEN ?? '',
      label: process.env.NEXT_PUBLIC_CHAIN_LABEL ?? '',
      rpcUrl: process.env.NEXT_PUBLIC_CHAIN_RCP_URL ?? '',
    },
  ],
  appMetadata: appMetaData,
})

export const useInitOnboard = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  return {
    wallet,
    isConnecting: connecting,
    connect,
    disconnect,
  }
}
