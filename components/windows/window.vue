<template>
  <v-sheet
    ref="custome-window"
    class="custome-window"
    :class="{show: show}"
    :style="`--w: ${width}; --h: ${height}; ${$slots.header ? '--h-toolbar: 46px' : undefined}; ${styles}`"
    @mousedown="$store.commit('increaseIndex', $event)" @touchstart="$store.commit('increaseIndex', $event)"
  >
    <v-toolbar
      v-if="$slots.header"
      class="custome-window--header"
      @mousedown="$emit('customeDrag', $event)"
      @touchstart="$emit('customeDrag', $event)"
    >
      <slot name="header"></slot>
    </v-toolbar>

    <v-sheet
      class="custome-window--content" :color="bg"
      :style="`padding: ${padding}; ${$slots.header ? 'calc(100% - var(--h-toolbar))' : 'height: 100%'}`"
    >
      <slot name="content"></slot>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  name: "WindowComponent",
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    styles: {
      type: String,
      default: undefined,
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
    },
  },
  mounted() {
    const target = this.$refs['custome-window'].$el;
    if (!this.$slots.header) {
      target.addEventListener("mousedown", (event) => this.$emit('customeDrag', event))
      target.addEventListener("touchstart", (event) => this.$emit('customeDrag', event))
    }
  },
};
</script>

<style src="~/assets/styles/components/windows/window.scss" lang="scss" />
