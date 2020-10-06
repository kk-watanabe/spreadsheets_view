import { shallowMount } from "@vue/test-utils";
import "@testing-library/jest-dom";
import { checkOneCalledEmitted, transitionStub } from "@test-utils/test-util";
import Overlay from "@/components/atoms/_helper/Overlay.vue";

const factory = (values = {}) => {
  return shallowMount(Overlay, {
    stubs: {
      Transition: transitionStub(),
    },
    propsData: {
      value: true,
      ...values,
    },
  });
};

describe("Overlay.vue", () => {
  describe("Prop", () => {
    it("Show Overlay when value prop is true", () => {
      const wrapper = factory();

      expect(wrapper.element).toBeVisible();
    });

    it("Hidden Overlay when value prop is false", () => {
      const wrapper = factory({
        value: false,
      });

      expect(wrapper.element).not.toBeVisible();
    });

    it("Add style zIndex when zIndex prop is 4000", () => {
      const wrapper = factory({
        zIndex: 4000,
      });

      expect(wrapper.attributes().style).toBe("z-index: 4000;");
    });
  });

  describe("Emit", () => {
    it("Click for return Emit.", () => {
      const wrapper = factory();

      wrapper.trigger("click");

      checkOneCalledEmitted(wrapper, "click");
    });
  });
});
