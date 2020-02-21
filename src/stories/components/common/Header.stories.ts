import { storiesOf } from "@storybook/vue";
import { boolean, text } from "@storybook/addon-knobs";
import Header from "@/components/common/Header.vue";

storiesOf("Common/Header", module).add(
  "default",
  () => ({
    components: { Header },
    props: {
      loggedIn: {
        default: boolean("Logged in", false)
      },
      name: {
        default: text("Name", "sample text")
      }
    },
    template: `<Header :logged-in="loggedIn" :name="name">
      <template v-slot:navi>navi slot</template>
    </Header>`
  }),
  {
    info: {
      summary: "Simple Header component"
    }
  }
);
