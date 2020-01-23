import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { text, number, boolean, select } from "@storybook/addon-knobs";
import { ButtonType } from "@/const/Button";
import { Icons } from "@/const/Icons";
import IconButton from "@/components/atoms/IconButton.vue";

storiesOf("Atom/IconButton", module).add(
  "default",
  () => ({
    components: { IconButton },
    props: {
      icon: {
        default: select("Icon", Icons, Icons.Home)
      },
      color: {
        default: select("Color", ButtonType, ButtonType.Dark)
      },
      iconSize: {
        default: number("Icon size", 26)
      },
      iconOffset: {
        default: text("Icon offset", "0px")
      },
      disabled: {
        default: boolean("Disabled", false)
      }
    },
    template: `<IconButton
     :icon="icon"
     :color="color"
     :icon-size="iconSize"
     :icon-offset="iconOffset"
     :disabled="disabled"
     @click="action" />`,
    methods: { action: action("clicked") }
  }),
  {
    info: {
      summary: "Simple IconButton component"
    }
  }
);
