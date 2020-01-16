import { storiesOf } from "@storybook/vue";
import { boolean } from "@storybook/addon-knobs";
import Header from "@/components/common/Header.vue";

storiesOf("Common/Header", module).add(
  "default",
  () => ({
    components: { Header },
    template: `<Header><template v-slot:navi>navi slot</template></Header>`
  }),
  {
    info: {
      summary: "Simple Header component"
    }
  }
);
