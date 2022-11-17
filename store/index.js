export const state = () => ({
  theme: "light",
  overlay: { opacity: 0.2, color: "black" },
  dataUser: {
    banner: undefined,
    avatar: undefined,
    accountId: undefined,
    username: undefined,
    email: undefined,
    discord: undefined,
    instagram: undefined,
    twitter: undefined,
    telegram: undefined,
    tier: 2,
    balance: 0,
    dataSocial: [],
  },
  zIndex: 1,
});

export const mutations = {
  switchTheme(state, theme) {
    // theme
    state.theme = theme
    localStorage.setItem("theme", theme)
    document.documentElement.className = theme;
    // overlay
    if (theme === "light") { state.overlay.opacity = 0.2; state.overlay.color = "white" }
    else { state.overlay.opacity = 0.5; state.overlay.color = "black" }
  },
  increaseIndex(state, event) {
    if (event?.currentTarget) {
      event.currentTarget.style.zIndex = state.zIndex
    } else {
      event.style.zIndex = state.zIndex
    }
    state.zIndex++
  },
  setData(state, data) {
    if (window.$nuxt.$wallet.isSignedIn() && typeof data === 'string') {
      state.dataUser.avatar = require('~/assets/sources/avatars/avatar-female.svg');
      state.dataUser.accountId = data;
    } else if (window.$nuxt.$wallet.isSignedIn() && typeof data === 'object') {
      state.dataUser.accountId = data.wallet;
      state.dataUser.banner = data.banner ? this.$axios.defaults.baseURL+data.banner : undefined;
      state.dataUser.avatar = data.avatar ? this.$axios.defaults.baseURL+data.avatar : require('~/assets/sources/avatars/avatar-female.svg');
      state.dataUser.username = data.username;
      state.dataUser.email = data.email;
      state.dataUser.bio = data.bio;
      // find socials
      const arrSocials = Object.entries(data).filter(arr =>
        arr[0] === 'telegram' && arr[1] || arr[0] === 'discord' && arr[1]
        || arr[0] === 'instagram' && arr[1] || arr[0] === 'twitter' && arr[1]
      )
      // set data socials
      for (let [keys, values] of arrSocials) {
        // properties <--
        state.dataUser[keys] = values
        
        // icons <--
        if (keys === "telegram") {
          // telegram
          values = `https://t.me/${values}`
        } else if (keys === "discord") {
          // discord
          values = `https://discord.com/channels/${values}`
        } else if (keys === "instagram") {
          // instagram
          keys = 'mdi-instagram'
          values = `https://instagram.com/${values}`
        } else if (keys === "twitter") {
          // twitter
          keys = 'mdi-twitter'
          values = `https://twitter.com/${values}`
        } else if (keys === "facebook") {
          // facebook
          values = `https://facebook.com/${values}`
        }
        // push data socials
        state.dataUser.dataSocial.push({ icon: keys, link: values })
      }
    };
  },
  signIn(state, key) {
    const nearWallet = "https://wallet.mainnet.near.org"
    // const myNearWallet = "https://wallet.testnet.near.org"
    const myNearWallet = "https://mainnet.mynearwallet.com"
    
    if (key === 'near') {
      localStorage.setItem("walletUrl", nearWallet)
      window.$nuxt.$wallet._walletBaseUrl = nearWallet
    }
    else if (key === 'myNear') {
      localStorage.setItem("walletUrl", myNearWallet)
      window.$nuxt.$wallet._walletBaseUrl = myNearWallet
    } else if (key === 'sender') {
      return alert("Comming soon")
    }
    
    window.$nuxt.$wallet.requestSignIn(
      'backend.owlling.near'
    );
  },
  signOut() {
    window.$nuxt.$wallet.signOut();
    setTimeout(() => this.$router.go(0), 100);
    this.$router.push(this.localePath('/'));
  },
};

export const actions = {
  getData({commit}) {
    try {
      // get data user
      commit("setData", window.$nuxt.$wallet.getAccountId()); /*  -->   if use only smart contract */
      /*           if use smart contract + backend            */
      // this.$axios.post(`${this.$axios.defaults.baseURL}api/v1/get-perfil-data/`, { "wallet": window.$nuxt.$wallet.getAccountId() })
      // .then(result => {
      //   // set data profile
      //   result.data[0] ? commit("setData", result.data[0]) : commit("setData", window.$nuxt.$wallet.getAccountId());
      // // catch error django
      // }).catch(err => {
      //   this.$alert("cancel", {desc: err.message})
      //   console.error(err);
      // })
    // catch error near
    } catch (err) {
      this.$alert("cancel", {desc: err.message})
      console.error(err);
    }
  },
};

export const getters = {
  pagination: () => ({items, currentPage, itemsPerPage, search, filterA, filterB}) => {
    // filters
    let filters = items;
    // search
    if (search) filters = filters.filter(data => data.name.includes(search))
    // filter A (tier)
    if (filterA) filters = filters.filter(data => data.tier === filterA)

    return filters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  }
};

export const modules = {
};
