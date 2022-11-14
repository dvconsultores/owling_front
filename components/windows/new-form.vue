<template>
  <div id="newForm">
    <ModalsNewFormModal ref="modal"></ModalsNewFormModal>

    <!-- main window -->
    <WindowsWindow
      v-show="mainWindow" id="mainWindow"
      bg="var(--secondary)" width="326px" height="max-content" padding="30px" styles="right: 0; top: 10%"
      @customeDrag="customeDrag"
    >
      <template #header>
        <h2 class="p tup align">new form</h2>
      </template>

      <template #content>
        <div class="divcol center" style="gap: 20px">
          <img src="~/assets/sources/images/form-img.png" alt="new form image" style="--w: 169px">
          <v-btn class="btn" style="--w: 164.19px" @click="mainWindow = false; createWindow = true">create</v-btn>
        </div>
      </template>
    </WindowsWindow>


    <!-- create window -->
    <WindowsWindow
      v-show="createWindow" id="createForm"
      width="978px" height="464px" padding="30px"
      @customeDrag="customeDrag"
    >
      <template #header>
        <div class="space fill_w">
          <h2 class="p tup">new form</h2>
          
          <aside class="custome-window--header-controls">
            <v-btn @click="clearWindow()">
              <img src="~/assets/sources/icons/back.svg" alt="go back icon">
            </v-btn>
            <v-btn @click="clearWindow()">
              <img src="~/assets/sources/icons/close.svg" alt="close icon">
            </v-btn>
          </aside>
        </div>
      </template>

      <template #content>
        <h4>Create or import a form to start gathering data</h4>
        
        <v-sheet color="var(--secondary)" class="spacee">
          <div class="divcol center" style="gap: 20px">
            <img src="~/assets/sources/images/zero-form-img.png" alt="zero form image" style="--w: 169px">
            <v-btn class="btn" style="--w: 164.19px" @click="createWindow = false; zeroFormWindow = true">from zero</v-btn>
          </div>
          
          <div class="divcol center" style="gap: 20px">
            <img src="~/assets/sources/images/edit-form-img.png" alt="edit form image" style="--w: 169px">
            <v-btn class="btn" style="--w: 164.19px" @click="createWindow = false; editFormWindow = true">edit</v-btn>
          </div>
          
          <!-- <div class="divcol center" style="gap: 20px">
            <img src="~/assets/sources/images/statistics-form-img.png" alt="statistics form image" style="--w: 169px">
            <v-btn class="btn" style="--w: 164.19px" @click="createWindow = false; statsFormWindow = true">statistics</v-btn>
          </div> -->
        </v-sheet>
      </template>
    </WindowsWindow>


    <!-- zero form window -->
    <WindowsWindow
      v-show="zeroFormWindow" id="zeroForm"
      width="61.125em" height="628px" padding="30px" styles="top: 0"
      @customeDrag="customeDrag"
    >
      <template #header>
        <div class="space fill_w">
          <h2 class="p tup">new form - from zero</h2>
          
          <aside class="custome-window--header-controls">
            <v-btn @click="zeroFormWindow = false; createWindow = true">
              <img src="~/assets/sources/icons/back.svg" alt="go back icon">
            </v-btn>
            <v-btn @click="clearWindow()">
              <img src="~/assets/sources/icons/close.svg" alt="close icon">
            </v-btn>
          </aside>
        </div>
      </template>

      <template #content>
        <h4>Fill in the following information</h4>
        
        <v-form class="divcol pb-7 px-12">
          <div class="acenter" style="gap: 10px">
            <label for="title">Title</label>
            <v-text-field
              id="title"
              v-model="formZero.title" solo
            ></v-text-field>
          </div>
          
          <template v-for="(item, i) in formZero.slots">
            <div :key="i" class="acenter" style="gap: 10px">
              <label for="question" class="tup">question</label>
              <v-text-field
                id="question" v-model="item.question"
                hide-details solo
              >
                <template #append-outer>
                  <img
                    v-if="i > 0"
                    :src="require(`~/assets/sources/icons/x.svg`)" alt="delete question icon"
                    class="pointer" @click="formZero.slots.splice(i)">
                </template>
              </v-text-field>
            </div>
            
            <section :key="i" class="container-answers">
              <v-text-field
                v-for="(item2, i2) in item.dataAnswers" :key="i2"
                v-model="item2.answer"
                :label="`Answer ${i2+1}`"
                class="mt-0"
                :messages="i2+1 === item.dataAnswers.length && item.dataAnswers.length < 4 ? 'message' : ''"
              >
                <template #prepend>
                  <v-text-field
                    v-model="item2.pts"
                    solo type="number"
                    label="pts"
                    class="pts"
                  ></v-text-field>
                </template>
                
                <template v-if="i2+1 === item.dataAnswers.length && item.dataAnswers.length > 2" #append>
                  <img
                    :src="require(`~/assets/sources/icons/x.svg`)" alt="delete question icon"
                    class="pointer"  @click="item.dataAnswers.shift()">
                </template>

                <template v-if="i2+1 === item.dataAnswers.length && item.dataAnswers.length < 4" #message>
                  <h4
                    class="p end pointer" style="--fs: 12px;--c: #5803C4; gap: 5px"
                    @click="item.dataAnswers.push({ answer: undefined, pts: undefined })">
                    ADD ANOTHER ANSWER <img src="~/assets/sources/icons/add.svg" alt="add icon" style="--w: 1.2em">
                  </h4>
                </template>
              </v-text-field>

              <span class="end" style="font-size: 14px; --stroke: .5px">{{i+1}}/{{formZero.slots.length}}</span>

              <h4
                v-if="i+1 === formZero.slots.length && formZero.slots.length < 10"
                class="p end pointer" style="--c: #5803C4; gap: 5px"
                @click="formZero.slots.push(
                  {
                    question: undefined,
                    dataAnswers: [
                      { answer: undefined, pts: undefined },
                      { answer: undefined, pts: undefined },
                      { answer: undefined, pts: undefined },
                    ]
                  }
                )">
                ADD ANOTHER QUESTION <img src="~/assets/sources/icons/add.svg" alt="add icon" style="--w: 1.2em">
              </h4>
            </section>
          </template>

          <div v-for="(item, i) in formZero.nfts" :key="i" class="acenter" style="gap: 10px">
            <label :for="`nft ${i+1}`" class="tup">NFT (url)</label>
            <!-- <v-text-field
              id="nft"
              v-model="formZero.nft" solo
              @change="imgPreview('formZero', $event)"
            > -->
            <v-text-field
              :id="`nft ${i+1}`" v-model="item.url"
              class="input-nfts" solo
            >
              <template v-if="previewImg_zero" #append-outer>
                <img :src="previewImg_zero" alt="nft preview" style="--w: 57.56px; --h: 50px">
              </template>
            </v-text-field>
            
            <img
              v-if="i+1 === formZero.nfts.length && formZero.nfts.length > 2"
              :src="require(`~/assets/sources/icons/x.svg`)" alt="delete nft icon"
              class="pointer" style="margin-bottom: var(--margin-input)" @click="formZero.nfts.shift()"
            >
          </div>
          
          <h4
            v-if="formZero.nfts.length <= 3"
            class="p end pointer" style="--c: #5803C4; gap: 5px"
            @click="formZero.nfts.push({url: undefined})">
            ADD ANOTHER NFT <img src="~/assets/sources/icons/add.svg" alt="add icon" style="--w: 1.2em">
          </h4>

          <v-btn class="btn align" style="--w: 167px" @click="save()">save</v-btn>
        </v-form>
      </template>
    </WindowsWindow>


    <!-- edit form window -->
    <WindowsWindow
      v-show="editFormWindow" id="editForm"
      width="978px" height="474px" padding="30px"
      @customeDrag="customeDrag"
    >
      <template #header>
        <div class="space fill_w">
          <h2 class="p tup">new form - edit</h2>
          
          <aside class="custome-window--header-controls">
            <v-btn @click="editFormWindow = false; createWindow = true">
              <img src="~/assets/sources/icons/back.svg" alt="go back icon">
            </v-btn>
            <v-btn @click="clearWindow()">
              <img src="~/assets/sources/icons/close.svg" alt="close icon">
            </v-btn>
          </aside>
        </div>
      </template>

      <template #content>
        <h4>Change status and properties</h4>
        
        <v-sheet color="var(--secondary)" class="divcol pb-7">
          <aside
            v-for="(item, i) in formEdit" :key="i" class="container-edit fwrap acenter" style="gap: 20px"
          >
            <div class="acenter" style="gap: 10px">
              <img src="~/assets/sources/icons/edit.svg" alt="edit icon">
              <h4 class="p tup">{{item.name}}</h4>
            </div>
            
            <v-text-field
              v-model="item.url" solo
            >
              <template #append>
                <img src="~/assets/sources/icons/clip.svg" alt="clip icon">
              </template>
            </v-text-field>

            <!-- <v-btn class="btn2">Settings</v-btn>
            <v-btn class="btn2" @click="$refs.modal.editFormModal = true">Preview</v-btn> -->
            <v-btn class="btn2" @click="editFormWindow = false; statsFormWindow = true">Stats</v-btn>
          </aside>
        </v-sheet>
      </template>
    </WindowsWindow>


    <!-- stats form window -->
    <WindowsWindow
      v-show="statsFormWindow" id="statsForm"
      width="978px" height="max-content" padding="30px"
      @customeDrag="customeDrag"
    >
      <template #header>
        <div class="space fill_w">
          <h2 class="p tup">new form - stats</h2>
          
          <aside class="custome-window--header-controls">
            <!-- <v-btn @click="statsFormWindow = false; createWindow = true">
              <img src="~/assets/sources/icons/back.svg" alt="go back icon">
            </v-btn> -->
            <v-btn @click="statsFormWindow = false; editFormWindow = true">
              <img src="~/assets/sources/icons/back.svg" alt="go back icon">
            </v-btn>
            <v-btn @click="clearWindow()">
              <img src="~/assets/sources/icons/close.svg" alt="close icon">
            </v-btn>
          </aside>
        </div>
      </template>

      <template #content>
        <ChartsStatsChart></ChartsStatsChart>
      </template>
    </WindowsWindow>


    <!-- stats form complement window -->
    <WindowsWindow
      v-show="statsFormWindow" id="statsFormComplement"
      width="309.2px" height="max-content" padding="0" styles="right: 0; bottom: 20%"
      @customeDrag="customeDrag"
    >
      <template #content>
        <v-list class="menuList" color="transparent">
          <v-list-item>
            <v-list-item-title>1 View</v-list-item-title>
          </v-list-item>
          
          <v-list-item>
            <v-list-item-title>0 Responses</v-list-item-title>
          </v-list-item>
          
          <v-list-item>
            <v-list-item-title>&#60; 0.1% Conversion Rate</v-list-item-title>
          </v-list-item>
          
          <v-list-item>
            <v-list-item-title>00:00 Avg. Time</v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
    </WindowsWindow>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
