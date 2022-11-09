<template>
  <v-app id="layout" class="relative">
    <Alerts ref="alerts"></Alerts>
    <Header ref="navbar" />
    <v-main :class="wrapperSpace?'with':'without'" class="parent">
      <Navbar ref="navbar" />
      <nuxt-child />
    </v-main>
    <Footer ref="footer"></Footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  // middleware: ['authenticated'],
  data() {
    return {
      wrapperSpace: true,
    }
  },
  created() {
    // get data profile
    this.$store.dispatch("getData");
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style src="~/assets/styles/layouts/default.scss" lang="scss" />
