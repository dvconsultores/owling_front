<template>
  <div id="about">
    <!-- main window -->
    <WindowsWindow
      id="mainWindow" :show="teamWindow" bg="var(--secondary)" padding="30px" width="539px" height="420px"
      @customeDrag="customeDrag"
    >
      <template #header>
        <div class="center" style="gap: 5px">
          <v-btn v-for="n in 3" :key="n" class="dots" :class="{active: n === 1}"/>
        </div>
        
        <h2 class="p tup align">about us</h2>

        <v-btn @click="teamWindow = false">
          <img src="~/assets/sources/icons/close.svg" alt="close icon">
        </v-btn>
      </template>

      <template #content>
        <section class="center" style="gap: 10px">
          <img :src="dataAbout.img" :alt="`${dataAbout.title} image`" style="--w: 144px">
          
          <div class="divcol">
            <h4>{{dataAbout.title}}</h4>
            <p class="p">{{dataAbout.desc}}</p>
          </div>
        </section>
        <!-- <v-window v-model="windowAbout">
          <v-window-item v-for="(item, i) in dataAbout" :key="i" :value="i" class="not_bg center" style="gap: 10px">
            <img :src="item.img" :alt="`${item.title} image`" style="--w: 144px">
            
            <div class="divcol">
              <h4>{{item.title}}</h4>
              <p class="p">{{item.desc}}</p>
            </div>
          </v-window-item>
        </v-window> -->
      </template>
    </WindowsWindow>


    <!-- team window -->
    <WindowsWindow
      id="team" :show="teamWindow" bg="var(--secondary)" padding="10px" width="418px" height="305.5px"
      :styles="`bottom: 5%; right: 30%; z-index: ${zIndex}`" @customeDrag="customeDrag"
    >
      <template #header>
        <div class="space fill_w">
          <h2 class="p tup">the team</h2>
          
          <v-btn @click="teamWindow = false">
            <img src="~/assets/sources/icons/close.svg" alt="close icon">
          </v-btn>
        </div>
      </template>

      <template #content>
        <section class="grid fill" style="--gtc: repeat(auto-fit, minmax(min(100%, 100px), 1fr)); --pi: center; gap: 20px 10px">
          <div v-for="(item, i) in dataTeam" :key="i" class="divcol center">
            <img :src="item.img" :alt="`${item.name} image`" style="--w: 49px; --h: 52px">
            <span style="font-size: 14px">{{item.name}}</span>
          </div>
        </section>
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
      // windowAbout: 1,
      teamWindow: true,
      dataAbout: {
        img: require("~/assets/sources/images/welcome-img.jpg"),
        title: "Welcome to",
        desc: "We are Owling ???? an app to create and submit forms, earn NFTs and make your creativity profitable Create forms, upload your art, make it viral and earn $OWLs Submit forms and reclaim and share your NFT as result."
      },
      dataTeam: [
        {
          img: require("~/assets/sources/team/andres.svg"),
          name: "andres (A:)"
        },
        {
          img: require("~/assets/sources/team/eugenia.svg"),
          name: "eugenia"
        },
        {
          img: require("~/assets/sources/team/edward.svg"),
          name: "edward (D:)"
        },
        {
          img: require("~/assets/sources/team/leyner.svg"),
          name: "leyner"
        },
        {
          img: require("~/assets/sources/team/yasmin.svg"),
          name: "yasmin (C:)"
        },
        {
          img: require("~/assets/sources/team/patricia.svg"),
          name: "patricia"
        },
      ],
      zIndex: undefined,
    }
  },
  mounted() {
    this.zIndex = this.$store.state.zIndex
  },
  methods: {
  },
};
</script>

<style src="~/assets/styles/components/windows/about.scss" lang="scss" />
