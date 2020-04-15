import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { object } from "@storybook/addon-knobs";
import { LoginInfo } from "@/models/Login";
import LoginInfoItem from "@/components/login/LoginInfoItem.vue";

const loginInfo: LoginInfo = {
  name: "サンプルテキスト",
  id: "sampletext1234",
};

storiesOf("Login/LoginInfoItem", module).add(
  "default",
  () => ({
    props: {
      loginInfo: {
        default: () => object("LoginInfo", loginInfo),
      },
    },
    components: { LoginInfoItem },
    methods: { onLogin: action("onLogin"), onDelete: action("onDelete") },
    template: `<LoginInfoItem :login-info="loginInfo" @login="onLogin" @delete="onDelete" />`,
  }),
  {
    info: {
      summary: "Simple LoginInfoItem component",
    },
  }
);
