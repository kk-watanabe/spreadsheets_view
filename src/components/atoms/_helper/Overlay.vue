<template>
  <Transition name="overlay">
    <div v-show="value" class="overlay" :style="style" @click="onClick" />
  </Transition>
</template>

<script lang="ts">
import { Component, Vue, Model, Prop, Emit } from "vue-property-decorator";
import { ZIndexProperty } from "csstype";

@Component
export default class Overlay extends Vue {
  @Prop({ type: Boolean, required: true })
  value!: boolean;

  @Prop({ type: Number, default: 2000 })
  zIndex!: ZIndexProperty;

  @Emit("click")
  onClick() {}

  get style() {
    return {
      zIndex: this.zIndex,
    };
  }
}
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $is_overlay;
}

.overlay-enter-active,
.overlay-leave-active {
  opacity: 1;
  transition: opacity $anime_base_duration ease;
}
.overlay-enter,
.overlay-leave-to {
  opacity: 0;
}
</style>
