<template>
  <Transition name="dialog-base" @enter="onOpen">
    <div
      v-show="value"
      class="dialog-base"
      :class="[
        { 'dialog-base--center': isCenter },
        { 'dialog-base--not-center': !isCenter },
      ]"
      :style="style"
    >
      <div v-if="hasHeader" class="dialog-base__header">
        <slot v-if="this.$slots.header !== undefined" name="header" />
        <div v-else class="dialog-base__title">
          {{ title }}
        </div>
      </div>

      <div class="dialog-base__body">
        <slot name="default" />
      </div>

      <div v-if="hasFooter" class="dialog-base__footer">
        <slot name="footer" />
      </div>

      <IconButton
        class="dialog-base__close-button"
        :icon="icons.Cross"
        :color="buttonType.Light"
        :size="40"
        @click="onClose"
      />
    </div>
  </Transition>
</template>

<script lang="ts">
import { Component, Vue, Model, Prop, Emit } from "vue-property-decorator";
import { ButtonType } from "@/const/Button";
import { Icons } from "@/const/Icons";
import { WidthProperty, MarginTopProperty } from "csstype";
import IconButton from "@/components/atoms/IconButton.vue";

@Component({
  components: {
    IconButton,
  },
})
export default class DialogBase extends Vue {
  @Prop({ type: Boolean, required: true })
  value!: boolean;

  @Prop({ type: String, default: "50%" })
  width!: WidthProperty<0>;

  @Prop({ type: String, default: "10vh" })
  top!: MarginTopProperty<0>;

  @Prop({ type: String, default: "" })
  title!: string;

  @Prop({ type: Boolean, default: "" })
  isCenter!: boolean;

  @Emit("open")
  onOpen() {}

  @Emit("close")
  onClose() {}

  buttonType = ButtonType;
  icons = Icons;

  get style() {
    if (this.isCenter) {
      return {
        width: this.width,
      };
    }

    return {
      width: this.width,
      top: this.top,
    };
  }

  get hasHeader(): boolean {
    return this.title.length > 0 || this.$slots.header !== undefined;
  }

  get hasFooter(): boolean {
    return this.$slots.footer !== undefined;
  }
}
</script>

<style scoped lang="scss">
.dialog-base {
  position: fixed;
  left: 50%;
  min-height: 200px;
  border: 1px solid $is_color_gray300;
  border-radius: $border_radius;
  background-color: $is_color_white;
  box-shadow: 3px 3px 3px rgba($is_color_black, 0.1);

  &--not-center {
    transform: translateX(-50%);
  }

  &--center {
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__title {
    padding: 15px 20px;
    font-weight: bold;
  }

  &__body {
    padding: 0 20px;
  }

  &__close-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}

.dialog-base-enter-active,
.dialog-base-leave-active {
  opacity: 1;
  transition: opacity $anime_base_duration ease;
}
.dialog-base-enter,
.dialog-base-leave-to {
  opacity: 0;
}
</style>
