<template>
  <v-sheet
    class="custome-window"
    :class="{show: show}"
    :style="`--w: ${width}; --h: ${height}`"
  >
    <v-toolbar
      class="custome-window--header"
      @mousedown="$emit('customeDrag', $event)"
      @touchstart="$emit('customeDrag', $event)"
    >
      <slot name="header"></slot>
    </v-toolbar>

    <v-sheet class="custome-window--content" :color="bg" :style="`padding: ${padding}`">
      <slot name="content"></slot>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  name: "AboutComponent",
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: "539px",
    },
    height: {
      type: String,
      default: "420px",
    },
    bg: {
      type: String,
      default: "transparent"
    },
    padding: {
      type: String,
      default: "1em"
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/components/windows/windows.scss" lang="scss" />
