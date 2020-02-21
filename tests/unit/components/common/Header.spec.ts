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
        },
        propsData: { loggedIn: false }
      });

      expect(wrapper.text()).toContain(naviText);
    });
  });

  describe("Prop", () => {
    // loggedIn prop が false の時 footer__pagetop が表示されない
    it("Has loggedIn prop is false to 'header__sheet-name' is hidden", () => {
      const wrapper = factory({
        propsData: { loggedIn: false }
      });
      expect(wrapper.find(".footer__pagetop").exists()).toBe(false);
    });

    // loggedIn prop が true の時 footer__pagetop が表示される
    it("Has loggedIn prop is true to 'header__sheet-name' is show and add class", () => {
      const wrapper = factory({
        propsData: { loggedIn: true }
      });
      expect(wrapper.find(".header__inner").classes()).toContain(
        "header__inner--logged-in"
      );
      expect(wrapper.find(".header__logo").classes()).toContain(
        "header__logo--logged-in"
      );
      expect(wrapper.find(".header__sheet-name").exists()).toBe(true);
    });

    // title prop に値が渡っている
    it("Has title prop", async () => {
      const name = "titleText";
      const wrapper = factory({
        propsData: { loggedIn: true, name }
      });

      expect(wrapper.props().name).toBe(name);
      expect(wrapper.find(".header__sheet-name").exists()).toBe(true);
      expect(wrapper.find(".header__sheet-name").text()).toBe(name);
    });
  });
});
