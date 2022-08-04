import type { NextPage } from 'next'

import { ConnectWallet } from 'components/ConnectWallet'
import { Heading } from 'components/Heading'
import { Layout } from 'components/Layout'
import { SendTransaction } from 'components/SendTransaction'
import { SmartContract } from 'components/SmartContract'
import { getEthProvider } from 'utils/ethers/getEthProvider'
import { useInitOnboard } from 'utils/ethers/useInitOnboard'
import { substractMiddleString } from 'utils/substractMiddleString'

const Onboard: NextPage = () => {
  const { wallet, isConnecting } = useInitOnboard()
  const ethProvider = getEthProvider(wallet)
  const isAuthorized = wallet && ethProvider && !isConnecting

  return (
    <Layout>
      <Heading>Welcome to web3!</Heading>

      <Heading as="h2" size="5" light css={{ marginTop: '$4' }}>
        {isAuthorized
          ? `Wallet ${substractMiddleString(
              wallet.accounts[0].address
            )} connected!`
          : 'Connect your wallet to start'}
      </Heading>
      <ConnectWallet />
      {isAuthorized && <SendTransaction ethProvider={ethProvider} />}
      {isAuthorized && <SmartContract ethProvider={ethProvider} />}
    </Layout>
  )
}

export default Onboard
