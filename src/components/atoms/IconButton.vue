<template>
  <div
    class="icon-button"
    :class="[addIconButtonColor, { 'icon-button--disabled': disabled }]"
    :style="style"
    @click="onClick"
  >
    <Icon class="icon-button__icon" :icon="icon" :style="iconStyle" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { MarginProperty } from "csstype";
import { ButtonType } from "@/const/Button";
import { Icons } from "@/const/Icons";
import Icon from "@/components/atoms/Icon.vue";

@Component({
  components: { Icon }
})
export default class IconButton extends Vue {
  @Prop({ type: String, required: true })
  icon!: Icons;

  @Prop({ type: String, default: ButtonType.Dark })
  color!: string;

  @Prop({ type: Number, default: 60 })
  size!: number;

  @Prop({ type: Number, default: 16 })
  iconSize!: number;

  @Prop({ type: String, default: "0px" })
  iconOffset!: MarginProperty<0>;

  @Prop({ type: Boolean, default: false })
  disabled!: boolean;

  @Emit("click")
  onClick(event: MouseEvent) {}

  get style() {
    return {
      width: this.size + "px",
      height: this.size + "px"
    };
  }

  get iconStyle() {
    return {
      "font-size": this.iconSize + "px",
      margin: this.iconOffset
    };
  }

  get addIconButtonColor(): string {
    return "icon-button--" + this.color;
  }
}
</script>

<style scoped lang="scss">
.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 50%;
  cursor: pointer;
  transition: border-color $anime_base_duration ease,
    background-color $anime_base_duration ease;

  &--dark:not(.icon-button--disabled) {
    border-color: $is_color_gray900;
    background-color: $is_color_gray900;
    color: $is_color_white;

    &:hover {
      border-color: $is_color_gray800;
      background-color: $is_color_gray800;
    }
  }

  &--light:not(.icon-button--disabled) {
    border: 1px solid $is_color_gray400;
    background-color: $is_color_white;
    color: $is_color_gray600;
    &:hover {
      background-color: $is_color_gray100;
    }
  }

  &--green:not(.icon-button--disabled) {
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
