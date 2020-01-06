<template>
  <input
    :value="value"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="onInput($event.target.value)"
    @focus="onFocus"
    class="input-part"
    :class="{ 'input-part--error': error }"
  />
</template>

<script lang="ts">
import { Component, Prop, Model, Emit, Vue } from "vue-property-decorator";

@Component
export default class InputPart extends Vue {
  @Model("input", { type: [String, Number], required: true })
  value!: string | number;

  @Prop({ type: String, default: "text" })
  type!: string;

  @Prop({ type: String, default: null })
  placeholder!: string | null;

  @Prop({ type: Boolean, default: false })
  disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  error!: boolean;

  @Emit("input")
  onInput(value: string | number) {}

  @Emit("focus")
  onFocus() {}
}
</script>

<style scoped lang="scss">
.input-part {
  padding: 10px;
  width: 100%;
  height: $input_height;
  outline: none;
  border: 1px solid $is_color_gray500;
  border-radius: $border_radius;
  vertical-align: middle;
  line-height: $input_height;

  @include font-size(16);
  &:focus {
    border-color: $is_base_color200;
    box-shadow: 0 0 2px rgba($is_base_color200, 1);
  }
  &::placeholder {
    color: $is_color_gray700;
  }
  &:disabled {
    border-color: $is_color_gray400;
    background-color: $is_color_gray200;
    color: $is_color_gray400;

    &::placeholder {
      color: $is_color_gray400;
    }
  }
  &--error {
    border-color: $is_sub1_color200;
    color: $is_sub1_color200;
  }
}
</style>
