import { init, useConnectWallet } from '@web3-onboard/react'

import { appMetaData } from '../constants/appMetaData'
import { wallets } from '../constants/wallets'

init({
  wallets: wallets,
  chains: [
    {
      id: '0x4',
      token: 'Rinkeby ETH',
      label: 'Rinkeby Test Network',
      rpcUrl: 'https://rinkeby.infura.io/v3/',
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
