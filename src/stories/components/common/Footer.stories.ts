import { storiesOf } from "@storybook/vue";
import { boolean } from "@storybook/addon-knobs";
import Footer from "@/components/common/Footer.vue";

storiesOf("Common/Footer", module).add(
  "default",
  () => ({
    components: { Footer },
    props: {
      loggedIn: {
        default: boolean("Logged in", false)
      }
    },
    template: `<Footer :logged-in="loggedIn"/>`
  }),
  {
    info: {
      summary: "Simple Footer component"
    }
  }
);
