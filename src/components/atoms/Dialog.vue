<template>
  <ElDialog
    class="dialog"
    :class="{ 'dialog--no-header': noHeader }"
    :visible="visible"
    :title="title"
    :width="width"
    :top="top"
    :modal="true"
    :append-to-body="appendToBody"
    :close-on-click-modal="closeModel"
    :show-close="false"
    :center="center"
    :destroy-on-close="destroyOnClose"
    @open="onOpen"
    @close="onClose"
    @mousedown.native="onMouseDown"
  >
    <template slot="title">
      <slot name="title"></slot>
    </template>

    <slot></slot>

    <template slot="footer">
      <slot name="footer"></slot>
    </template>

    <IconButton
      v-if="showCloseButton"
      class="dialog__close-button"
      :icon="icons.Cross"
      :color="buttonType.Light"
      :size="45"
      @click="onClose"
    />
  </ElDialog>
</template>

<script lang="ts">
import { Component, Vue, Model, Prop, Emit } from "vue-property-decorator";
import { Dialog as ElDialog } from "element-ui";
import { ButtonType } from "@/const/Button";
import { Icons } from "@/const/Icons";
import { WidthProperty, MarginTopProperty } from "csstype";
import IconButton from "@/components/atoms/IconButton.vue";

@Component({
  components: {
    ElDialog,
    IconButton
  }
})
export default class Dialog extends Vue {
  buttonType = ButtonType;
  icons = Icons;
  closeModel: boolean = true;

  @Model("toggle", { type: Boolean, required: true })
  visible!: boolean;

  @Prop({ type: String, default: "" })
  title!: string;

  @Prop({ type: String, default: "50%" })
  width!: WidthProperty<0>;

  @Prop({ type: String, default: "10vh" })
  top!: MarginTopProperty<0>;

  //モーダルを入れ子にする場合はtrueにする
  @Prop({ type: Boolean, default: true })
  appendToBody!: boolean;

  @Prop({ type: Boolean, default: true })
  closeOnClickModal!: boolean;

  @Prop({ type: Boolean, default: true })
  showCloseButton!: boolean;

  @Prop({ type: Boolean, default: true })
  center!: boolean;

  @Prop({ type: Boolean, default: true })
  destroyOnClose!: boolean;

  @Emit("open")
  onOpen() {}

  @Emit("close")
  onClose() {}

  //titleが無いときに余計なpaddingを消す
  get noHeader(): boolean {
    if (this.title.length === 0) {
      return true;
    }

    return false;
  }

  // To avoid close model when mouse press and release outside
  onMouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.className.match("el-dialog__wrapper")) {
      this.closeModel = true;
    } else {
      this.closeModel = false;
    }

    if (!this.closeOnClickModal) {
      this.closeModel = false;
    }
  }
}
</script>

<style scoped lang="scss">
.dialog__close-button {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
