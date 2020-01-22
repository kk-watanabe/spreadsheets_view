<template>
  <div class="login">
    <div class="login__container">
      <div class="login__input-field">
        <div class="login__icon login__icon--required">必須</div>
        <InputPart
          v-model="id"
          :error="disabledLogin"
          placeholder="スプレットシートのIDを入力してください"
        />
      </div>

      <div class="login__input-field">
        <div class="login__icon login__icon--any">任意</div>
        <InputPart
          v-model="name"
          placeholder="スプレットシート名を入力してください"
        />
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
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model, Prop } from "vue-property-decorator";
import { LoginInfo } from "@/models/Login";
import InputPart from "@/components/atoms/form/InputPart.vue";
import Button from "@/components/atoms/Button.vue";

@Component({
  components: {
    InputPart,
    Button
  }
})
export default class Login extends Vue {
  id: string = "";
  name: string = "";

  created() {
    if (this.spreadSheetsId) {
      this.id = this.spreadSheetsId;
      this.name = this.spreadSheetsName;
      this.loginSubmit();
    }
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

  loginSubmit() {
    const loginInfo: LoginInfo = {
      id: this.id,
      name: this.name
    };

    this.$store.dispatch("auth/login", loginInfo);
    this.$router.push("/styleguide");
  }
}
</script>

<style scoped lang="scss">
.login {
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  height: calc(100vh - #{$header_height} - #{$footer_height});
  &__container {
    width: 450px;
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
