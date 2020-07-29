import { storiesOf } from "@storybook/vue";
import { text, select, boolean, number } from "@storybook/addon-knobs";
import { PopupPlacement, PopupColor } from "@/const/Popup";
import Tooltip from "@/components/atoms/Tooltip.vue";

storiesOf("Atom/Tooltip", module)
  .add(
    "default",
    () => ({
      components: { Tooltip },
      props: {
        text: {
          default: text("text", "smaple text\nsmaple text smaple\nsmaple text"),
        },
        content: {
          default: text("Content", "Tooltip text!"),
        },
        placement: {
          default: select("Placement", PopupPlacement, PopupPlacement["Top"]),
        },
        color: {
          default: select("Color", PopupColor, PopupColor["Dark"]),
        },
        addShadow: {
          default: boolean("Add Shadow", false),
        },
        showArrow: {
          default: boolean("Show Arrow", true),
        },
      },
      template: `<div style='padding: 50px 100px;'>
        <Tooltip
          :content="content"
          :placement="placement"
          :color="color"
          :add-shadow="addShadow"
          :show-arrow="showArrow"
        >
          <span class="newLine box">{{ text }}</span>
        </Tooltip>
      </div>`,
    }),
    {
      info: {
        summary: "Simple tooltip component",
      },
    }
  )
  .add(
    "Multi content",
    () => ({
      components: { Tooltip },
      props: {
        text: {
          default: text("text", "smaple text\nsmaple text smaple\nsmaple text"),
        },
        content: {
          default: text(
            "Content",
            "Tooltip text!\nsmaple text smaple\nsmaple text"
          ),
        },
        placement: {
          default: select("Placement", PopupPlacement, PopupPlacement["Top"]),
        },
        color: {
          default: select("Color", PopupColor, PopupColor["Dark"]),
        },
        addShadow: {
          default: boolean("Add Shadow", false),
        },
        showArrow: {
          default: boolean("Show Arrow", true),
        },
      },
      template: `<div style='padding: 50px 100px;'>
        <Tooltip
          :color="color"
          :placement="placement"
          :show="show"
          :disabled="disabled"
          :offset="offset"
          :visible-arrow="visibleArrow"
          :add-shadow="addShadow"
          :enterable="enterable"
        >
          <span class="newLine box">
            {{ text }}
          </span>

          <div slot="content" class="newLine">{{ content }}</div>
        </Tooltip>
      </div>`,
    }),
    {
      info: {
        summary: "Multi content tooltip",
      },
    }
  );
