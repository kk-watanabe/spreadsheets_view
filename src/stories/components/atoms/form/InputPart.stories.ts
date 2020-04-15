import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";
import InputPart from "@/components/atoms/form/InputPart.vue";

const InputType = {
  Text: "text",
  Search: "search",
  Tel: "tel",
  Url: "url",
  Email: "email",
  Password: "password",
  Number: "number",
};

storiesOf("Atom/Form/InputPart", module).add(
  "default",
  () => ({
    components: { InputPart },
    data() {
      return { value: "default value" };
    },
    props: {
      type: {
        default: select("Type", InputType, InputType.Text),
      },
      placeholder: {
        default: text("Placeholder", "Sample text"),
      },
      disabled: {
        default: boolean("Disabled", false),
      },
      error: {
        default: boolean("Error", false),
      },
    },
    template: `<InputPart
     v-model="value"
     :type="type"
     :placeholder="placeholder"
     :disabled="disabled"
     :error="error"
     @input="input"
     @focus="focus" />`,
    methods: { input: action("input"), focus: action("focus") },
  }),
  {
    info: {
      summary: "Simple InputPart component",
    },
  }
);
