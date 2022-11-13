<template>
  <div id="fillForm">
    <!-- main window -->
    <WindowsWindow
      v-show="mainWindow" id="mainWindow"
      width="max-content" height="165px" :styles="`right: 0; bottom: 10%; z-index: ${zIndex}`"
      @customeDrag="customeDrag"
    >
      <template #content>
        <div class="divcol center fill tcenter" style="gap: 10px; border: 2px solid var(--accent); padding: 20px">
          <h4 class="p" style="cursor: default">We invite you to fill in a form</h4>
          <v-btn class="btn" style="--w: 167px" @click="mainWindow = false; fillFormWindow = true">next</v-btn>
        </div>
      </template>
    </WindowsWindow>


    <!-- fill form window -->
    <WindowsWindow
      v-show="fillFormWindow" id="fillFormWindow"
      width="959px" height="max-content" padding="30px"
      @customeDrag="customeDrag"
    >
      <template #header>
        <div class="space fill_w">
          <h2 class="p tup">fill form</h2>
          
          <aside class="custome-window--header-controls">
            <v-btn
              @click="goBack()">
              <img src="~/assets/sources/icons/back.svg" alt="go back icon">
            </v-btn>
            <v-btn @click="clearWindow(); $parent.clearFillForm()">
              <img src="~/assets/sources/icons/close.svg" alt="close icon">
            </v-btn>
          </aside>
        </div>
      </template>

      <template #content>
        <h4>Please fill out each answer to the best of your ability</h4>
        
        <v-window v-model="windowStep">
          <v-window-item v-for="(item, i) in dataFormFill" :key="i" :value="i+1">
            <v-form class="divcol" @submit.prevent="nextStep()">
              <label :for="`question ${i+1}`" class="mb-4">{{item.question}} 
                <span style="--c: var(--error)">This question is required*</span>
              </label>
              
              <v-text-field
                :id="`question ${i+1}`" v-model="item.answer" solo
                label="Type your answer here . . ."
              ></v-text-field>
              
              <v-btn
                class="btn align" style="--w: 164.19px"
                @click="windowStep+1 === dataFormFill.length ? nextStep() : doneForm()">
                {{windowStep+1 === dataFormFill.length ? 'next' : 'done'}}
              </v-btn>

              <span class="alignr" style="font-size: 14px; --stroke: .5px">{{windowStep}}/{{dataFormFill.length}}</span>
            </v-form>
          </v-window-item>
        </v-window>
      </template>
    </WindowsWindow>


    <!-- mint nft form window -->
    <WindowsWindow
      v-show="mintNftWindow" id="mintNftWindow"
      width="80vh" height="max-content" padding="30px" styles="top: 0"
      @customeDrag="customeDrag"
    >
      <template #header>
        <div class="space fill_w">
          <h2 class="p tup">fill form</h2>
          
          <aside class="custome-window--header-controls">
            <v-btn
              @click="mintNftWindow = false; mainWindow = true">
              <img src="~/assets/sources/icons/back.svg" alt="go back icon">
            </v-btn>
            <v-btn @click="$parent.clearFillForm()">
              <img src="~/assets/sources/icons/close.svg" alt="close icon">
            </v-btn>
          </aside>
        </div>
      </template>

      <template #content>
        <h4>Thank you for your time</h4>
        
        <DrawingEditor></DrawingEditor>
      </template>
    </WindowsWindow>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
import customeDrag from '~/mixins/customeDrag'

export default {
  name: "FillFormComponent",
  mixins: [computeds, customeDrag],
  data() {
    return {
      mainWindow: true,
      fillFormWindow: false,
      mintNftWindow: false,
      
      windowStep: 1,
      dataFormFill: [
        {
          question: "What is the name of your project?",
          answer: undefined,
        },
        {
          question: "What is the name of your project?",
          answer: undefined,
        },
      ],
      zIndex: undefined,
    }
  },
  watch: {
    mainWindow(current) {
      if (current) {
        const target = document.querySelector("#fillForm #mainWindow")
        this.$store.commit("increaseIndex", target)
      }
    },
    fillFormWindow(current) {
      if (current) {
        const target = document.getElementById("fillFormWindow")
        this.$store.commit("increaseIndex", target)
      }
    },
  },
  mounted() {
    this.zIndex = this.$store.state.zIndex
  },
  methods: {
    goBack() {
      if (this.windowStep === 1) {
        this.clearWindow();
        this.mainWindow = true
      } else {
        this.windowStep--
      }
    },
    clearWindow() {
      this.windowStep = 1
      this.dataFormFill.forEach(e => {e.answer = undefined})
      this.fillFormWindow = false
    },
    nextStep() {
      if (this.windowStep < this.dataFormFill.length) this.windowStep++
    },
    doneForm() {
      this.fillFormWindow = false
      this.mintNftWindow = true
    },
  },
};
</script>

<style src="~/assets/styles/components/windows/fill-form.scss" lang="scss" />
