import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";
import Dialog from "@/components/atoms/Dialog.vue";

storiesOf("atom/Dialog", module).add(
  "default",
  () => ({
    components: { Dialog },
    data() {
      return {
        value: false,
      };
    },
    props: {
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
      <div>
        <label><input type="checkbox" v-model="value" />Open Dialog</label>

        <Dialog
         v-model="value"
         :width="width"
         :top="top"
         :title="title"
         :is-center="isCenter"
         @open="onOpen"
         @close="onClose"
        >
          <template v-slot:header>header text slot</template>
          <div>content text slot</div>
          <template v-slot:footer>footer text slot</template>
        </Dialog>
      </div>`,
  }),
  {
    info: {
      summary: "Simple Dialog component",
    },
  }
);
