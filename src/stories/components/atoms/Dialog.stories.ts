import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";
import Dialog from "@/components/atoms/Dialog.vue";

storiesOf("Atom/Dialog", module)
  .add(
    "default",
    () => ({
      components: { Dialog },
      props: {
        visible: {
          default: boolean("Visible", true, "Dialog props")
        },
        title: {
          default: text("Title", "Title", "Dialog props")
        },
        width: {
          default: text("Width", "50%", "Dialog props")
        },
        top: {
          default: text("Top", "15vh", "Dialog props")
        },
        appendToBody: {
          default: boolean("Append To Body", true, "Dialog props")
        },
        closeOnClickModal: {
          default: boolean("Close On Click Modal", true, "Dialog props")
        },
        showCloseButton: {
          default: boolean("Show Close Button", true, "Dialog props")
        },
        center: {
          default: boolean("Center", true, "Dialog props")
        },
        destroyOnClose: {
          default: boolean("Destroy on close", true, "Dialog props")
        },
        contentSlot: {
          default: text("Content Slot", "Default slot")
        }
      },
      methods: { open: action("open"), close: action("close") },
      template: `
      <Dialog class="dialog"
       :visible="visible"
       :title="title"
       :width="width"
       :top="top"
       :append-to-body="appendToBody"
       :close-on-click-modal="closeOnClickModal"
       :show-close-button="showCloseButton"
       :center="center"
       :destroy-on-close="destroyOnClose"
       @open="open"
       @close="close"
      >
        {{ contentSlot }}
      </Dialog>`
    }),
    {
      info: {
        summary: "Simple Dialog component"
      }
    }
  )
  .add(
    "header and footer slot",
    () => ({
      components: { Dialog },
      props: {
        visible: {
          default: boolean("Visible", true, "Dialog props")
        },
        width: {
          default: text("Width", "50%", "Dialog props")
        },
        top: {
          default: text("Top", "15vh", "Dialog props")
        },
        appendToBody: {
          default: boolean("Append To Body", true, "Dialog props")
        },
        closeOnClickModal: {
          default: boolean("Close On Click Modal", true, "Dialog props")
        },
        showCloseButton: {
          default: boolean("Show Close Button", true, "Dialog props")
        },
        center: {
          default: boolean("Center", true, "Dialog props")
        },
        destroyOnClose: {
          default: boolean("Destroy on close", true, "Dialog props")
        },
        contentSlot: {
          default: text("Content Slot", "Default slot")
        },
        titleSlot: {
          default: text("Title Slot", "Title slot")
        },
        footerSlot: {
          default: text("Footer Slot", "Footer slot")
        }
      },
      methods: { open: action("open"), close: action("close") },
      template: `
      <Dialog class="dialog"
       :visible="visible"
       :width="width"
       :top="top"
       :append-to-body="appendToBody"
       :close-on-click-modal="closeOnClickModal"
       :show-close-button="showCloseButton"
       :center="center"
       :destroy-on-close="destroyOnClose"
       @open="open"
       @close="close"
      >
        <div slot="title">{{ titleSlot }}</div>
        {{ contentSlot }}
        <div slot="footer">{{ footerSlot }}</div>
      </Dialog>`
    }),
    {
      info: {
        summary: "header and footer slot"
      }
    }
  );
