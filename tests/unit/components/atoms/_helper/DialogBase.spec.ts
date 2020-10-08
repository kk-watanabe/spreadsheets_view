import { shallowMount } from "@vue/test-utils";
import "@testing-library/jest-dom";
import { checkOneCalledEmitted, transitionStub } from "@test-utils/test-util";
import DialogBase from "@/components/atoms/_helper/DialogBase.vue";

const factory = (values = {}) => {
  return shallowMount(DialogBase, {
    stubs: {
      Transition: transitionStub(),
    },
    propsData: {
      value: true,
      ...values,
    },
  });
};

describe.skip("DialogBase.vue", () => {
  describe("value prop", () => {
    it("Show `.dialog-base` when value prop is true", () => {
      const wrapper = factory();

      expect(wrapper.element).toBeVisible();
    });

    it("Hidden `.dialog-base` when value prop is false", () => {
      const wrapper = factory({
        value: false,
      });

      expect(wrapper.element).not.toBeVisible();
    });
  });

  describe("header", () => {
    it("Show `.dialog-base__header` when header name slot extist", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Show `.dialog-base__header` and `.dialog-base__title` when title prop", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Hidden `.dialog-base__header` when header name slot not extist and not title prop", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });
  });

  describe("body", () => {
    it("Render default slot to `.dialog-base__body`", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });
  });

  describe("footer", () => {
    it("Show `.dialog-base__footer` when footer name slot extist", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Hidden `.dialog-base__footer` when footer name slot not extist", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });
  });

  describe("Prop", () => {
    it("Add width style when width prop", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Add top style when top prop and isCenter prop is false", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });

    it("Add class when isCenter prop is true", () => {
      const wrapper = factory();

      // expect(wrapper.element).toBeVisible();
    });
  });

  describe("Emit", () => {
    it("Show `.dialog-base` for return open Emit.", () => {
      const wrapper = factory();

      wrapper.trigger("click");

      checkOneCalledEmitted(wrapper, "click");
    });

    it("Click `.dialog-base__close-button` for return close Emit.", () => {
      const wrapper = factory();

      wrapper.trigger("click");

      checkOneCalledEmitted(wrapper, "click");
    });
  });
});