import customeDrag from '~/mixins/customeDrag'

export default {
  name: "NewFormComponent",
  mixins: [computeds, customeDrag],
  data() {
    return {
      mainWindow: true,
      createWindow: false,
      zeroFormWindow: false,
      editFormWindow: false,
      statsFormWindow: false,
      
      previewImg_zero: undefined,
      
      formZero: {
        title: undefined,
        slots: [
          {
            question: undefined,
            dataAnswers: [
              { answer: undefined, pts: undefined },
              { answer: undefined, pts: undefined },
              { answer: undefined, pts: undefined },
            ]
          },
        ],
        nfts: [
          { url: undefined },
          { url: undefined },
        ],
      },
      formEdit: [
        {
          name: "form 1",
          url: [],
        },
        {
          name: "form 2",
          url: [],
        },
        {
          name: "form 3",
          url: [],
        },
      ],
    }
  },
  watch: {
    mainWindow(current) {
      if (current) {
        const target = document.querySelector("#newForm #mainWindow")
        this.$store.commit("increaseIndex", target)
      }
    },
    createWindow(current) {
      if (current) {
        const target = document.getElementById("createForm")
        this.$store.commit("increaseIndex", target)
      }
    },
    zeroFormWindow(current) {
      if (current) {
        const target = document.getElementById("zeroForm")
        this.$store.commit("increaseIndex", target)
      }
    },
    editFormWindow(current) {
      if (current) {
        const target = document.getElementById("editForm")
        this.$store.commit("increaseIndex", target)
      }
    },
    statsFormWindow(current) {
      if (current) {
        const target1 = document.getElementById("statsForm")
        const target2 = document.getElementById("statsFormComplement")
        this.$store.commit("increaseIndex", target1)
        this.$store.commit("increaseIndex", target2)
      }
    },
  },
  methods: {
    save() {
      console.log(this.formZero)
      this.$refs.modal.openModal('success')
    },
    clearWindow() {
      this.mainWindow = true
      this.createWindow = false
      this.zeroFormWindow = false
      this.editFormWindow = false
      this.statsFormWindow = false
    },
    openNewForm() {
      this.clearWindow()
      this.mainWindow = false
      this.createWindow = true
    },
    // imgPreview(key, file) {
    //   this[key].nft = file;
    //   if (key === 'formZero') { this.previewImg_zero = URL.createObjectURL(file) }
    // }
  },
};
</script>

<style src="~/assets/styles/components/windows/new-form.scss" lang="scss" />
