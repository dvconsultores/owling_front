<template>
    <div id="home" class="divcol">
      <Navbar></Navbar>
      <WindowsLogin v-if="login"></WindowsLogin>
      <WindowsAbout v-show="false" ref="about"></WindowsAbout>
      <WindowsNewForm v-show="false" ref="newForm"></WindowsNewForm>
      <WindowsFillForm v-show="false" ref="fillForm"></WindowsFillForm>
      <WindowsFillForm2 ref="fillForm2"></WindowsFillForm2>
    </div>
  </template>
  
<script>
import CryptoJs from "crypto-js"
import computeds from '~/mixins/computeds'
  
  export default {
    name: "HomePage",
    mixins: [computeds],
    validate({ params }) {
        const { slug } = params
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
      //  this.descryp()
    },
    methods: {
      descryp(){
        const descryp = CryptoJs.AES.decrypt(this.form_slug, 'owling')
        const decryptedData = descryp.toString(CryptoJs.enc.Utf8)
        console.log(decryptedData)
      },
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