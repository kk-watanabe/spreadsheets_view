import { shallowMount } from "@vue/test-utils";
import Header from "@/components/common/Header.vue";

const factory = (values = {}) => {
  return shallowMount(Header, { ...values });
};

describe("Footer.vue", () => {
  describe("Slot", () => {
    // Navi slotの値が表示される
    it("Renders navi slot", () => {
      const naviText = "SlotText";
      const wrapper = factory({
        slots: {
          navi: naviText
        }
      });

      expect(wrapper.text()).toContain(naviText);
    });
  });
});
