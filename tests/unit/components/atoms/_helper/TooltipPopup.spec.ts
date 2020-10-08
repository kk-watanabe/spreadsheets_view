import { shallowMount } from "@vue/test-utils";
import { checkOneCalledEmitted } from "@test-utils/test-util";
import { PopupPlacement, PopupColor } from "@/const/Popup";
import TooltipPopup from "@/components/atoms/_helper/TooltipPopup.vue";

const factory = (values = {}) => {
  return shallowMount(TooltipPopup, {
    propsData: {
      ...values,
    },
  });
};

describe("TooltipPopup.vue", () => {
  describe("slot", () => {
    it("Show content to `.tooltip-popup__text`", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });
  });

  describe("prop", () => {
    it("Show content to `.tooltip-popup__text`", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Pass placement to Popup", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Pass color to Popup", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Pass addShadow to Popup", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Pass showArrow to Popup", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
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
