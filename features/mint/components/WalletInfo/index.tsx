import { Heading, Highlight } from '@chakra-ui/react'
import type { WalletState } from '@web3-onboard/core'
import type { FC } from 'react'

interface IProps {
  data: WalletState
}

export const WalletInfo: FC<IProps> = ({ data }) => {
  return (
    <section>
      <Heading size="lg">
        <Highlight
          query={data.accounts[0].address}
          styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.100' }}
        >
          {`Wallet ${data.accounts[0].address} connected!`}
        </Highlight>
      </Heading>
    </section>
  )
}
