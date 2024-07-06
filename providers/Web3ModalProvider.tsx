'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

//https://cloud.walletconnect.com
const projectId = "f3a1fda42e0c3e52d2ab3c5404c4650c"

const devnet = {
  chainId: 696969,
  name: 'Galadriel',
  currency: 'GAL',
  explorerUrl: 'https://explorer.galadriel.com',
  rpcUrl: 'https://devnet.galadriel.com/'
}


const metadata = {
  name: "Facterless",
  description: "Facterless App",
  url: 'https://facterless.ai',
  icons: []
}

createWeb3Modal({
  ethersConfig: defaultConfig({metadata}),
  chains: [devnet],
  projectId,
  allWallets: 'HIDE',
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  excludeWalletIds: [
    '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
    '225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f',
    'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa'
  ],
  includeWalletIds: [
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96'
  ]
})

export function Web3ModalProvider({children}: any) {
  return children
}
