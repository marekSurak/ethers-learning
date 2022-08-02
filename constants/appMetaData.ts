import type { AppMetadata } from '@web3-onboard/common'

// data displayed when user is connecting the wallet
export const appMetaData: AppMetadata = {
  name: 'Ethers learning app',
  description: 'Learning web3 is fun!',
  icon: '/vercel.svg',
  recommendedInjectedWallets: [
    { name: 'MetaMask', url: 'https://metamask.io' },
    { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
  ],
}
