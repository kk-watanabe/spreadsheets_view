import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";
import { ButtonType } from "@/const/Button";
import Button from "@/components/atoms/Button.vue";

storiesOf("Atom/Button", module).add(
  "default",
  () => ({
    components: { Button },
    props: {
      text: {
        default: text("text", "Hello!"),
      },
      color: {
        default: select("color", ButtonType, ButtonType.Dark),
      },
      disabled: {
        default: boolean("disabled", false),
      },
      height: {
        default: text("height", "40px"),
      },
      padding: {
        default: text("padding", "0 10px"),
      },
    },
    template: `
      <Button
        :color="color"
        :disabled="disabled"
        :height="height"
        :padding="padding"
        @click="action">
        {{ text }}
      </Button>`,
    methods: { action: action("clicked") },
  }),
  {
    info: {
      summary: "Simple Button component",
    },
  }
);
