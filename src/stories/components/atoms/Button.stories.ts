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
        default: text("Text", "Hello!"),
      },
      color: {
        default: select("Color", ButtonType, ButtonType.Dark),
      },
      disabled: {
        default: boolean("Disabled", false),
      },
    },
    template: `<Button :color="color" :disabled="disabled" @click="action">{{ text }}</Button>`,
    methods: { action: action("clicked") },
  }),
  {
    info: {
      summary: "Simple Button component",
    },
  }
);
