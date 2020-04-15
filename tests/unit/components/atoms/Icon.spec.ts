import { shallowMount } from "@vue/test-utils";
import { Icons } from "@/const/Icons";
import Icon from "@/components/atoms/Icon.vue";

const factory = (values = {}) => {
  return shallowMount(Icon, {
    propsData: { ...values },
  });
};

describe("Icon.vue", () => {
  describe("Prop", () => {
    // Icon propがある時 icon classが付与する
    it("Has icon prop is add icon class", () => {
      const wrapper = factory({
        icon: Icons.Books,
      });
      expect(wrapper.classes()).toContain(Icons.Books);
    });
    // Icons const で指定された class 全てが付与される
    it("Has icon prop is add icon class to all Icons const", () => {
      const icons = Object.entries(Icons);
      icons.forEach(icon => {
        const wrapper = factory({
          icon: icon[1],
        });
        expect(wrapper.classes()).toContain(icon[1]);
      });
    });
  });
});
