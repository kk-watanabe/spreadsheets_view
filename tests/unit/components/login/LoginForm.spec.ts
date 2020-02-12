import { shallowMount } from "@vue/test-utils";
import { LoginInfo } from "@/models/Login";
import Vue from "vue";
import LoginForm from "@/components/login/LoginForm.vue";
import InputPart from "@/components/atoms/form/InputPart.vue";

const loginInfo: LoginInfo = {
  name: "サンプルテキスト",
  id: "sampletext1234"
};

const factory = () => {
  return shallowMount(LoginForm, {
    propsData: {
      loginInfo,
      disabledLogin: false
    }
  });
};

describe("LoginForm.vue", () => {
  describe("Model", () => {
    // loginInfo model が反映される
    it("Has loginInfo model", () => {
      const wrapper = factory();

      expect(wrapper.props().loginInfo).toBe(loginInfo);
    });
  });

  describe("Prop", () => {
    // disabledLogin prop が反映される
    it("Has disabledLogin prop", async () => {
      const disabledLogin = true;
      const wrapper = factory();
      wrapper.setProps({ disabledLogin });
      await Vue.nextTick();
      expect(wrapper.props().disabledLogin).toBe(disabledLogin);
    });
  });
  describe("Emit", () => {
    // input emitが動作する
    it("input emit works to id", async () => {
      const wrapper = factory();
      const inputPart = wrapper.findAll(InputPart);

      const updateId = "testtest";
      inputPart.at(0).vm.$emit("input", updateId);
      await Vue.nextTick();
      expect(wrapper.emitted("input")).toBeTruthy();
      expect(wrapper.emitted("input").length).toBe(1);
      expect(wrapper.emitted("input")[0][0].id).toEqual(updateId);
    });

    // input emitが動作する
    it("input emit works to name", async () => {
      const wrapper = factory();
      const inputPart = wrapper.findAll(InputPart);

      const updateName = "sampletext456";
      inputPart.at(1).vm.$emit("input", updateName);
      await Vue.nextTick();
      expect(wrapper.emitted("input")).toBeTruthy();
      expect(wrapper.emitted("input").length).toBe(1);
      expect(wrapper.emitted("input")[0][0].name).toEqual(updateName);
    });
  });
});
