import { Button } from 'components/Button'
import { useInitOnboard } from 'utils/useInitOnboard'

export const ConnectWallet = () => {
  const { connect, disconnect, wallet } = useInitOnboard()

  const handleConnectWallet = async () => {
    await connect()
  }

  const handleDisconnectWallet = async () => {
    if (wallet?.label) await disconnect({ label: wallet.label })
  }

  return (
    <Button
      type="button"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={wallet ? handleDisconnectWallet : handleConnectWallet}
      css={{ marginTop: '$3' }}
    >
      {wallet ? 'Disconnect' : 'Connect'}
    </Button>
  )
}
