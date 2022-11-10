<template>
  <div id="home" class="divcol">
    <Windows
      id="about" bg="var(--secondary)" padding="30px" width="539px" height="420px"
      @customeDrag="customeDrag">
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
