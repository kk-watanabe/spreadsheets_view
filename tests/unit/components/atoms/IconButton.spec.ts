import { shallowMount } from "@vue/test-utils";
import { ButtonType } from "@/const/Button";
import { checkOneCalledEmitted } from "@test-utils/test-util";
import { Icons } from "@/const/Icons";
import Vue from "vue";
import IconButton from "@/components/atoms/IconButton.vue";

const factory = (values = {}) => {
  return shallowMount(IconButton, {
    propsData: {
      icon: Icons.Books,
      ...values,
    },
  });
};

describe("IconButton.vue", () => {
  describe("Prop", () => {
    // Icon propがある時 `icon-button__icon` の icon porps に渡る
    it("Has icon prop is add icon props to `icon-button__icon`", () => {
      const icon = Icons.Facebook;
      const wrapper = factory({
        icon,
      });
      expect(wrapper.find(".icon-button__icon").props().icon).toContain(icon);
    });

    // Color prop がある時 color classが付与する
    // color class は ButtonType の数だけある
    it("Has color prop is add color class", async () => {
      const wrapper = factory();
      // Dark
      expect(wrapper.classes()).toContain("icon-button--" + ButtonType.Dark);
      // Light
      wrapper.setProps({ color: ButtonType.Light });
      await Vue.nextTick();
      expect(wrapper.classes()).toContain("icon-button--" + ButtonType.Light);
      // Green
      wrapper.setProps({ color: ButtonType.Green });
      await Vue.nextTick();
      expect(wrapper.classes()).toContain("icon-button--" + ButtonType.Green);
    });

    // Size propがある時 width & height style が付与される
    it("Has size prop is add width and height style", () => {
      const size = 30;
      const wrapper = factory({
        size,
      });
      expect(wrapper.attributes().style).toContain("width: " + size + "px;");
      expect(wrapper.attributes().style).toContain("height: " + size + "px;");
    });

    // IconSize propがある時 `icon-button__icon` に font-size styleが付与する
    it("Has icon-size prop is add font-size style to `icon-button__icon`", () => {
      const iconSize = 20;
      const wrapper = factory({
        iconSize,
      });
      expect(wrapper.find(".icon-button__icon").attributes().style).toContain(
        "font-size: " + iconSize + "px;"
      );
    });

    // IconOffset propがある時 `icon-button__icon` に margin styleが付与する
    it("Has icon-offset prop is add margin style to `icon-button__icon`", () => {
      const iconOffset = "0px 5px 5px 0px";
      const wrapper = factory({
        iconOffset,
      });
      expect(wrapper.find(".icon-button__icon").attributes().style).toContain(
        "margin: " + iconOffset
      );
    });

    // Disabled propがある時 disabled classが付与する
    it("Has disabled prop is add disabled class", () => {
      const wrapper = factory({
        disabled: true,
      });
      expect(wrapper.classes()).toContain("icon-button--disabled");
    });
  });
  describe("Emit", () => {
    // Click emitが動作する
    // clickの無効は `pointer-events: none;` で制御しているので非確認
    it("Click emit works", () => {
      const wrapper = factory();
      wrapper.trigger("click");

      checkOneCalledEmitted(wrapper, "click");
    });
  });
});
