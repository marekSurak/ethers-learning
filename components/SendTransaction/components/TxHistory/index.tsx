import type { ethers } from 'ethers'
import type { FC } from 'react'

import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import type { Transaction } from 'types/transaction'

import { Container, TxLine } from './styled'

import { TxStatus } from '../TxStatus'

interface IProps {
  txData: ethers.providers.TransactionResponse
  txStatus: Transaction
}

export const TxHistory: FC<IProps> = ({ txData, txStatus }) => (
  <Container>
    <Heading as="h3" size="4" variant="terniary">
      Your latest transaction:
    </Heading>
    <TxLine>
      <Text>
        <a
          href={`https://rinkeby.etherscan.io/tx/${txData.hash}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {txData.hash}
        </a>
      </Text>
      <TxStatus status={txStatus} />
    </TxLine>
  </Container>
)
