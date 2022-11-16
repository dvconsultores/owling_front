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
          <v-btn class="btn" style="--w: 167px" @click="fillForm()">next</v-btn>
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
            <v-btn @click="clearWindow()">
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
              <label :for="`question ${i+1}`" class="mb-4">{{verifyQuestion(item.question)}} 
                <span style="--c: var(--error)">This question is required*</span>
              </label>
              
              <v-text-field
                v-if="item.type == 'input'"
                :id="`question ${i+1}`" v-model="item.answer" solo
                label="Type your answer here . . ."
                :error="item.error"
                @input="inputAnswer(item)"
              ></v-text-field>

              <v-select
                v-else
                :id="`question ${i+1}`"
                v-model="item.answer"
                :items="item.answers"
                hide-details solo
                label="Select answer..."
                :error="item.error"
                :menu-props="{offsetY: true}"
                @change="changeSelect(item)"
              ></v-select>

              <!-- <v-text-field
                v-else
                :id="`question ${i+1}`" v-model="item.answer" solo
                label="Type2 your answer here . . ."
              ></v-text-field> -->

              

              <v-btn
                v-if="auxBtn"
                class="btn align" style="--w: 164.19px"
                @click="nextStep2(item)">
                {{'next'}}
              </v-btn>
              
              <v-btn
                v-else
                :disabled="doneBtn"
                class="btn align" style="--w: 164.19px"
                @click="doneForm(item)">
                {{'done'}}
                <v-progress-circular
                  v-if="doneBtn"
                  :size="21"
                  indeterminate
                ></v-progress-circular>
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
      width="31.25em" height="max-content" padding="30px" styles="top: 0"
      @customeDrag="customeDrag"
    >
      <template #header>
        <div class="space fill_w">
          <h2 class="p tup">fill form</h2>
          
          <aside class="custome-window--header-controls">
            <v-btn
              @click="mintNftWindow = false; mainWindow = true; auxBtn = true; clearWindow()">
              <img src="~/assets/sources/icons/back.svg" alt="go back icon">
            </v-btn>
            <v-btn @click="clearWindow()">
              <img src="~/assets/sources/icons/close.svg" alt="close icon">
            </v-btn>
          </aside>
        </div>
      </template>

      <template #content>
        <h4>Thank you for your time</h4>
        <h4>Result: {{nftTitle}}</h4>
        <h4>Total Points: {{nftPoints}}</h4>

        <img :src="nftPreview" alt="your nft" class="nft-preview">

        <aside class="controls center mt-5">
          <v-btn class="btn2" @click="generate()">generate</v-btn>
          <v-btn class="btn2" @click="nftMint()">mint</v-btn>
        </aside>
      </template>
    </WindowsWindow>
  </div>
</template>

<script>
import * as nearAPI from 'near-api-js'
import computeds from '~/mixins/computeds'
import customeDrag from '~/mixins/customeDrag'

const {Contract } = nearAPI

