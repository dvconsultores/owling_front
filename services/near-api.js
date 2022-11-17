import * as nearAPI from 'near-api-js'
import Vue from 'vue'

export default async function NearApi() {
  const
    { connect, keyStores, WalletConnection } = nearAPI,
    keyStore = new keyStores.BrowserLocalStorageKeyStore(),
    config = {
      networkId: "mainnet",
      keyStore, 
      nodeUrl: "https://rpc.mainnet.near.org",
      // walletUrl: "https://wallet.testnet.near.org",
      walletUrl: localStorage.getItem("walletUrl"),
      helperUrl: "https://helper.mainnet.near.org",
      explorerUrl: "https://explorer.mainnet.near.org",
    },
    // connect to NEAR
    near = await connect(config)
    // create wallet connection
    // wallet = new WalletConnection(near);

  Vue.prototype.$wallet = new WalletConnection(near)
}

/*   when need buy
// create contract connection
const contract = new Contract(wallet.account(), item.contract_market, {
  changeMethods: ["buy"],
  sender: wallet.account(),
})
*/
