<template>
  <div class="drawingEditor">
    <section class="drawingEditor--content">
      <aside class="drawingEditor--toolbar" @click="toolbarSelection($event)">
        <div class="grid" style="gap: 5px; --gtc: 1fr 1fr">
          <button name="color" style="--color: #006DF3" />
          <button name="color" style="--color: #9D6A2C" />
          <button name="color" style="--color: #846CAB" />
          <button name="color" style="--color: #D42021" />
          <button name="color" style="--color: #FAF9F8" />
          <button name="color" style="--color: #E09305" />
          <button name="color" style="--color: #898FFF" />
          <button name="color" style="--color: #000000" />
          <button name="color" style="--color: #CC9149" />
          <button name="color" style="--color: #E0E3FA" />
          <button name="color" style="--color: #D9D0B1" />
          <button name="color" style="--color: #F68A32" />
          <button name="color" style="--color: #FFC28C" />
          <button name="color" style="--color: #EEC983" />
          <button name="color" style="--color: #FEAF39" />
          <button name="color" style="--color: #F5FD5C" />
        </div>
        
        <v-menu right offset-x nudge-right="10px" content-class="container-slider-editor" z-index="99999999999999999999">
          <template #activator="{on, attrs}">
            <button name="lineWidth" v-bind="attrs" v-on="on" />
          </template>

          <v-sheet class="card" style="--c-size: 2px">
            <v-slider
              v-model="lineWidth"
              color="var(--active)"
              hide-details hide-spin-buttons
            ></v-slider>
          </v-sheet>
        </v-menu>
        
        <button name="colorStorage">
          <div class="color-storaged-1" :style="`--color: ${currentColor}`" :class="{invert: currentIsBlack}" />
          <img src="~/assets/sources/icons/arrow-down-right.svg" alt="arrow icon">
          <div class="color-storaged-2" :style="`--color: ${storageColor}`" :class="{invert: storageIsBlack}" />
        </button>
        
        <button name="clear">Clear</button>
      </aside>

      <canvas
        id="drawing-board"
        class="fill_w"
        :style="`--label: url(${canvasLabel})`"
        @mousedown="startDraw()"
        @mousemove="drawing($event)"
      />
    </section>

    <aside class="drawingEditor--actions center mt-5">
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
      isPainting: false,
      lineWidth: 2,
      currentColor: "rgb(0, 0, 0)",
      storageColor: "rgb(250, 249, 248)",
      
      canvasLabel: require('~/assets/sources/images/label-editor.png'),
    }
  },
  computed: {
    canvas() {
      const canvas = document.querySelector('.drawingEditor #drawing-board');
      return canvas
    },
    ctx() {
      return this.canvas.getContext('2d');
    },
    currentIsBlack() {
      if (this.currentColor === "rgb(0, 0, 0)") return true
      return false
    },
    storageIsBlack() {
      if (this.storageColor === "rgb(0, 0, 0)") return true
      return false
    },
  },
  watch: {
    currentColor(current) {
      this.ctx.strokeStyle = current
    },
  },
  mounted() {
    // add stopDraw event
    document.querySelector(".drawingEditor").parentNode.addEventListener("mouseup", this.stopDraw)

    // add responsive canvas height
    const heightRatio = -1.5
    this.canvas.height = this.canvas.width * heightRatio
  },
  methods: {
    toolbarSelection(e) {
      if (e.target.name === "color") this.currentColor = window.getComputedStyle(e.target).backgroundColor
      
      if (e.target.name === "colorStorage") [this.currentColor, this.storageColor] = [this.storageColor, this.currentColor]
      
      if (e.target.name === "clear") {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.canvasLabel = require('~/assets/sources/images/label-editor.png')
      }
    },
    startDraw() {
      this.isPainting = true
      this.canvasLabel = ''
    },
    stopDraw() {
      this.isPainting = false
      this.ctx.stroke()
      this.ctx.beginPath()
    },
    drawing(e) {
      if(!this.isPainting) return;
      
      const rect = this.canvas.getBoundingClientRect(),
        scaleX = this.canvas.width / rect.width,
        scaleY = this.canvas.height / rect.height;
      
      this.ctx.lineWidth = this.lineWidth
      this.ctx.lineCap = 'round'
      
      this.ctx.lineTo((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY)
      this.ctx.stroke()
    },
  },
};
</script>

<style src="~/assets/styles/components/drawingEditor.scss" lang="scss" />
