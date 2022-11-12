<template>
  <div id="home" class="divcol">
    <Navbar></Navbar>
    <WindowsLogin v-if="login"></WindowsLogin>
    <WindowsAbout v-if="about"></WindowsAbout>
    <WindowsNewForm v-if="newForm"></WindowsNewForm>
    <WindowsFillForm v-if="fillForm"></WindowsFillForm>
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
    clearAll() {
      this.clearAbout()
      this.clearNewForm()
      this.clearFillForm()
      this.login = false
    },
    clearAbout() {
      this.about = false
      setTimeout(() => {this.about = true}, 200);
      console.log("about cleared")
    },
    clearNewForm() {
      this.newForm = false
      setTimeout(() => {this.newForm = true}, 200);
      console.log("new form cleared")
    },
    clearFillForm() {
      this.fillForm = false
      setTimeout(() => {this.fillForm = true}, 200);
      console.log("fill form cleared")
    },
  }
};
</script>

<style src="~/assets/styles/pages/index.scss" lang="scss" />
