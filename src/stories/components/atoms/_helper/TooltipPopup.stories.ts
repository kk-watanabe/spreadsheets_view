import { storiesOf } from "@storybook/vue";
import { text, select, boolean, number } from "@storybook/addon-knobs";
import { PopupPlacement, PopupColor } from "@/const/Popup";
import TooltipPopup from "@/components/atoms/_helper/TooltipPopup.vue";

storiesOf("_helper/TooltipPopup", module)
  .add(
    "default",
    () => ({
      components: { TooltipPopup },
      props: {
        content: {
          default: text("Content", "Tooltip text!"),
        },
        placement: {
          default: select("Placement", PopupPlacement, PopupPlacement["Top"]),
        },
        color: {
          default: select("Color", PopupColor, PopupColor["Dark"]),
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
        fixedArrowPosition: {
          default: boolean("fixedArrowPosition", false),
        },
      },
      template: `
      <TooltipPopup
        :content="content"
        :placement="placement"
        :color="color"
        :add-shadow="addShadow"
        :show-arrow="showArrow"
        :arrow-position="arrowPosition"
        :fixed-arrow-position="fixedArrowPosition"
      />`,
    }),
    {
      info: {
        summary: "Simple TooltipPopup component",
      },
    }
  )
  .add(
    "content slot",
    () => ({
      components: { TooltipPopup },
      props: {
        placement: {
          default: select("Placement", PopupPlacement, PopupPlacement["Top"]),
        },
        color: {
          default: select("Color", PopupColor, PopupColor["Dark"]),
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
        fixedArrowPosition: {
          default: boolean("fixedArrowPosition", false),
        },
      },
      template: `
      <TooltipPopup
        :placement="placement"
        :color="color"
        :add-shadow="addShadow"
        :show-arrow="showArrow"
        :arrow-position="arrowPosition"
        :fixed-arrow-position="fixedArrowPosition"
      >
        <template v-slot:content>
          <div>
            content slot<br>
            content slot
          </div>
        </template>
      </TooltipPopup>`,
    }),
    {
      info: {
        summary: "Simple TooltipPopup component",
      },
    }
  );
