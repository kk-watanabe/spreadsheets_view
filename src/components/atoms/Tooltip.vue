<template>
  <ElTooltip
    class="tooltip"
    :effect="color"
    :content="content"
    :placement="placement"
    :value="show"
    :disabled="disabled"
    :offset="offset"
    :visible-arrow="visibleArrow"
    :manual="show"
    :popper-class="addShadowStyle"
    :enterable="enterable"
  >
    <template slot="content">
      <slot name="content"></slot>
    </template>
    <span><slot></slot></span>
  </ElTooltip>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { TooltipPlacement, TooltipColor } from "@/const/Tooltip";
import { Tooltip as ElTooltip } from "element-ui";

@Component({
  components: { ElTooltip },
})
export default class Tooltip extends Vue {
  @Prop({ type: String, default: TooltipPlacement.Top })
  placement!: TooltipPlacement;

  @Prop({ type: String, default: "" })
  content!: string;

  @Prop({ type: String, default: TooltipColor.Dark })
  color!: TooltipColor;

  @Prop({ type: Boolean, default: false })
  addShadow!: boolean;

  @Prop({ type: Boolean, default: false })
  show!: boolean;

  @Prop({ type: Boolean, default: false })
  disabled!: boolean;

  @Prop({ type: Number, default: 0 })
  offset!: number;

  @Prop({ type: Boolean, default: true })
  visibleArrow!: boolean;

  @Prop({ type: Boolean, default: false })
  enterable!: boolean;

  get addShadowStyle(): string {
    if (this.addShadow) {
      return "tooltip--shadow";
    }

    return "";
  }
}
</script>
