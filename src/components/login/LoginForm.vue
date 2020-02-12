<template>
  <div class="login-form">
    <div class="login-form__field">
      <div class="login-form__icon login-form__icon--required">必須</div>
      <div class="login-form__input">
        <InputPart
          :value="loginInfo.id"
          :error="disabledLogin"
          placeholder="スプレットシートのIDを入力してください"
          @input="onUpdateId"
        />
      </div>
    </div>

    <div class="login-form__field">
      <div class="login-form__icon login-form__icon--any">任意</div>
      <div class="login-form__input">
        <InputPart
          :value="loginInfo.name"
          placeholder="スプレットシート名を入力してください"
          @input="onUpdateName"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model, Emit, Prop } from "vue-property-decorator";
import { LoginInfo } from "@/models/Login";
import InputPart from "@/components/atoms/form/InputPart.vue";

@Component({
  components: {
    InputPart
  }
})
export default class LoginForm extends Vue {
  @Model("input", { type: Object, required: true })
  loginInfo!: LoginInfo;

  @Prop({ type: Boolean, default: false })
  disabledLogin!: boolean;

  @Emit("input")
  onInput(loginInfo: LoginInfo) {}

  onUpdateId(id: string) {
    const updateLoginInfo: LoginInfo = {
      id,
      name: this.loginInfo.name
    };

    this.onInput(updateLoginInfo);
  }

  onUpdateName(name: string) {
    const updateLoginInfo: LoginInfo = {
      id: this.loginInfo.id,
      name
    };

    this.onInput(updateLoginInfo);
  }
}
</script>

<style scoped lang="scss">
.login-form {
  &__field {
    display: flex;
    align-items: center;
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
  &__input {
    margin-left: 10px;
    width: 100%;
  }
  &__icon {
    padding: 5px;
    width: 55px;
    border-radius: $border_radius;
    color: $is_color_white;
    text-align: center;

    @include font-size(12);
    &--required {
      background-color: $is_sub1_color200;
    }
    &--any {
      background-color: $is_color_gray700;
    }
  }
}
</style>
