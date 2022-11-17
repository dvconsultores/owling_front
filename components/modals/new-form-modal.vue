<template>
  <div>
    <!-- new form modal -->
    <v-dialog v-model="newFormModal" max-width="max-content">
      <WindowsWindow :show="false" bg="var(--secondary)" padding="40px" height="max-content" styles="position: relative !important">
        <template #header>
          <div class="space fill_w">
            <h2 class="p tup">new form</h2>
            
            <v-btn @click="newFormModal = false">
              <img src="~/assets/sources/icons/close.svg" alt="close icon">
            </v-btn>
          </div>
        </template>
        
        <template #content>
          <img class="mb-6" :src="require(`~/assets/sources/images/${globalKey}.png`)" :alt="`${globalKey} image`">
          <h6>Transaction Hash: </h6> <a :href="hash" target="_blank"><h7 style="color:blue !important">{{hash.limitString(40)}}</h7></a> 
        </template>
      </WindowsWindow>
    </v-dialog>

    <!-- edit form modal -->
    <v-dialog v-model="editFormModal" max-width="max-content">
      <WindowsWindow :show="false" bg="var(--secondary)" padding="40px" height="max-content" styles="position: relative !important">
        <template #header>
          <div class="space fill_w">
            <h2 class="p tup">new form - edit - preview</h2>
            
            <v-btn @click="editFormModal = false">
              <img src="~/assets/sources/icons/close.svg" alt="close icon">
            </v-btn>
          </div>
        </template>
        
        <template #content>
          <img :src="require(`~/assets/sources/images/edit-form-preview-img.jpg`)" alt="preview image">
        </template>
      </WindowsWindow>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "AlertsComponent",
  data() {
    return {
      hash: null,
      newFormModal: false,
      globalKey: undefined,
      editFormModal: false,
    };
  },
  mounted() {
    const queryString = window.location.search; // tomo mi url
    const urlParams = new URLSearchParams(queryString); // tomo los paramtros de url
    urlParams.get("transactionHashes") // variable donde esta el hash
    this.hash = "https://explorer.mainnet.near.org/transactions/" + urlParams.get("transactionHashes") // esto es para tener el explorer
  },
  methods: {
    openModal(key) {
      this.globalKey = key
      this.newFormModal = true
    }
  }
};
</script>
