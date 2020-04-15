import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/common/Footer.vue";

const factory = (values = {}) => {
  return shallowMount(Footer, {
    propsData: { ...values },
  });
};

describe("Footer.vue", () => {
  describe("Prop", () => {
    // loggedIn prop が false の時 footer__pagetop が表示されない
    it("Has loggedIn prop is false to 'footer__pagetop' is show", () => {
      const wrapper = factory({
        loggedIn: false,
      });
      expect(wrapper.find(".footer__pagetop").exists()).toBe(false);
    });

    // loggedIn prop が true の時 footer__pagetop が表示される
    it("Has loggedIn prop is true to 'footer__pagetop' is hidden", () => {
      const wrapper = factory({
        loggedIn: true,
      });
      expect(wrapper.find(".footer__pagetop").exists()).toBe(true);
    });
  });
});
