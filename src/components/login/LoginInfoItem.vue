<template>
  <div class="login-info-item">
    <div class="login-info-item__name">
      <div class="login-info-item__text" @click="onLogin(loginInfo)">
        {{ loginInfoName(loginInfo) }}
      </div>
    </div>
    <div class="login-info-item__button">
      <IconButton
        :icon="icons.Cross"
        :color="buttonType.Light"
        :size="24"
        :icon-size="12"
        :icon-offset="'1px 0 0 1px'"
        @click="onDelete(loginInfo)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { LoginInfo } from "@/models/Login";
import { Icons } from "@/const/Icons";
import { ButtonType } from "@/const/Button";
import IconButton from "@/components/atoms/IconButton.vue";

@Component({
  components: {
    IconButton,
  },
})
export default class LoginInfoItem extends Vue {
  @Prop({ type: Object, required: true })
  loginInfo!: LoginInfo;

  @Emit("login")
  onLogin(loginInfo: LoginInfo) {}

  @Emit("delete")
  onDelete(loginInfo: LoginInfo) {}

  icons = Icons;
  buttonType = ButtonType;

  loginInfoName(loginInfo: LoginInfo): string {
    if (loginInfo.name.length > 0) {
      return loginInfo.name;
    }

    return loginInfo.id;
  }
}
</script>

<style scoped lang="scss">
.login-info-item {
  display: flex;
  align-items: center;
  &__name {
    width: calc(100% - 40px);
  }
  &__text {
    display: inline-block;
    overflow: hidden;
    max-width: 100%;
    color: $is_base_color200;
    text-decoration: underline;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  }
  &__button {
    margin-left: 10px;
    width: 30px;
  }
}
</style>
