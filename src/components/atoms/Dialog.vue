<script lang="ts">
import { VNode, CreateElement } from "vue";
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { WidthProperty, MarginTopProperty } from "csstype";
import DialogBase from "@/components/atoms/_helper/DialogBase.vue";
import Overlay from "@/components/atoms/_helper/Overlay.vue";

let zIndexs: number[] = [];
let latestZIndex: number = 2000;
let rendering: boolean = false;

@Component
export default class Dialog extends Vue {
  @Prop({ type: Boolean, required: true })
  value!: boolean;

  @Prop({ type: String, default: "50%" })
  width!: WidthProperty<0>;

  @Prop({ type: String, default: "10vh" })
  top!: MarginTopProperty<0>;

  @Prop({ type: String, default: "" })
  title!: string;

  @Prop({ type: Boolean, default: false })
  isCenter!: boolean;

  @Emit("input")
  onInput(value: boolean) {}

  @Emit("open")
  onOpen(value: boolean) {
    this.onInput(value);
  }

  @Emit("close")
  onClose(value: boolean) {
    this.onInput(value);
  }

  showDialogIds: string[] = [];
  zIndex = 0;

  beforeCreate() {
    if (!rendering) {
      zIndexs.forEach((z) => {
        const element = document.getElementById("dialog" + String(z));
        if (element !== null) {
          element.remove();
        }
      });
    }

    Vue.nextTick(() => {
      // Create id
      this.zIndex = latestZIndex + 2;
      zIndexs.push(this.zIndex);
      latestZIndex = this.zIndex;
      rendering = true;

      const that = this;

      if (this.notExistDialog(this.zIndex)) {
        // @ts-ignore
        this._el = document.body.appendChild(document.createElement("div"));

        // @ts-ignore
        this._vm = new Vue({
          methods: {
            forseRender() {
              this.$forceUpdate();
            },
          },
          render(createElement) {
            return that.createDialog(that);
          },
          // @ts-ignore
        }).$mount(this._el);
      }
    });
  }

  created() {
    Vue.nextTick(() => {
      rendering = false;
    });
  }

  destroyed() {
    if (!rendering) {
      this.resetDialogs();
    }
  }

  render(h: CreateElement) {
    // @ts-ignore
    const vm = this._vm;
    if (vm) {
      vm.forseRender();
    }
  }

  notExistDialog(zIndex: number): boolean {
    const id = document.getElementById("dialog" + String(zIndex));
    return id === null;
  }

  resetDialogs() {
    const dialogs = document.getElementsByClassName("dialogs");
    const oldZIndexs: string[] = [];

    for (const d of dialogs) {
      oldZIndexs.push(d.id);
    }

    oldZIndexs.forEach((z) => {
      const element = document.getElementById(z);
      if (element !== null) {
        element.remove();
      }
    });
  }

  createDialog(component: this): VNode {
    return component.$createElement(
      "div",
      {
        key: "dialog" + String(this.zIndex),
        attrs: {
          id: "dialog" + String(this.zIndex),
          class: "dialogs",
        },
      },
      [
        component.$createElement(Overlay, {
          props: {
            value: component.value,
            zIndex: this.zIndex,
          },
          on: {
            click: () => {
              Vue.nextTick(() => {
                component.onClose(false);
              });
            },
          },
          key: "overlay" + String(this.zIndex),
          ref: "overlay" + String(this.zIndex),
          attrs: {
            id: "overlay" + String(this.zIndex),
          },
        }),
        component.$createElement(
          DialogBase,
          {
            props: {
              value: component.value,
              title: component.title,
              width: component.width,
              top: component.top,
              isCenter: component.isCenter,
            },
            style: {
              zIndex: this.zIndex,
            },
            on: {
              open: () => {
                Vue.nextTick(() => {
                  component.onOpen(true);
                });
              },
              close: () => {
                Vue.nextTick(() => {
                  component.onClose(false);
                });
              },
            },
            key: "dialogContent" + String(this.zIndex),
            ref: "dialogContent" + String(this.zIndex),
            attrs: {
              id: "dialogContent" + String(this.zIndex),
            },
          },
          [
            component.$slots.default,
            component.$createElement(
              "template",
              {
                slot: "header",
              },
              component.$slots.header
            ),
            component.$createElement(
              "template",
              {
                slot: "footer",
              },
              component.$slots.footer
            ),
          ]
        ),
      ]
    );
  }
}
</script>

<style scoped lang="scss"></style>
