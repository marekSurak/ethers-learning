import type { ethers } from 'ethers'

interface IProps {
  provider: ethers.providers.Web3Provider
  contract: ethers.Contract | null
  data: string
}

type TxResponse = ethers.providers.TransactionResponse

export const updateMessage = async ({
  provider,
  contract,
  data,
}: IProps): Promise<TxResponse> => {
  const signer = provider.getSigner()
  const daitWithSigner = contract?.connect(signer)
  const tx = await daitWithSigner?.update(data)

  return tx as TxResponse
}
