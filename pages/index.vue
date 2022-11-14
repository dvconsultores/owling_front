<template>
  <div id="home" class="divcol">
    <Navbar></Navbar>
    <WindowsLogin v-if="login"></WindowsLogin>
    <WindowsAbout ref="about"></WindowsAbout>
    <WindowsNewForm ref="newForm"></WindowsNewForm>
    <WindowsFillForm ref="fillForm"></WindowsFillForm>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "HomePage",
  mixins: [computeds],
  data() {
    return {
      login: false,
      about: true,
      newForm: true,
      fillForm: true,
    }
  },
  head() {
    const title = 'Home';
    return {
      title,
    }
  },
  methods: {
    openAbout() {
      this.$store.commit("increaseIndex", document.querySelector("#about #mainWindow"))
      this.$store.commit("increaseIndex", document.querySelector("#about #team"))
      this.$refs.about.teamWindow = true
    },
    openNewForm() {
      this.$refs.newForm.openNewForm()
    },
    openFillForm() {
      this.$refs.fillForm.openFillForm()
    },
  }
};
</script>

<style src="~/assets/styles/pages/index.scss" lang="scss" />
