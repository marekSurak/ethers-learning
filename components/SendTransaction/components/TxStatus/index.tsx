import type { FC } from 'react'

import { Text } from 'components/Text'
import { Transaction } from 'types/transaction'

interface IProps {
  status: Transaction
}

export const TxStatus: FC<IProps> = ({ status }) => (
  <Text role="img" aria-label="transaction status emoji">
    {status === Transaction.SUCCESS && <>&#9989;</>}
    {status === Transaction.PENDING && <>&#9203;</>}
    {status === Transaction.ERROR && <>&#10060;</>} - {status}
  </Text>
)
