import { storiesOf } from "@storybook/vue";
import { text, select, boolean, number } from "@storybook/addon-knobs";
import { TooltipPlacement, TooltipColor } from "@/const/Tooltip";
import Tooltip from "@/components/atoms/Tooltip.vue";

storiesOf("Atom | Tooltip", module)
  .add(
    "default",
    () => ({
      components: { Tooltip },
      props: {
        placement: {
          default: select(
            "Placement",
            TooltipPlacement,
            TooltipPlacement["Top"]
          ),
        },
        content: {
          default: text("Content", "Tooltip text!"),
        },
        color: {
          default: select("Color", TooltipColor, TooltipColor["Dark"]),
        },
        addShadow: {
          default: boolean("Add Shadow", false),
        },
        show: {
          default: boolean("Show", false),
        },
        disabled: {
          default: boolean("Disabled", false),
        },
        offset: {
          default: number("Offset", 0),
        },
        visibleArrow: {
          default: boolean("Visible Arrow", true),
        },
        enterable: {
          default: boolean("Enterable", false),
        },
      },
      template: `<div style='padding: 50px;'>
        <Tooltip
          :color="color"
          :content="content"
          :placement="placement"
          :show="show"
          :disabled="disabled"
          :offset="offset"
          :visible-arrow="visibleArrow"
          :add-shadow="addShadow"
          :enterable="enterable"
        >
          Mouse over text!<br>
          Mouse over text!<br>
          Mouse over text!
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
        placement: {
          default: select(
            "Placement",
            TooltipPlacement,
            TooltipPlacement["Top"]
          ),
        },
        content: {
          default: text("Content", "Multi\ncontent\ntext"),
        },
        color: {
          default: select("Color", TooltipColor, TooltipColor["Dark"]),
        },
        addShadow: {
          default: boolean("Add Shadow", false),
        },
        show: {
          default: boolean("Show", false),
        },
        disabled: {
          default: boolean("Disabled", false),
        },
        offset: {
          default: number("Offset", 0),
        },
        visibleArrow: {
          default: boolean("Visible Arrow", true),
        },
        enterable: {
          default: boolean("Enterable", false),
        },
      },
      template: `<div style='padding: 50px;'>
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
          Mouse over text!<br>
          Mouse over text!<br>
          Mouse over text!

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
