<template>
  <div>
    <v-toolbar id="navbar" color="transparent" absolute class="isolate" min-height="100%" width="var(--w-navbar)">
      <v-btn
        v-for="(item, i) in dataNavbar" :key="i" color="transparent" :ripple="false"
        :class="{openMenuList: item.name === 'menu'}">
        <img :src="item.img" :alt="`${item.name} icon`" style="--w: 55px">
        <span>{{item.name}}</span>
      </v-btn>
    </v-toolbar>

    <v-menu v-model="menuList" right offset-x nudge-left="-10px" activator=".openMenuList">
      <v-list class="menuList card">
        <v-list-item-group active-class="activeClass" :mandatory="isClicked">
          <v-list-item @click="$parent.clearAbout()">
            <v-list-item-title>{{menu.about}}</v-list-item-title>
          </v-list-item>
          
          <v-list-item @click="$parent.clearNewForm()">
            <v-list-item-title>
              {{menu.newForm}}
            </v-list-item-title>
            <v-icon large>mdi-menu-right</v-icon>
          </v-list-item>
          
          <v-list-item @click="$parent.clearFillForm()">
            <v-list-item-title>{{menu.fillForm}}</v-list-item-title>
            <v-icon large>mdi-menu-right</v-icon>
          </v-list-item>
          
          <v-list-item v-if="!isLogged" @click="$store.commit('signIn')">
            <v-list-item-title>{{menu.login}}</v-list-item-title>
          </v-list-item>
          
          <v-list-item v-else @click="$store.commit('signOut')">
            <v-list-item-title>{{menu.logout}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "NavbarComponent",
  mixins: [computeds],
  data() {
    return {
      dataNavbar: [
        {
          img: require("~/assets/sources/icons/menu.svg"),
          name: "menu",
          menu: {
            about: "About us",
            newForm: "New Form",
            fillForm: "Fill a Form",
            login: "Log in",
            logout: "Log out",
          }
        },
        {
          img: require("~/assets/sources/icons/twitter.svg"),
          name: "twitter",
        },
        {
          img: require("~/assets/sources/icons/instagram.svg"),
          name: "instagram",
        },
      ],
      menuSelection: undefined,
      menuList: false,
      isClicked: false,
    };
  },
  computed: {
    menu() {
      return this.dataNavbar[0].menu
    },
  },
  watch: {
    menuList() {
      setTimeout(() => {
        if (this.isClicked === false) {
          for (const item of document.querySelectorAll(".menuList .v-list-item")) {
            item.onclick = () => {
              this.isClicked = true;
              item.onclick = null
            }
          }
        }
      }, 100);
    }
  },
  methods: {
  },
};
</script>

<style src="~/assets/styles/components/navbar.scss" lang="scss" />
