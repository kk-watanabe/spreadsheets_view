<template>
  <input
    v-model="value"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="onInput($event.target.value)"
    @focus="onFocus"
    class="input-part"
  />
</template>

<script lang="ts">
import { Component, Prop, Model, Emit, Vue } from "vue-property-decorator";

@Component
export default class InputPart extends Vue{
  @Model("input", { type: [String, Number], required: true })
  value!: string | number;

  @Prop({ type: String, default: "text" })
  type!: string;

  @Prop({ type: String, default: null })
  placeholder!: string | null;

  @Prop({ type: Boolean, default: false })
  disabled!: boolean;

  @Emit("input")
  onInput(value: string | number) { }

  @Emit("focus")
  onFocus() { }
}
</script>

<style scoped lang="scss">
</style>
