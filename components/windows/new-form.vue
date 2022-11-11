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
            <v-btn @click="$parent.clearNewForm()">
              <img src="~/assets/sources/icons/back.svg" alt="go back icon">
            </v-btn>
            <v-btn @click="$parent.clearNewForm()">
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
          
          <div class="divcol center" style="gap: 20px">
            <img src="~/assets/sources/images/statistics-form-img.png" alt="statistics form image" style="--w: 169px">
            <v-btn class="btn" style="--w: 164.19px" @click="createWindow = false; statsFormWindow = true">statistics</v-btn>
          </div>
        </v-sheet>
      </template>
    </WindowsWindow>


    <!-- zero form window -->
    <WindowsWindow
      v-show="zeroFormWindow" id="zeroForm"
      width="978px" height="628px" padding="30px" styles="top: 0"
      @customeDrag="customeDrag"
    >
      <template #header>
        <div class="space fill_w">
          <h2 class="p tup">new form - from zero</h2>
          
          <aside class="custome-window--header-controls">
            <v-btn @click="zeroFormWindow = false; createWindow = true">
              <img src="~/assets/sources/icons/back.svg" alt="go back icon">
            </v-btn>
            <v-btn @click="$parent.clearNewForm()">
              <img src="~/assets/sources/icons/close.svg" alt="close icon">
            </v-btn>
          </aside>
        </div>
      </template>

      <template #content>
        <h4>Fill in the following information</h4>
        
        <v-form class="divcol pb-7">
          <div class="acenter" style="gap: 10px">
            <label for="title">Title</label>
            <v-text-field
              id="title"
              v-model="formZero.title" solo
            ></v-text-field>
          </div>
          
          <div class="acenter" style="gap: 10px">
            <label for="question" class="tup">quesiton</label>
            <v-text-field
              id="question"
              v-model="formZero.question" solo
            ></v-text-field>
          </div>
          
          <section class="container-checkboxes">
            <v-text-field
              v-for="(item, i) in formZero.dataAnswers" :key="i"
              v-model="item.answer"
              :label="`Answer ${i+1}`"
              class="mt-0"
            >
              <template #prepend>
                <img
                  :src="require(`~/assets/sources/icons/checkbox${item.isCorrect ? '-active': ''}.svg`)"
                  :alt="item.isCorrect ? 'correct answer' : 'incorrect answer'" class="pointer" @click="item.isCorrect = !item.isCorrect"
                >
              </template>
              
              <template #append>
                <img
                  :src="require(`~/assets/sources/icons/x.svg`)" alt="bad quesiton icon"
                  class="pointer"  @click="formZero.dataAnswers.splice(i, 1)">
              </template>
            </v-text-field>

            <h4
              class="p end pointer" style="--c: #5803C4; gap: 5px"
              @click="formZero.dataAnswers.push({ answer: undefined, isCorrect: false })">
              ADD ANOTHER QUESTION <img src="~/assets/sources/icons/add.svg" alt="add icon">
            </h4>
          </section>

          <div class="acenter mt-4" style="gap: 10px">
            <label for="nft" class="tup">NFT (url)</label>
            <v-file-input
              id="nft"
              v-model="formZero.nft" solo
              prepend-icon=""
              @change="imgPreview('formZero', $event)"
            >
              <template v-if="previewImg_zero" #append-outer>
                <img :src="previewImg_zero" alt="nft preview" style="--w: 57.56px; --h: 50px">
              </template>
            </v-file-input>
          </div>

          <v-btn class="btn align" style="--w: 167px" @click="$refs.modal.openModal('success')">save</v-btn>
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
            <v-btn @click="$parent.clearNewForm()">
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
            
            <v-file-input
              v-model="item.nft"
              prepend-icon="" solo
            >
              <template #append>
                <img src="~/assets/sources/icons/clip.svg" alt="clip icon">
              </template>
            </v-file-input>

            <v-btn class="btn2">Settings</v-btn>
            <v-btn class="btn2" @click="$refs.modal.editFormModal = true">Preview</v-btn>
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
            <v-btn @click="statsFormWindow = false; createWindow = true">
              <img src="~/assets/sources/icons/back.svg" alt="go back icon">
            </v-btn>
            <v-btn @click="$parent.clearNewForm()">
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
        nft: [],
        title: undefined,
        quesiton: undefined,
        correctAnswers: [],
        dataAnswers: [
          { answer: undefined, isCorrect: false },
          { answer: undefined, isCorrect: false },
          { answer: undefined, isCorrect: false },
        ]
      },
      formEdit: [
        {
          name: "form 1",
          nft: [],
        },
        {
          name: "form 2",
          nft: [],
        },
        {
          name: "form 3",
          nft: [],
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
    imgPreview(key, file) {
      this[key].nft = file;
      if (key === 'formZero') { this.previewImg_zero = URL.createObjectURL(file) }
    }
  },
};
</script>

<style src="~/assets/styles/components/windows/new-form.scss" lang="scss" />
