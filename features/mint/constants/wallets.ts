import type { WalletInit } from '@web3-onboard/common'
import injectedModule from '@web3-onboard/injected-wallets'
import coinbaseModule from '@web3-onboard/coinbase'
import ledgerModule from '@web3-onboard/ledger'
import trezorModule from '@web3-onboard/trezor'

const injected = injectedModule()
const coinbaseWallet = coinbaseModule()
const ledgerWallet = ledgerModule()
const trezorWallet = trezorModule({ email: '', appUrl: '' })

// supported list of wallets
// most of them require specific module to be installed
// list of wallets modules:  https://www.npmjs.com/package/@web3-onboard/core
export const wallets: WalletInit[] = [
  injected,
  coinbaseWallet,
  ledgerWallet,
  trezorWallet,
]
