import type { WalletState } from '@web3-onboard/core'
import type { FC } from 'react'

import { Text } from 'components/Text'

interface IProps {
  data: WalletState
}

export const WalletInfo: FC<IProps> = ({ data }) => (
  <Text>{`Wallet ${data.accounts[0].address} connected!`}</Text>
)
