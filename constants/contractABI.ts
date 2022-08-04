// In real world you would probably want to interact with smart-contract you wrote
// so you would import this from smart-contract/artifacts/contracts/HelloWorld.sol

// you can also try etherscan API
// https://api.etherscan.io/api?module=contract&action=getabi&address=[address]'

// Or you can directly check it on the Etherscan URL
// https://goerli.etherscan.io/address/[address]
// in the Contract you can find contract ABI

export const contractABI = [
  {
    inputs: [{ internalType: 'string', name: 'initMessage', type: 'string' }],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'oldStr',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'newStr',
        type: 'string',
      },
    ],
    name: 'UpdatedMessages',
    type: 'event',
  },
  {
    inputs: [],
    name: 'message',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string', name: 'newMessage', type: 'string' }],
    name: 'update',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
