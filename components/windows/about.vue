<template>
  <div id="about">
    <!-- main window -->
    <WindowsWindow
      id="mainWindow" bg="var(--secondary)" padding="30px" width="539px" height="420px"
      @customeDrag="customeDrag"
    >
      <template #header>
        <div class="center" style="gap: 5px">
          <v-btn v-for="n in 3" :key="n" class="dots" :class="{active: n === 1}" />
        </div>
        
        <h2 class="p tup align">about us</h2>
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
      id="team" :show="false" bg="var(--secondary)" padding="10px" width="418px" height="305.5px"
      styles="bottom: 0; right: 10%; z-index: 2" @customeDrag="customeDrag"
    >
      <template #header>
        <h2 class="p tup align">the team</h2>
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
      dataAbout: {
        img: require("~/assets/sources/images/welcome-img.jpg"),
        title: "Welcome to",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s"
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
    }
  },
  methods: {
  },
};
</script>

<style src="~/assets/styles/components/windows/about.scss" lang="scss" />
