import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";
import DialogBase from "@/components/atoms/_helper/DialogBase.vue";

storiesOf("_helper/DialogBase", module).add(
  "default",
  () => ({
    components: { DialogBase },
    props: {
      value: {
        default: boolean("value", false),
      },
      title: {
        default: text("Title", "Title"),
      },
      width: {
        default: text("Width", "50%"),
      },
      top: {
        default: text("Top", "15vh"),
      },
      isCenter: {
        default: boolean("isCenter", false),
      },
    },
    methods: {
      onOpen: action("open"),
      onClose: action("close"),
    },
    template: `
      <DialogBase
       :value="value"
       :width="width"
       :top="top"
       :title="title"
       :is-center="isCenter"
       @open="onOpen"
       @close="onClose"
      >
        <template v-slot:header>header</template>
        <div>contentSlot</div>
        <template v-slot:footer>footer</template>
      </DialogBase>`,
  }),
  {
    info: {
      summary: "Simple DialogBase component",
    },
  }
);
