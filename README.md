# Learning ethers app

![Screenshot 2022-08-03 at 11 16 41](https://user-images.githubusercontent.com/20334563/182572200-8fecbc0f-29b8-472f-bd2a-e9ab094affce.png)

This app was built for learning [ethers](https://docs.ethers.io/v5/) library and intro to the web3 world.
You can connect your wallet and make a simple transaction, which is send ETH to another wallet.

This repository is using "hello world" smart contract. You can check it here:
[https://github.com/marekSurak/smart-contract](https://github.com/marekSurak/smart-contract)

## Table of Contents

[App overview](#app-overview) <br />
[Ethers alternative](#ethers-alternative) <br />
[Requirements](#requirements)<br />
[Tech stack](#tech-stack) <br />
[Ethers basics](#ethers-basics) <br />

## App overview

After connecting your wallet you have to options:

1. Send 0.01 ETH to another wallet
2. Interact with smart-contract build [here](https://github.com/marekSurak/smart-contract). You can read and update state. This is just displaying and updating the string stored in the smart-contract state, altough in the real world smart-contract will provide methods used for claiming token or minting some fancy NFT.

For simplicity of the app I did not implement some features like global state, session storage and etc.

## Ethers alternative

### Size

According to [Bundlephobia](https://bundlephobia.com/)

| Package             | ethers | web3  |
| ------------------- | ------ | ----- |
| Minifiend + gzipped | 640kB  | 119kB |

### Architecture

`web3` - provides a single object with mapped methods for interacting with blockchain

`ethers` - is divided into Provider, Signer & Contract parts which seems cleaner<br /> And for some operations you don't have to use all parts (read-only operations doesn't require Signer)

### Popularity

| Package          | ethers | web3  |
| ---------------- | ------ | ----- |
| Github stars     | 5.4k   | 15.7k |
| Weekly downloads | 880k   | 600k  |

## Requirements

- [Metamask](https://metamask.io/) browser extension - setup used testnet (Goerli)
- [Alchemy](https://www.alchemy.com/) - Alchemy account is needed to get free ETH
- [Goerli faucet](https://goerlifaucet.com/) - free test ETH to your wallet on testnet (Goerli)

## Tech stack

### <u>web3</u>

`ethers`

Library for interacting with Ethereum Blockchain ecosystem.<br />
[https://docs.ethers.io/v5/](https://docs.ethers.io/v5/)

`@web3/onboard`

Library used for connecting wallets to the app.<br />
[https://github.com/blocknative/web3-onboard](https://github.com/blocknative/web3-onboard)

### <u>UI</u>

`stitches`

Css in jss solution<br />
[https://stitches.dev/](https://stitches.dev/)

`react-hook-form, yup`

Simple form with validation.<br />
[https://react-hook-form.com/](https://react-hook-form.com/)

Project was setup using template [`create-next-ts-cqt`](https://github.com/marekSurak/create-next-ts-cqt), where you can find setup code quality tools and github CI/CD.

## Ethers basics

### Terminology

Provider <br />
`ethers.Provider` is a read only abstraction providing a connection to the Ethereum network

```
import { ethers } from 'ethers'
import { useConnectWallet } from '@web3-onboard/react'

// get connected user wallet
const [{ wallet }] = useConnectWallet()
const provider = new ethers.providers.Web3Provider(wallet.provider)
```

Signer <br />
`signer` provides an access to private key, which means you can sign message and authorize transaction which can charge your account like sending ETH and write operations in smart-contract.

```
const signer = provider.getSigner()

// send transaction
const tx = await signer.sendTransaction({
  to: 'wallet address',
  value: ethers.utils.parseEther('0.01'), // convert to BigNumber
})
```

Contract <br />
`ethers.Contract` represents an object with mapped methods for interaction with specific contract on Ethereum network

```
// address = addres of deployed smart contract on Ethereum network
// abi = contract interface - generated when building smart-contract

const contract = new ethers.Contract(address, abi, provider)
```

### Examples

Initialization

Connect wallet

Send transaction

Read smart-contract

Write to smart-contract
