import { shallowMount } from "@vue/test-utils";
import { checkEmittedValue } from "@test-utils/test-util";
import InputPart from "@/components/atoms/form/InputPart.vue";

const factory = (values = {}) => {
  return shallowMount(InputPart, {
    propsData: { value: "", ...values },
  });
};

describe("InputPart.vue", () => {
  describe("Model", () => {
    // Value model が反映される
    it("Input emit works", () => {
      const VALUE = "sample text";
      const wrapper = factory({
        value: VALUE,
      });

      expect(wrapper.props().value).toBe(VALUE);
    });
  });
  describe("Prop", () => {
    // Type propがある時 type が切り替わる
    // type は HTML5のInputタグに対応している
    it("Has type prop is add type class", () => {
      const wrapper = factory({
        type: "number",
      });
      expect(wrapper.attributes().type).toBe("number");
    });

    // Placeholder propがある時 placeholder属性が付与される
    it("Has placeholder prop is add placeholder class", () => {
      const PLACEHOLDER = "hogehoge text";
      const wrapper = factory({
        placeholder: PLACEHOLDER,
      });
      expect(wrapper.attributes().placeholder).toBe(PLACEHOLDER);
    });

    // Disabled propがある時 disabled 属性が付与される
    it("Has disabled prop is add disabled class", () => {
      const wrapper = factory({
        disabled: true,
      });
      expect(wrapper.attributes().disabled).toBe("disabled");
    });

    // Error propがある時 eroor classが付与する
    it("Has error prop is add error class", () => {
      const wrapper = factory({
        error: true,
      });
      expect(wrapper.classes()).toContain("input-part--error");
    });
  });
  describe("Emit", () => {
    // Input emitが動作する
    it("Input emit works", () => {
      const VALUE = "sample text";
      const wrapper = factory({
        VALUE,
      });
      wrapper.trigger("input");
      checkEmittedValue(wrapper, "input", VALUE);
    });
  });
});
