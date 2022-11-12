<template>
  <div class="drawingEditor">
    <section class="drawingEditor--content">
      <h1>content</h1>
    </section>

    <aside class="drawingEditor--actions center" style="gap: 30px">
      <v-btn class="btn2">generate</v-btn>
      <v-btn class="btn2">mint</v-btn>
    </aside>
  </div>
</template>

<script>
export default {
  name: "DrawingEditorComponent",
  data() {
    return {
    }
  },
  methods: {
  },
};
</script>

<style src="~/assets/styles/components/drawingEditor.scss" lang="scss" />
