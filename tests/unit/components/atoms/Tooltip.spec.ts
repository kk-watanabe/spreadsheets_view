import { shallowMount, mount } from "@vue/test-utils";
import { PopupPlacement, PopupColor } from "@/const/Popup";
import Vue from "vue";
import Tooltip from "@/components/atoms/Tooltip.vue";

const DEFAULT_TEXT = "SlotText";

const shallowFactory = (values = {}) => {
  return shallowMount(Tooltip, {
    ...values,
  });
};

const factory = (values = {}) => {
  return mount(Tooltip, {
    ...values,
  });
};

describe.skip("Tooltip.vue", () => {
  describe("Slot", () => {
    // Default slotの値が表示される
    it("Renders default slot", () => {
      const wrapper = shallowFactory({
        slots: {
          default: DEFAULT_TEXT,
        },
      });
      expect(wrapper.text()).toBe(DEFAULT_TEXT);
    });

    // Content slotの値が表示される
    it("Renders content slot", () => {
      const contentText = "contentText";
      const wrapper = shallowFactory({
        slots: {
          content: contentText,
        },
      });
      const content = wrapper.vm.$slots.content;

      if (content) {
        expect(content[0].text).toBe(contentText);
      }
    });
  });

  describe("Prop", () => {
    // placement prop に値が渡っている
    it("Pass TooltipPopup when placement prop", () => {
      const wrapper = shallowFactory();
      // Top
      // expect(wrapper.props().placement).toBe(PopupPlacement.Top);
    });

    // content prop に値が渡っている
    it("Pass TooltipPopup when content prop", () => {
      const wrapper = shallowFactory();
      // Top
      // expect(wrapper.props().placement).toBe(PopupPlacement.Top);
    });

    // color prop に値が渡っている
    it("Pass TooltipPopup when color prop", () => {
      const wrapper = shallowFactory();
      // Top
      // expect(wrapper.props().placement).toBe(PopupPlacement.Top);
    });

    // addShadow prop に値が渡っている
    it("Pass TooltipPopup when addShadow prop", () => {
      const wrapper = shallowFactory();
      // Top
      // expect(wrapper.props().placement).toBe(PopupPlacement.Top);
    });

    // showArrow prop に値が渡っている
    it("Pass TooltipPopup when showArrow prop", () => {
      const wrapper = shallowFactory();
      // Top
      // expect(wrapper.props().placement).toBe(PopupPlacement.Top);
    });
  });

  describe("Emit", () => {
    it("Mouse-enter for return Emit.", () => {
      const wrapper = factory();

      // wrapper.trigger("click");

      // checkOneCalledEmitted(wrapper, "click");
    });

    it("Mouse-leave for return Emit.", () => {
      const wrapper = factory();

      // wrapper.trigger("click");

      // checkOneCalledEmitted(wrapper, "click");
    });
  });
});
