<template>
  <div id="login">
    <!-- login window -->
    <WindowsWindow
      id="loginWindow" :show="loginWindow" bg="var(--secondary)" padding="30px" width="539px" height="max-content" styles="z-index: 2"
      @customeDrag="customeDrag"
    >
      <template #header>
        <div class="space fill_w">
          <div class="center" style="gap: 5px">
            <v-btn v-for="n in 3" :key="n" class="dots" :class="{active: n === 1}" />
          </div>
          
          <h2 class="p tup">welcome back</h2>
          
          <aside class="custome-window--header-controls">
            <v-btn @click="$parent.login = false">
              <img src="~/assets/sources/icons/back.svg" alt="go back icon">
            </v-btn>
            <v-btn @click="$parent.login = false">
              <img src="~/assets/sources/icons/close.svg" alt="close icon">
            </v-btn>
          </aside>
        </div>
      </template>

      <template #content>
        <v-form ref="formLogin" class="not_bg divcol" @submit="logIn()">
          <aside class="divcol center" style="gap: 15px">
            <v-btn class="btn2" style="--mr: 5px; --w: min(100%, 244px); --min-h: 34px; --fs: 14px">
              <img src="~/assets/sources/icons/google.svg" alt="google icon" style="--w: 18px">
              log in with google
            </v-btn>
            
            <span>Or login with Email</span>
          </aside>

          <section class="divcol my-6">
            <v-text-field
              v-model="formLogin.email" solo
              label="Email Address"
            ></v-text-field>
            
            <v-text-field
              v-model="formLogin.password" solo
              label="Password"
            ></v-text-field>
            
            <div class="space">
              <div class="center" style="gap: 10px" @click="keepLogged = !keepLogged">
                <img
                  :src="require(`~/assets/sources/icons/radio${keepLogged ? '-active': ''}.svg`)"
                  :alt="keepLogged ? 'keep logged' : 'no keed logged'" class="pointer" style="--w: 20px"
                >
                <label class="center">
                  <span>Keep me logged in</span>
                </label>
              </div>
              
              <a style="--c: #5803C5">Forget your Password?</a>
            </div>
          </section>

          <aside class="divcol center" style="gap: 30px">
            <v-btn class="btn align" style="--fs: 16px; --w: 167px; --h: 52.89px" @click="logIn()">
              log in
            </v-btn>
            
            <span>
              Don’t have a account? 
              <a style="--c: #5803C5" @click="loginWindow = false; signinWindow = true">Sign up</a>
            </span>
          </aside>
        </v-form>
      </template>
    </WindowsWindow>


    <!-- signin window -->
    <WindowsWindow
      id="signinWindow" :show="signinWindow" bg="var(--secondary)" padding="30px" width="539px" height="max-content" styles="z-index: 2"
      @customeDrag="customeDrag"
    >
      <template #header>
        <div class="space fill_w">
          <div class="center" style="gap: 5px">
            <v-btn v-for="n in 3" :key="n" class="dots" :class="{active: n === 1}" />
          </div>
          
          <h2 class="p tup">create account</h2>
          
          <aside class="custome-window--header-controls">
            <v-btn @click="signinWindow = false; loginWindow = true">
              <img src="~/assets/sources/icons/back.svg" alt="go back icon">
            </v-btn>
            <v-btn @click="$parent.login = false">
              <img src="~/assets/sources/icons/close.svg" alt="close icon">
            </v-btn>
          </aside>
        </div>
      </template>

      <template #content>
        <v-form ref="formCreate" class="not_bg divcol" @submit="signIn()">
          <v-text-field
            v-model="formCreate.name" solo
            label="Name"
          ></v-text-field>
          
          <v-text-field
            v-model="formCreate.email" solo
            label="Email Address"
          ></v-text-field>
          
          <v-text-field
            v-model="formCreate.password" solo
            label="Password"
          ></v-text-field>
          
          <v-text-field
            v-model="formCreate.repeatPassword" solo
            label="Confirm Password"
          ></v-text-field>
          
          <v-btn class="btn align" style="--fs: 16px; --w: 167px; --h: 52.89px" @click="signIn()">
            sign in
          </v-btn>
        </v-form>
      </template>
    </WindowsWindow>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
import customeDrag from '~/mixins/customeDrag'

export default {
  name: "AboutComponent",
  mixins: [computeds, customeDrag],
  data() {
    return {
      loginWindow: true,
      signinWindow: false,

      formLogin: {
        email: undefined,
        password: undefined,
      },
      keepLogged: undefined,

      formCreate: {
        name: undefined,
        email: undefined,
        password: undefined,
        repeatPassword: undefined,
      },
    }
  },
  methods: {
    logIn() {
      if (this.$refs.formLogin.validate()) {
        this.loginWindow = false
        console.log("logged")
      }
    },
    signIn() {
      if (this.$refs.formCreate.validate()) {
        this.signinWindow = false
        console.log("saved")
      }
    },
  },
};
</script>

<style src="~/assets/styles/components/windows/login.scss" lang="scss" />
