import { shallowMount } from "@vue/test-utils";
import { checkOneCalledEmitted } from "@test-utils/test-util";
import { PopupPlacement, PopupColor } from "@/const/Popup";
import Popup from "@/components/atoms/_helper/Popup.vue";

const factory = (values = {}) => {
  return shallowMount(Popup, {
    propsData: {
      ...values,
    },
  });
};

describe.skip("Popup.vue", () => {
  describe("placement prop", () => {
    it("Check style when placement prop is PopupPlacement.Top", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Check style when placement prop is PopupPlacement.TopStart", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Check style when placement prop is PopupPlacement.TopEnd", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Check style when placement prop is PopupPlacement.Right", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Check style when placement prop is PopupPlacement.RightStart", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Check style when placement prop is PopupPlacement.RightEnd", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Check style when placement prop is PopupPlacement.Bottom", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Check style when placement prop is PopupPlacement.BottomStart", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Check style when placement prop is PopupPlacement.BottomEnd", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Check style when placement prop is PopupPlacement.Left", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Check style when placement prop is PopupPlacement.LeftStart", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Check style when placement prop is PopupPlacement.LeftEnd", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });
  });

  describe("color prop", () => {
    it("Add class when color prop is PopupColor.Dark", () => {
      const wrapper = factory();

      // expect(wrapper.attributes().style).toBe("z-index: 4000;");
    });

    it("Add class when color prop is PopupColor.Light", () => {
      const wrapper = factory();

      expect(wrapper.attributes().style).toBe("z-index: 4000;");
    });
  });

  describe("addShadow prop", () => {
    it("Add class when addShadow prop is true", () => {
      const wrapper = factory();

      expect(wrapper.attributes().style).toBe("z-index: 4000;");
    });

    it("Add not class when addShadow prop is false", () => {
      const wrapper = factory();

      expect(wrapper.attributes().style).toBe("z-index: 4000;");
    });
  });

  describe("showArrow prop", () => {
    it("Show `.popup__arrow` when showArrow prop is true", () => {
      const wrapper = factory();

      // expect(wrapper.attributes().style).toBe("z-index: 4000;");
    });

    it("Hidden `.popup__arrow` when showArrow prop is false", () => {
      const wrapper = factory();

      // expect(wrapper.attributes().style).toBe("z-index: 4000;");
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
