import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import { TooltipPlacement, TooltipColor } from "@/const/Tooltip";
import Vue from "vue";
import ElementUI from "element-ui";
import Tooltip from "@/components/atoms/Tooltip.vue";

const DEFAULT_TEXT = "SlotText";

const localVue = createLocalVue();
localVue.use(ElementUI);

const shallowFactory = (values = {}) => {
  return shallowMount(Tooltip, {
    localVue,
    ...values,
  });
};

const factory = (values = {}) => {
  return mount(Tooltip, {
    localVue,
    ...values,
  });
};

describe("Tooltip.vue", () => {
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
    // placement は TooltipPlacement の数だけある
    it("Has placement prop", async () => {
      const wrapper = shallowFactory();
      // Top
      expect(wrapper.props().placement).toBe(TooltipPlacement.Top);
      // TopStart
      wrapper.setProps({ placement: TooltipPlacement.TopStart });
      await Vue.nextTick();
      expect(wrapper.props().placement).toBe(TooltipPlacement.TopStart);
      // TopEnd
      wrapper.setProps({ placement: TooltipPlacement.TopEnd });
      await Vue.nextTick();
      expect(wrapper.props().placement).toBe(TooltipPlacement.TopEnd);
      // Bottom
      wrapper.setProps({ placement: TooltipPlacement.Bottom });
      await Vue.nextTick();
      expect(wrapper.props().placement).toBe(TooltipPlacement.Bottom);
      // BottomStart
      wrapper.setProps({ placement: TooltipPlacement.BottomStart });
      await Vue.nextTick();
      expect(wrapper.props().placement).toBe(TooltipPlacement.BottomStart);
      // BottomEnd
      wrapper.setProps({ placement: TooltipPlacement.BottomEnd });
      await Vue.nextTick();
      expect(wrapper.props().placement).toBe(TooltipPlacement.BottomEnd);
      // Left
      wrapper.setProps({ placement: TooltipPlacement.Left });
      await Vue.nextTick();
      expect(wrapper.props().placement).toBe(TooltipPlacement.Left);
      // LeftStart
      wrapper.setProps({ placement: TooltipPlacement.LeftStart });
      await Vue.nextTick();
      expect(wrapper.props().placement).toBe(TooltipPlacement.LeftStart);
      // LeftEnd
      wrapper.setProps({ placement: TooltipPlacement.LeftEnd });
      await Vue.nextTick();
      expect(wrapper.props().placement).toBe(TooltipPlacement.LeftEnd);
      // Right
      wrapper.setProps({ placement: TooltipPlacement.Right });
      await Vue.nextTick();
      expect(wrapper.props().placement).toBe(TooltipPlacement.Right);
      // RightStart
      wrapper.setProps({ placement: TooltipPlacement.RightStart });
      await Vue.nextTick();
      expect(wrapper.props().placement).toBe(TooltipPlacement.RightStart);
      // RightEnd
      wrapper.setProps({ placement: TooltipPlacement.RightEnd });
      await Vue.nextTick();
      expect(wrapper.props().placement).toBe(TooltipPlacement.RightEnd);
    });
    // content prop に値が渡っている
    it("Has content prop", () => {
      const contentText = "contentText";
      const wrapper = shallowFactory({
        propsData: {
          content: contentText,
        },
      });
      expect(wrapper.props().content).toBe(contentText);
    });
    // Color prop がある時 color classが付与する
    // color class は TooltipColor の数だけある
    it("Has color prop", async () => {
      const wrapper = factory();
      // // Dark
      expect(wrapper.props().color).toBe(TooltipColor.Dark);
      // Light
      wrapper.setProps({ color: TooltipColor.Light });
      await Vue.nextTick();
      expect(wrapper.props().color).toBe(TooltipColor.Light);
    });

    // addShadow prop が true の時に addShadow class が付与する
    it("Has addShadow prop", () => {
      const wrapper = shallowFactory({
        propsData: {
          addShadow: true,
        },
      });
      expect(wrapper.props().addShadow).toBe(true);
    });
    // show prop に値が渡っているおり, value と manual にも同じ値が渡っている
    it("Has color prop and same value is passed to value and manual", () => {
      const show = true;
      const wrapper = shallowFactory({
        propsData: {
          show,
        },
      });

      expect(wrapper.props().show).toBe(show);
      expect(wrapper.attributes().value).toBe(String(show));
      expect(wrapper.attributes().manual).toBe(String(show));
    });
    // disabled prop に値が渡っている
    it("Has disabled prop ", () => {
      const wrapper = shallowFactory({
        propsData: {
          disabled: true,
        },
      });
      expect(wrapper.props().disabled).toBe(true);
    });
    // offset prop に値が渡っている
    it("Has offset prop ", () => {
      const offset = 100;
      const wrapper = shallowFactory({
        propsData: {
          offset,
        },
      });
      expect(wrapper.props().offset).toBe(offset);
    });
    // visibleArroow prop に値が渡っている
    it("Has visibleArroow prop ", () => {
      const wrapper = shallowFactory({
        propsData: {
          visibleArrow: false,
        },
      });
      expect(wrapper.props().visibleArroow).not.toBe(true);
    });
    // enterable prop に値が渡っている
    it("Has enterable prop ", () => {
      const wrapper = shallowFactory({
        propsData: {
          enterable: true,
        },
      });
      expect(wrapper.props().enterable).toBe(true);
    });
  });
});
