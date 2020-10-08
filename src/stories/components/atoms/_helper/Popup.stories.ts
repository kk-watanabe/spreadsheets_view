import { storiesOf } from "@storybook/vue";
import { text, select, boolean, number } from "@storybook/addon-knobs";
import { PopupPlacement, PopupColor } from "@/const/Popup";
import Popup from "@/components/atoms/_helper/Popup.vue";

storiesOf("_helper/Popup", module).add(
  "default",
  () => ({
    components: { Popup },
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
    },
    template: `
      <Popup
        :placement="placement"
        :color="color"
        :add-shadow="addShadow"
        :show-arrow="showArrow"
      >
        default slot
      </Popup>`,
  }),
  {
    info: {
      summary: "Simple Popup component",
    },
  }
);
