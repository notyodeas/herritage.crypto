import { createCoinbaseWalletSDK } from '@coinbase/wallet-sdk'
 
export const sdk = createCoinbaseWalletSDK({
  appName: 'smartheritagecontract',
  appChainIds: [1],
  preference: {
    options: 'smartWalletOnly',
  },
});