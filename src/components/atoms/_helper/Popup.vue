<template>
  <div
    ref="popup"
    class="popup"
    :class="['popup--' + color, { 'popup--shadow': addShadow }]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <slot />

    <div
      v-if="showArrow"
      class="popup__arrow"
      :class="['popup__arrow--' + color, 'popup__arrow--' + placement]"
      :style="arrowPositionStyle"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { PopupPlacement, PopupColor, POPUP_ARROW_SIZE } from "@/const/Popup";

const FIXED_ARROW_POSITION = 10;

@Component
export default class Popup extends Vue {
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

  get popup(): HTMLElement {
    return this.$refs.popup as HTMLElement;
  }

  get arrowPositionStyle() {
    if (
      this.placement.indexOf("top") !== -1 ||
      this.placement.indexOf("bottom") !== -1
    ) {
      if (this.placement.indexOf("start") !== -1) {
        return {
          left: FIXED_ARROW_POSITION + "%",
        };
      }

      if (this.placement.indexOf("end") !== -1) {
        return {
          right: FIXED_ARROW_POSITION * 2 + "%",
        };
      }

      return {
        left: "calc(50% - " + POPUP_ARROW_SIZE / 2 + "px)",
      };
    }

    if (
      this.placement.indexOf("left") !== -1 ||
      this.placement.indexOf("right") !== -1
    ) {
      if (this.placement.indexOf("start") !== -1) {
        return {
          top: FIXED_ARROW_POSITION + "%",
        };
      }

      if (this.placement.indexOf("end") !== -1) {
        return {
          bottom: FIXED_ARROW_POSITION * 2 + "%",
        };
      }

      return {
        top: "calc(50% - " + POPUP_ARROW_SIZE / 2 + ")",
      };
    }
  }
}
</script>

<style scoped lang="scss">
.popup {
  position: relative;
  border: 1px solid;
  border-radius: $border_radius;

  // color
  &--dark {
    border-color: $is_color_gray900;
    background-color: $is_color_gray900;
    color: $is_color_white;
  }

  &--light {
    border-color: $is_color_gray400;
    background-color: $is_color_white;
    color: $is_color_gray600;
  }

  &--shadow {
    box-shadow: 3px 3px 3px rgba($is_color_black, 0.1);
  }

  &__arrow {
    position: absolute;

    &::before,
    &::after {
      position: absolute;
      width: 0;
      height: 0;
      border: solid transparent;
      content: "";
    }

    &::before {
      border-width: 6px;
    }

    &::after {
      border-width: 5px;
    }

    // color
    &--dark {
      // Placement
      &[class*="--top"] {
        &::before,
        &::after {
          border-top-color: $is_color_gray900;
        }
      }
      &[class*="--right"] {
        &::before,
        &::after {
          border-right-color: $is_color_gray900;
        }
      }
      &[class*="--bottom"] {
        &::before,
        &::after {
          border-bottom-color: $is_color_gray900;
        }
      }
      &[class*="--left"] {
        &::before,
        &::after {
          border-left-color: $is_color_gray900;
        }
      }
    }

    &--light {
      // Placement
      &[class*="--top"] {
        &::before {
          border-top-color: $is_color_gray400;
        }

        &::after {
          border-top-color: $is_color_white;
        }
      }
      &[class*="--right"] {
        &::before {
          border-right-color: $is_color_gray400;
        }

        &::after {
          border-right-color: $is_color_white;
        }
      }
      &[class*="--bottom"] {
        &::before {
          border-bottom-color: $is_color_gray400;
        }

        &::after {
          border-bottom-color: $is_color_white;
        }
      }
      &[class*="--left"] {
        &::before {
          border-left-color: $is_color_gray400;
        }

        &::after {
          border-left-color: $is_color_white;
        }
      }
    }

    // Placement
    &[class*="--top"] {
      bottom: 0;

      &::after {
        top: 0;
        left: 1px;
      }
    }
    &[class*="--right"] {
      left: -12px;

      &::after {
        top: 1px;
        left: 2px;
      }
    }
    &[class*="--bottom"] {
      top: -12px;

      &::after {
        top: 2px;
        left: 1px;
      }
    }
    &[class*="--left"] {
      right: 0;

      &::after {
        top: 1px;
        left: 0;
      }
    }
  }
}
</style>
