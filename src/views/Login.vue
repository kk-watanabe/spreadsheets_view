<template>
  <div class="login">
    <div class="login__container">
      <LoginForm v-model="loginInfo" :disabled-login="disabledLogin" />

      <Button
        class="login__submit"
        :disabled="disableSubmit"
        @click="loginSubmit"
        >送信</Button
      >
      <transition name="show">
        <div class="login__notice">
          <div v-if="disabledLogin" class="login__error">
            読み込みできませんでした。<br />入力内容をご確認の上、再度ご入力下さい。
          </div>

          <template v-if="hasLoginInfo !== undefined">
            すでに<span class="login__have-info-name">{{
              loginInfoName(hasLoginInfo)
            }}</span
            >という名前で登録されています。
          </template>
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
          @login="onLogin"
          @delete="onDelete"
        />
      </div>
    </div>

    <Dialog :visible="showDialog" :title="dialogTitle" @close="onCancel">{{
      loginInfoName(currentLoginInfo)
    }}</Dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model, Prop } from "vue-property-decorator";
import { LoginInfo } from "@/models/Login";
import InputPart from "@/components/atoms/form/InputPart.vue";
import Button from "@/components/atoms/Button.vue";
import Dialog from "@/components/atoms/Dialog.vue";
import LoginForm from "@/components/login/LoginForm.vue";
import LoginInfoItem from "@/components/login/LoginInfoItem.vue";

const initLoginInfo: LoginInfo = {
  id: "",
  name: ""
};

@Component({
  components: {
    InputPart,
    Button,
    Dialog,
    LoginForm,
    LoginInfoItem
  }
})
export default class Login extends Vue {
  loginInfo = initLoginInfo;
  currentLoginInfo = initLoginInfo;

  showLoginDialog: boolean = false;
  showDeleteDialog: boolean = false;

  created() {
    this.loginInfo.id = this.spreadSheetsId;
    this.loginInfo.name = this.spreadSheetsName;
  }

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
    return this.loginInfo.id.length === 0 || this.isHasLoginInfo;
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

  get hasLoginInfo(): LoginInfo | undefined {
    return this.saveLoginInfos.find(
      saveLoginInfo => saveLoginInfo.id === this.loginInfo.id
    );
  }

  get isHasLoginInfo(): boolean {
    return this.hasLoginInfo !== undefined;
  }

  get dialogTitle(): string {
    return this.showLoginDialog
      ? "既存ログインIDでログイン"
      : "ログインIDを削除";
  }

  get showDialog(): boolean {
    return this.showLoginDialog || this.showDeleteDialog;
  }

  async loginSubmit() {
    await this.$store.dispatch("auth/login", this.loginInfo);
    this.$router.push("/styleguide");
  }

  loginInfoName(loginInfo: LoginInfo): string {
    if (loginInfo.name.length > 0) {
      return loginInfo.name;
    }

    return loginInfo.id;
  }

  onLogin(loginInfo: LoginInfo) {
    this.showLoginDialog = true;
    this.currentLoginInfo = loginInfo;
  }

  onDelete(loginInfo: LoginInfo) {
    this.showDeleteDialog = true;
    this.currentLoginInfo = loginInfo;
  }

  onCancel() {
    this.showLoginDialog = false;
    this.showDeleteDialog = false;
    this.currentLoginInfo = initLoginInfo;
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
  &__submit {
    margin: 30px auto 0;
    max-width: 150px;
  }
  &__notice {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    transform: translateY(-10%);
  }
  &__error {
    color: $is_sub1_color200;
  }
  &__have-info-name {
    margin-right: 5px;
    margin-left: 5px;
    color: $is_base_color200;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
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
