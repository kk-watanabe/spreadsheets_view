<template>
  <div class="tooltip">
    <span
      ref="tooltipText"
      class="tooltip__text"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <slot />
    </span>

    <Transition name="tooltipPopup" @enter="enter">
      <TooltipPopup
        v-show="showTooltip"
        ref="tooltipPopup"
        class="tooltip__popup"
        :content="content"
        :placement="placement"
        :color="color"
        :add-shadow="addShadow"
        :show-arrow="showArrow"
        :style="style"
      >
        <template v-slot:content>
          <slot name="content" />
        </template>
      </TooltipPopup>
    </Transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import {
  PopupPlacement,
  PopupColor,
  POPUP_OOFFSET,
  POPUP_ARROW_SIZE,
  popupPosition,
} from "@/const/Popup";
import TooltipPopup from "@/components/atoms/_helper/TooltipPopup.vue";

@Component({
  components: { TooltipPopup },
})
export default class Tooltip extends Vue {
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
  onMouseEnter() {
    this.showTooltip = true;
  }

  @Emit("mouse-leave")
  onMouseLeave() {
    this.showTooltip = false;
  }

  showTooltip: boolean = false;

  popupY: number = 0;
  popupX: number = 0;

  get tooltipText(): HTMLElement {
    return this.$refs.tooltipText as HTMLElement;
  }

  get style() {
    return {
      top: this.popupY + "px",
      left: this.popupX + "px",
    };
  }

  enter(el: HTMLElement, done: any) {
    this.onUpdate(el);
    done();
  }

  onUpdate(popupElement: HTMLElement) {
    const { x, y } = popupPosition(
      this.placement,
      this.tooltipText,
      popupElement
    );

    this.popupY = y;
    this.popupX = x;
  }
}
</script>

<style scoped lang="scss">
.tooltip {
  &__text {
    display: inline-block;
  }

  &__popup {
    position: fixed;
  }
}

.tooltipPopup-enter-active,
.tooltipPopup-leave-active {
  opacity: 1;
  transition: opacity $anime_base_duration ease;
}
.tooltipPopup-enter,
.tooltipPopup-leave-to {
  opacity: 0;
}
</style>
