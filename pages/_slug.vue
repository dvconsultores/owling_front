<template>
    <div id="home" class="divcol">
      <Navbar></Navbar>
      <!-- <WindowsLogin v-if="login"></WindowsLogin>
      <WindowsAbout ref="about"></WindowsAbout>
      <WindowsNewForm ref="newForm"></WindowsNewForm> -->
      <WindowsFillForm2 ref="fillForm2"></WindowsFillForm2>
    </div>
  </template>
  
<script>
import computeds from '~/mixins/computeds'
  
  export default {
    name: "HomePage",
    mixins: [computeds],
    validate({ params }) {
        const { slug } = params
        console.log(slug)
        return slug && typeof slug === 'string'
    },
    data() {
      return {
        form_slug: this.$route.params.slug,
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
    mounted() {
        console.log(this.$route.params.slug)
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