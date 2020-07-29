<template>
  <Popup
    class="tooltip-popup"
    :placement="placement"
    :color="color"
    :add-shadow="addShadow"
    :show-arrow="showArrow"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="tooltip-popup__text">
      <template v-if="hasContent">
        {{ content }}
      </template>
      <slot v-else name="content" />
    </div>
  </Popup>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { PopupPlacement, PopupColor } from "@/const/Popup";
import Popup from "@/components/atoms/_helper/Popup.vue";

@Component({
  components: { Popup },
})
export default class TooltipPopup extends Vue {
  @Prop({ type: String, default: "" })
  content!: string;

  @Prop({ type: String, default: PopupPlacement.Top })
  placement!: PopupPlacement;

  @Prop({ type: String, default: PopupColor.Dark })
  color!: PopupColor;

  @Prop({ type: Boolean, default: false })
  addShadow!: boolean;

  @Prop({ type: Boolean, default: true })
  showArrow!: boolean;

  @Emit("mouse-enter")
  onMouseEnter() {}

  @Emit("mouse-leave")
  onMouseLeave() {}

  get hasContent(): boolean {
    return this.content.length > 0;
  }
}
</script>

<style scoped lang="scss">
.tooltip-popup {
  &__text {
    padding: 5px 10px;
    font-weight: normal;
    font-size: 12px;

    overflow-wrap: break-word;
  }
}
</style>
