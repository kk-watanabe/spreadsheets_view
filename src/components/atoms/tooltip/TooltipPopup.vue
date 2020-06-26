<template>
  <div
    ref="tooltipPopup"
    class="tooltip-popup"
    :class="['tooltip-popup--' + color, { 'tooltip-popup--shadow': addShadow }]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <template v-if="hasContent">
      {{ content }}
    </template>
    <slot v-else v-slot:content />

    <div
      v-if="showArrow"
      class="tooltip-popup__arrow"
      :class="[
        'tooltip-popup__arrow--' + color,
        'tooltip-popup__arrow--' + placement,
      ]"
      :style="arrowPositionStyle"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { TooltipPlacement, TooltipColor } from "@/const/Tooltip";

const FIXED_ARROW_POSITION = 10;

@Component
export default class TooltipPopup extends Vue {
  @Prop({ type: String, default: "" })
  content!: string;

  @Prop({ type: String, default: TooltipPlacement.Top })
  placement!: TooltipPlacement;

  @Prop({ type: String, default: TooltipColor.Dark })
  color!: TooltipColor;

  @Prop({ type: Boolean, default: false })
  addShadow!: boolean;

  @Prop({ type: Boolean, default: true })
  showArrow!: boolean;

  @Prop({ type: Number, default: 0 })
  arrowPosition!: number;

  @Prop({ type: Boolean, default: false })
  fixedArrowPosition!: boolean;

  @Emit("mouse-enter")
  onMouseEnter() {}

  @Emit("mouse-leave")
  onMouseLeave() {}

  get tooltipPopup(): HTMLElement {
    return this.$refs.tooltipPopup as HTMLElement;
  }

  get hasContent(): boolean {
    return this.content.length > 0;
  }

  get arrowPositionStyle() {
    if (this.fixedArrowPosition) {
      if (
        this.placement.indexOf("top") !== -1 ||
        this.placement.indexOf("bottom") !== -1
      ) {
        if (this.placement.indexOf("start") !== -1) {
          return {
            left: FIXED_ARROW_POSITION + "px",
          };
        }

        if (this.placement.indexOf("end") !== -1) {
          return {
            right: FIXED_ARROW_POSITION * 2 + "px",
          };
        }

        return {
          left: "calc(50% - 7px)",
        };
      }

      if (
        this.placement.indexOf("left") !== -1 ||
        this.placement.indexOf("right") !== -1
      ) {
        if (this.placement.indexOf("start") !== -1) {
          return {
            top: FIXED_ARROW_POSITION + "px",
          };
        }

        if (this.placement.indexOf("end") !== -1) {
          return {
            bottom: FIXED_ARROW_POSITION * 2 + "px",
          };
        }

        return {
          top: "calc(50% - 7px)",
        };
      }
    }

    const position = this.arrowPosition + "px";
    if (
      this.placement.indexOf("top") !== -1 ||
      this.placement.indexOf("bottom") !== -1
    ) {
      return {
        left: position,
      };
    }

    if (
      this.placement.indexOf("left") !== -1 ||
      this.placement.indexOf("right") !== -1
    ) {
      return {
        top: position,
      };
    }
  }
}
</script>

<style scoped lang="scss">
.tooltip-popup {
  position: relative;
  padding: 5px 10px;
  border: 1px solid;
  border-radius: $border_radius;
  font-weight: normal;
  font-size: 12px;

  overflow-wrap: break-word;

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
      border-width: 7px;
    }

    &::after {
      border-width: 6px;
    }

    // color
    &--dark {
      // Placement
      &[class*="--top"] {
        &::before,
        &::after {
          border-bottom-color: $is_color_gray900;
        }
      }
      &[class*="--right"] {
        &::before,
        &::after {
          border-left-color: $is_color_gray900;
        }
      }
      &[class*="--bottom"] {
        &::before,
        &::after {
          border-top-color: $is_color_gray900;
        }
      }
      &[class*="--left"] {
        &::before,
        &::after {
          border-right-color: $is_color_gray900;
        }
      }
    }

    &--light {
      // Placement
      &[class*="--top"] {
        &::before {
          border-bottom-color: $is_color_gray400;
        }

        &::after {
          border-bottom-color: $is_color_white;
        }
      }
      &[class*="--right"] {
        &::before {
          border-left-color: $is_color_gray400;
        }

        &::after {
          border-left-color: $is_color_white;
        }
      }
      &[class*="--bottom"] {
        &::before {
          border-top-color: $is_color_gray400;
        }

        &::after {
          border-top-color: $is_color_white;
        }
      }
      &[class*="--left"] {
        &::before {
          border-right-color: $is_color_gray400;
        }

        &::after {
          border-right-color: $is_color_white;
        }
      }
    }

    // Placement
    &[class*="--top"] {
      top: -14px;

      &::after {
        margin-top: 2px;
        margin-left: 1px;
      }
    }
    &[class*="--right"] {
      right: 0;

      &::after {
        margin-top: 1px;
        margin-right: 2px;
      }
    }
    &[class*="--bottom"] {
      bottom: 0;

      &::after {
        margin-bottom: 2px;
        margin-left: 1px;
      }
    }
    &[class*="--left"] {
      left: -14px;

      &::after {
        margin-top: 1px;
        margin-left: 2px;
      }
    }
  }
}
</style>
