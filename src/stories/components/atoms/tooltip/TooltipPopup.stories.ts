import { storiesOf } from "@storybook/vue";
import { text, select, boolean, number } from "@storybook/addon-knobs";
import { TooltipPlacement, TooltipColor } from "@/const/Tooltip";
import TooltipPopup from "@/components/atoms/tooltip/TooltipPopup.vue";

storiesOf("Atom/tooltip/TooltipPopup", module).add(
  "default",
  () => ({
    components: { TooltipPopup },
    props: {
      content: {
        default: text("Content", "Tooltip text!"),
      },
      placement: {
        default: select("Placement", TooltipPlacement, TooltipPlacement["Top"]),
      },
      color: {
        default: select("Color", TooltipColor, TooltipColor["Dark"]),
      },
      addShadow: {
        default: boolean("Add Shadow", false),
      },
      showArrow: {
        default: boolean("Show Arrow", true),
      },
      arrowPosition: {
        default: number("arrowPosition", 0),
      },
    },
    template: `
      <TooltipPopup
        :content="content"
        :placement="placement"
        :color="color"
        :add-shadow="addShadow"
        :show-arrow="showArrow"
      />`,
  }),
  {
    info: {
      summary: "Simple TooltipPopup component",
    },
  }
);
