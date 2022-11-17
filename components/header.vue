<template>
  <div>
    <ModalsNewFormModal ref="modal"></ModalsNewFormModal>
    <v-app-bar id="header" color="transparent" absolute class="isolate">
      <nuxt-link to="/">
        <img src="~/assets/sources/logos/logo.svg" alt="logo" style="--w: clamp(13em, 16vw + 1em, 16.75em)">
      </nuxt-link>

      <aside class="center">

        <v-btn v-if="!isLogged" class="btn" @click="$parent.$parent.$refs.connect.modalConnect = true">LOG IN</v-btn>
        
        <div v-else class="center" style="gap: 10px">
          <img src="~/assets/sources/avatars/avatar-female.svg" alt="avatar">

          <v-menu bottom offset-y nudge-top="-10px">
            <template #activator="{on, attrs}">
              <v-btn class="btn" v-bind="attrs" v-on="on">
                <span>{{user.accountId}}</span>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list class="card" style="--bg: var(--secondary)">
              <v-list-item-group active-class="activeClass">
                <v-list-item
                  v-for="(item,i) in dataMenuLogin" :key="i"
                  @click="item.key==='logout' ? $store.commit('signOut') : $router.push(localePath(item.key))">
                  <v-list-item-title>{{item.name}}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </div>
      </aside>
    </v-app-bar>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "HeaderComponent",
  mixins: [computeds],
  data() {
    return {
      dataMenuLogin: [
        { key: "logout", name: "log out" }
      ],
    };
  },
  // created() {
  //   const theme = localStorage.getItem("theme");
  //   if (theme) {
  //     setTimeout(() => {
  //       this.$store.commit("switchTheme", theme);
  //     }, 100);
  //   }
  //   if (theme === "light") {this.themeButton = true}
  //   else {this.themeButton = false}
  // },
  mounted() {
    const queryString = window.location.search; // tomo mi url
    const urlParams = new URLSearchParams(queryString); // tomo los paramtros de url
    urlParams.get("transactionHashes") // variable donde esta el hash
    // const hash = "https://explorer.testnet.near.org/transactions/" + urlParams.get("transactionHashes") // esto es para tener el explorer

    if (urlParams.get("transactionHashes") !== null) {
      if (localStorage.tipohash === 'form') {
        this.$refs.modal.openModal('success')
      }
      localStorage.tipohash = null
      this.transactionHashes = urlParams.get("transactionHashes")
      history.replaceState(null, location.href.split("?")[0], '/');
    }
  },
  methods: {
    // changeTheme(theme) {
    //   this.$store.commit("switchTheme", theme);
    //   this.themeButton = !this.themeButton;
    // },
  },
};
</script>

<style src="~/assets/styles/components/header.scss" lang="scss" />
