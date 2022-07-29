/* eslint-disable @typescript-eslint/no-misused-promises */
import type { NextPage } from 'next'

import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Heading } from 'components/Heading'
import { substractMiddleString } from 'utils/substractMiddleString'

import { Content } from './styled'

import { SendTransaction } from '../../components/SendTransaction'
import { getEthProvider } from '../../utils/getEthProvider'
import { useInitOnboard } from '../../utils/useInitOnboard'

export const Onboard: NextPage = () => {
  const { connect, disconnect, wallet, isConnecting } = useInitOnboard()
  const ethProvider = getEthProvider(wallet)
  const isAuthorized = wallet && ethProvider && !isConnecting

  console.log('ethersProvider', ethProvider)
  console.log('wallet', wallet)

  const handleConnectWallet = async () => {
    await connect()
  }

  const handleDisconnectWallet = async () => {
    if (wallet?.label) await disconnect({ label: wallet.label })
  }

  return (
    <Content>
      <Heading>Welcome to web3!</Heading>

      <Heading as="h2" size="5" light css={{ marginTop: '$4' }}>
        {isAuthorized
          ? `Wallet ${substractMiddleString(
              wallet.accounts[0].address
            )} connected!`
          : 'Connect your wallet to start'}
      </Heading>
      <Button
        type="button"
        onClick={wallet ? handleDisconnectWallet : handleConnectWallet}
        css={{ marginTop: '$3' }}
      >
        {wallet ? 'Disconnect' : 'Connect'}
      </Button>
      {isAuthorized && (
        <Box>
          <SendTransaction ethProvider={ethProvider} />
        </Box>
      )}
    </Content>
  )
}
