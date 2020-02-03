<template>
  <div class="login">
    <div class="login__container">
      <div class="login__input-field">
        <div class="login__icon login__icon--required">必須</div>
        <div class="login__input">
          <InputPart
            v-model="id"
            :error="disabledLogin"
            placeholder="スプレットシートのIDを入力してください"
          />
        </div>
      </div>

      <div class="login__input-field">
        <div class="login__icon login__icon--any">任意</div>
        <div class="login__input">
          <InputPart
            v-model="name"
            placeholder="スプレットシート名を入力してください"
          />
        </div>
      </div>

      <Button
        class="login__submit"
        :disabled="disableSubmit"
        @click="loginSubmit"
        >送信</Button
      >
      <transition name="show">
        <div v-if="disabledLogin" class="login__error">
          読み込みできませんでした。<br />入力内容をご確認の上、再度ご入力下さい。
        </div>
      </transition>
    </div>

    <div v-if="showLoginInfos" class="login__loginInfos">
      <div class="login__title">以前ログインしたID一覧</div>
      <div class="login__loginInfo-container">
        <LoginInfoItem
          v-for="saveLoginInfo in saveLoginInfos"
          :key="saveLoginInfo.id"
          class="login__loginInfo-item"
          :login-info="saveLoginInfo"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model, Prop } from "vue-property-decorator";
import { LoginInfo } from "@/models/Login";
import InputPart from "@/components/atoms/form/InputPart.vue";
import Button from "@/components/atoms/Button.vue";
import LoginInfoItem from "@/components/login/LoginInfoItem.vue";

@Component({
  components: {
    InputPart,
    Button,
    LoginInfoItem
  }
})
export default class Login extends Vue {
  id: string = "";
  name: string = "";

  get loggedIn(): boolean {
    return this.$store.getters["auth/loggedIn"];
  }

  get spreadSheetsId(): string {
    return this.$store.state.auth.spreadSheetsId;
  }

  get spreadSheetsName(): string {
    return this.$store.state.auth.spreadSheetsName;
  }

  get disableSubmit(): boolean {
    return this.id.length === 0;
  }

  get disabledLogin(): boolean {
    return this.$store.state.auth.disabledLogin;
  }

  get saveLoginInfos(): LoginInfo[] {
    return this.$store.state.auth.saveLoginInfos;
  }

  get showLoginInfos(): boolean {
    return this.saveLoginInfos.length > 0;
  }

  async loginSubmit() {
    const loginInfo: LoginInfo = {
      id: this.id,
      name: this.name
    };

    await this.$store.dispatch("auth/login", loginInfo);
    this.$router.push("/styleguide");
  }
}
</script>

<style scoped lang="scss">
.login {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  height: calc(100vh - #{$header_height} - #{$footer_height});
  &__container {
    width: 450px;
  }
  &__input-field {
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
  &__submit {
    margin: 30px auto 0;
    max-width: 150px;
  }
  &__error {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: $is_sub1_color200;
    text-align: center;
    transform: translateY(-10%);
  }

  &__loginInfos {
    margin-top: 50px;
    width: 400px;
  }
  &__title {
    font-weight: bold;

    @include font-size(18);
  }
  &__loginInfo-container {
    margin-top: 15px;
  }
  &__loginInfo-item {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}

.show-enter-active,
.show-leave-active {
  transition: opacity $anime_base_duration ease,
    transform $anime_base_duration ease;
}
.show-enter,
.show-leave-to {
  opacity: 0;
  transform: translateY(0);
}
</style>
