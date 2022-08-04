import { useState } from 'react'

import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { getMessage } from 'utils/contract/getMessage'
import { getContract } from 'utils/ethers/getContract'
import { useInitOnboard } from 'utils/ethers/useInitOnboard'

import { ContractStateContainer } from './styled'

export const ReadContractState = () => {
  const [contractState, setContractState] = useState<string>('')

  const { wallet } = useInitOnboard()
  const contract = getContract({ wallet: wallet })

  const handleReadState = async () => {
    if (contract) {
      const message = await getMessage({ contract: contract })
      setContractState(message)
    }
  }

  return (
    <ContractStateContainer>
      <Input
        value={contractState}
        placeholder="Click button to get message"
        disabled
      />
      <Button variant="secondary" type="button" onClick={handleReadState}>
        Read contract state
      </Button>
    </ContractStateContainer>
  )
}