export default {
  name: "FillFormComponent",
  mixins: [computeds, customeDrag],
  data() {
    return {
      form_id: "4",
      auxBtn: true,
      mainWindow: true,
      fillFormWindow: false,
      mintNftWindow: false,
      doneBtn: false,
      
      windowStep: 1,
      dataFormFill: [
        // {
        //   question: "",
        //   answer: undefined,
        // },
        // {
        //   question: "",
        //   answer: undefined,
        // },
      ],
      nftTitle: null,
      nftPreview: require("~/assets/sources/images/nft-preview-2.jpg"),
      nftPoints: null,
      zIndex: undefined,
      resContract: {}
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
    this.getForm()
  },
  methods: {
    async nftMint () {
      const CONTRACT_NAME = 'nft.owling.testnet'
      if (this.$wallet.isSignedIn()) {
      
        const contract = new Contract(this.$wallet.account(), CONTRACT_NAME, {
          changeMethods: ['nft_mint'],
          sender: this.$wallet.account()
        })

        const datos = {
          receiver_id: this.$wallet.getAccountId(),
          token_metadata: {
            title: this.nftTitle + ' #' + this.nftPoints,
            description: 'Form ID: ' + this.resContract.form_id,
            media: this.nftPreview,
            reference: this.resContract.form_id
          }
        }

        await contract.nft_mint(datos,'300000000000000', "30000000000000000000000")
        .then((response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
        
      }
    },
    generate() {
      const a = document.createElement('a');
      a.download = true;
      a.target = '_blank';
      a.href= this.nftPreview;

      a.click()
    },
    fillForm() {
      if (this.$wallet.isSignedIn()) {
        this.mainWindow = false
        this.fillFormWindow = true
      } else {
        return alert("Please login to use this function.")
      }
    },
    changeSelect(item) {
      item.error = false
    }, 
    async getForm () {
      const CONTRACT_NAME = 'contract.owling.testnet'
      if (this.$wallet.isSignedIn()) {
        const contract = new Contract(this.$wallet.account(), CONTRACT_NAME, {
          viewMethods: ['form_by_id'],
          sender: this.$wallet.account()
        })

        await contract.form_by_id({
          form_id: this.form_id
        })
        .then((response) => {
          for (let i = 0; i < response.questions.length; i++) {
            const item = {
              question: response.questions[i],
              answer: undefined,
              answers: response.possibly_answers[i],
              type: undefined,
              error: false
            }

            if (response.possibly_answers[i][0] === '') {
              item.type = 'input'
            } else {
              item.type = 'select'
            }

            this.dataFormFill.push(item)
          }
          this.auxBtn = true
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    verifyQuestion(item) {
      if (item.includes('?')) {
        return item
      }
      return item + '?'
    },
    goBack() {
      if (this.windowStep === 1) {
        this.clearWindow()
      } else {
        this.windowStep--
        if (this.windowStep < this.dataFormFill.length) {
          this.auxBtn = true
        }
      }
    },
    clearWindow() {
      this.windowStep = 1
      this.dataFormFill.forEach(e => {e.answer = undefined})
      this.fillFormWindow = false
      this.mintNftWindow = false
      this.mainWindow = true
      this.auxBtn = true
    },
    openFillForm() {
      if (this.$wallet.isSignedIn()) {
        this.mainWindow = false
        this.fillFormWindow = true
        this.auxBtn = true
      } else {
        return alert("Please login to use this function.")
      }
    },
    inputAnswer(item) {
      if (item.answer && item.answer !== '') {
        item.error = false
      } else {
        item.error = true
      }
    },
    nextStep() {
      if (this.windowStep < this.dataFormFill.length) {
        this.windowStep++
        this.auxBtn = true
      }
      if (this.windowStep === this.dataFormFill.length) {
        this.auxBtn = false
      }
    },
    nextStep2(item) {
      if (item.answer && item.answer !== '') {
        if (this.windowStep < this.dataFormFill.length) {
          this.windowStep++
          this.auxBtn = true
        }
        if (this.windowStep === this.dataFormFill.length) {
          this.auxBtn = false
        }
      } else {
        item.error = true
      }
    },
    async doneForm(item) {
      if (item.answer && item.answer !== '') {
        this.doneBtn = true
        const CONTRACT_NAME = 'contract.owling.testnet'

        if (this.$wallet.isSignedIn()) {
          const contract = new Contract(this.$wallet.account(), CONTRACT_NAME, {
            changeMethods: ['submit_form'],
            viewMethods: [],
            sender: this.$wallet.account()
          })

          const datos = []

          for (let i = 0; i < this.dataFormFill.length; i++) {
            datos.push(this.dataFormFill[i].answer)
          }

          await contract.submit_form({
            form_id: this.form_id,
            answers: datos
          })
          .then((response) => {
            this.resContract = response
            this.nftPreview = response.final_image
            this.nftTitle = response.final_result
            this.nftPoints = response.total_points
            this.fillFormWindow = false
            this.mintNftWindow = true
            this.doneBtn = false
          }).catch((error) => {
            console.log(error)
            this.doneBtn = false
          })
        }
        
      } else {
        item.error = true
      }
    }
  },
};
</script>

<style src="~/assets/styles/components/windows/fill-form.scss" lang="scss" />
