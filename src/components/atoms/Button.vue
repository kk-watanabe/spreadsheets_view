<template>
  <button
    type="button"
    class="button"
    :class="[isColorClass, { 'button-disabled': disabled }]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ type: String, default: "dark" })
  color!: String;

  @Prop({ type: Boolean, default: false })
  disabled!: boolean;

  get isColorClass(): string {
    return "button-" + this.color;
  }

  onClick(event: MouseEvent): void {
    this.$emit("click", event);
  }
}
</script>

<style scoped lang="scss"></style>
