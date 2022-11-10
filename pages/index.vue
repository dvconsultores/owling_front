<template>
  <div id="home" class="divcol">
    <Windows
      id="about" bg="var(--secondary)" padding="30px" width="539px" height="420px"
      @customeDrag="customeDrag"
    >
      <template #header>
        <div class="center" style="gap: 5px">
          <v-btn
            v-for="(n, i) in dataAbout.length" :key="i" :class="{active: i === windowAbout}"
            @click="windowAbout = i"
          />
        </div>
        
        <h2 class="p tup align">about us</h2>
      </template>

      <template #content>
        <v-window v-model="windowAbout">
          <v-window-item v-for="(item, i) in dataAbout" :key="i" :value="i" class="center" style="gap: 10px">
            <img :src="item.img" :alt="`${item.title} image`" style="--w: 144px">
            
            <div class="divcol">
              <h4>{{item.title}}</h4>
              <p class="p">{{item.desc}}</p>
            </div>
          </v-window-item>
        </v-window>
      </template>
    </Windows>


    <Windows
      bg="var(--secondary)" width="326px" height="max-content" padding="30px" styles="right: 0; top: 10%"
      @customeDrag="customeDrag"
    >
      <template #header>
        <h2 class="p tup align">new form</h2>
      </template>

      <template #content>
        <div class="divcol center" style="gap: 20px">
          <img src="~/assets/sources/images/form-img.png" alt="new form image" style="--w: 169px">
          <v-btn class="btn" style="--w: 164.19px">create</v-btn>
        </div>
      </template>
    </Windows>


    <Windows
      width="max-content" height="151px" styles="right: 0; bottom: 10%"
      @customeDrag="customeDrag"
    >
      <template #content>
        <div class="divcol center fill tcenter" style="gap: 10px">
          <h4 class="p">We invite you to fill in a form</h4>
          <v-btn class="btn" style="--w: 167px">next</v-btn>
        </div>
      </template>
    </Windows>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
import customeDrag from '~/mixins/customeDrag'

export default {
  name: "HomePage",
  mixins: [computeds, customeDrag],
  data() {
    return {
      zIndex: 1,
      windowAbout: 0,
      dataAbout: [
        {
          img: require("~/assets/sources/images/welcome-img.jpg"),
          title: "Welcome to",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s"
        },
      ],
    }
  },
  head() {
    const title = 'Home';
    return {
      title,
    }
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/pages/index.scss" lang="scss" />
