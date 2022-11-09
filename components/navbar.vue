<template>
  <div>
    <v-toolbar id="navbar" color="transparent" absolute class="isolate" min-height="100%" width="var(--w-navbar)">
      <v-btn
        v-for="(item, i) in dataNavbar" :key="i" color="transparent" :ripple="false"
        @click.prevent="">
        <img :src="item.img" :alt="`${item.name} icon`" style="--w: 55px">
        <span>{{item.name}}</span>
      </v-btn>
    </v-toolbar>
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
  methods: {
    // changeTheme(theme) {
    //   this.$store.commit("switchTheme", theme);
    //   this.themeButton = !this.themeButton;
    // },
  },
};
</script>

<style src="~/assets/styles/components/navbar.scss" lang="scss" />
