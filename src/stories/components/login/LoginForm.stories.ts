import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { object, boolean } from "@storybook/addon-knobs";
import { LoginInfo } from "@/models/Login";
import LoginForm from "@/components/login/LoginForm.vue";

const loginInfo: LoginInfo = {
  name: "サンプルテキスト",
  id: "sampletext1234"
};

storiesOf("Login/LoginForm", module).add(
  "default",
  () => ({
    data() {
      return { loginInfo };
    },
    props: {
      disabledLogin: {
        default: boolean("Disabled Login", false)
      }
    },
    components: { LoginForm },
    methods: { input: action("input") },
    template: `<LoginForm v-model="loginInfo" :disabled-login="disabledLogin" @input="input" />`
  }),
  {
    info: {
      summary: "Simple LoginForm component"
    }
  }
);
