<template>
  <button
    type="button"
    class="button"
    :class="[isColorClass, { 'button--disabled': disabled }]"
    :style="style"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { HeightProperty, PaddingProperty } from "csstype";
import { ButtonType } from "@/const/Button";

@Component
export default class Button extends Vue {
  @Prop({ type: String, default: ButtonType.Dark })
  color!: string;

  @Prop({ type: Boolean, default: false })
  disabled!: boolean;

  @Prop({ type: String, default: "40px" })
  height!: HeightProperty<0>;

  @Prop({ type: String, default: "0 10px" })
  padding!: PaddingProperty<0>;

  @Emit("click")
  onClick() {}

  get style() {
    return {
      height: this.height,
      padding: this.padding,
    };
  }

  get isColorClass(): string {
    return "button--" + this.color;
  }
}
</script>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid;
  border-radius: $border_radius;
  transition: border-color $anime_base_duration ease,
    background-color $anime_base_duration ease;

  &--dark:not(.button--disabled) {
    border-color: $is_color_gray900;
    background-color: $is_color_gray900;
    color: $is_color_white;

    &:hover {
      border-color: $is_color_gray800;
      background-color: $is_color_gray800;
    }
  }

  &--light:not(.button--disabled) {
    border: 1px solid $is_color_gray400;
    background-color: $is_color_white;
    &:hover {
      background-color: $is_color_gray100;
    }
  }

  &--green:not(.button--disabled) {
    border-color: $is_base_color200;
    background-color: $is_base_color200;
    color: $is_color_white;
    &:hover {
      border-color: $is_base_color300;
      background-color: $is_base_color300;
    }
  }

  &--disabled {
    border-color: $is_color_gray400;
    background-color: $is_color_gray400;
    color: $is_color_white;
    cursor: default;
    pointer-events: none;
  }
}
</style>
