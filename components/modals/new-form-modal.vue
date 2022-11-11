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
          <img :src="require(`~/assets/sources/images/${globalKey}.png`)" :alt="`${globalKey} image`">
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
      newFormModal: false,
      globalKey: undefined,
      editFormModal: false,
    };
  },
  methods: {
    openModal(key) {
      this.globalKey = key
      this.newFormModal = true
    }
  }
};
</script>
