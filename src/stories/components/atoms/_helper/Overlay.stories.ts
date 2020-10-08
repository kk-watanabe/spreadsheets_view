import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import Overlay from "@/components/atoms/_helper/Overlay.vue";

storiesOf("_helper/Overlay", module).add(
  "default",
  () => ({
    components: { Overlay },
    props: {
      value: {
        default: boolean("value", false),
      },
      zIndex: {
        default: number("zIndex", 2000),
      },
    },
    methods: {
      onClick: action("click"),
    },
    template: `
      <Overlay :value="value" :z-index="zIndex" @click="onClick" />`,
  }),
  {
    info: {
      summary: "Simple Overlay component",
    },
  }
);
