import { storiesOf } from "@storybook/vue";
import { select } from "@storybook/addon-knobs";
import { Icons } from "@/const/Icons";
import Icon from "@/components/atoms/Icon.vue";

storiesOf("Atom/Icon", module)
  .add(
    "default",
    () => ({
      components: { Icon },
      props: {
        icon: {
          default: select("Icon", Icons, Icons.Home),
        },
      },
      template: `<Icon :icon="icon" />`,
    }),
    {
      info: {
        summary: "Simple Icon component",
      },
    }
  )
  .add(
    "All icon",
    () => ({
      components: { Icon },
      data() {
        return { Icons };
      },
      template: `
      <div style="display: flex; flex-wrap: wrap;">
        <div v-for="icon in Icons" style="width: 90px; text-align: center; border: 1px solid #999; padding: 6px;">
        <Icon :icon="icon" />
        <div style="font-size: 12px; color: #666; align-self: flex-end;">{{icon}}</div>
      </div>
    </div>`,
    }),
    {
      info: {
        summary: "All Icon",
      },
    }
  );
