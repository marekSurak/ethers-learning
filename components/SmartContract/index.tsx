import type { ethers } from 'ethers'
import type { FC } from 'react'

import { Box } from 'components/Box'
import { Heading } from 'components/Heading'

import { ReadContractState } from './ReadContractState'
import { UpdateStateContract } from './UpdateContractState'

interface IProps {
  ethProvider: ethers.providers.Web3Provider
}

export const SmartContract: FC<IProps> = ({ ethProvider }) => {
  return (
    <Box>
      <Heading variant="terniary" as="h3" size="4">
        Interacting with smart contract
      </Heading>

      <ReadContractState />
      <UpdateStateContract ethProvider={ethProvider} />
    </Box>
  )
}
