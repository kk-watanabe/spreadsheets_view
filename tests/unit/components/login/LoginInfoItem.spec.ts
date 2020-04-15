import { shallowMount } from "@vue/test-utils";
import { LoginInfo } from "@/models/Login";
import { checkOneCalledEmitted } from "@test-utils/test-util";
import Vue from "vue";
import LoginInfoItem from "@/components/login/LoginInfoItem.vue";
import IconButton from "@/components/atoms/IconButton.vue";

const loginInfo: LoginInfo = {
  name: "サンプルテキスト",
  id: "sampletext1234",
};

const factory = () => {
  return shallowMount(LoginInfoItem, {
    propsData: {
      loginInfo,
    },
  });
};

describe("LoginInfoItem.vue", () => {
  describe("Prop", () => {
    // loginInfo prop の name が無いとき loginInfo id が表示される
    it("Show id of loginIno prop when not name of logininfo prop.", async () => {
      const wrapper = factory();
      const noLoginName: LoginInfo = {
        name: "",
        id: "sampletext1234",
      };
      wrapper.setProps({ loginInfo: noLoginName });
      await Vue.nextTick();
      expect(wrapper.find(".login-info-item__text").text()).toBe(
        noLoginName.id
      );
    });

    // loginInfo prop の name がある時 loginInfo name が表示される
    it("Show name of loginIno prop when name of logininfo prop.", () => {
      const wrapper = factory();
      expect(wrapper.find(".login-info-item__text").text()).toBe(
        loginInfo.name
      );
    });
  });
  describe("Emit", () => {
    // delete emitが動作する
    it("Delete emit works", () => {
      const wrapper = factory();
      const iconButton = wrapper.find(IconButton);
      iconButton.vm.$emit("click");
      checkOneCalledEmitted(wrapper, "delete");
    });

    // login emitが動作する
    it("Login emit works", () => {
      const wrapper = factory();
      const loginInfoItemText = wrapper.find(".login-info-item__text");
      loginInfoItemText.trigger("click");
      checkOneCalledEmitted(wrapper, "login");
    });
  });
});
