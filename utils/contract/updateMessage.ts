import type { ethers } from 'ethers'

interface IProps {
  provider: ethers.providers.Web3Provider
  contract: ethers.Contract | null
  data: string
}

type TxResponse = ethers.providers.TransactionResponse

// Update state of the smart-contract
export const updateMessage = async ({
  provider,
  contract,
  data,
}: IProps): Promise<TxResponse> => {
  // for state changing/writing methods we need to create Signer (authorized for perform operation)
  const signer = provider.getSigner()
  const daitWithSigner = contract?.connect(signer)
  const tx = await daitWithSigner?.update(data)

  return tx as TxResponse
}
