<template>
  <div id="app" class="app">
    <Header :logged-in="loggedIn" :name="showLoginInfoName">
      <template v-slot:navi>
        <GlobalNavi v-if="loggedIn" />

        <div v-if="loggedIn" class="app__logout">
          <Tooltip :placement="tooltipPlacement.Left" content="ログアウト">
            <IconButton
              :icon="icons.Exit"
              :color="buttonType.Green"
              :icon-size="24"
              :icon-offset="'5px 0px 0px 5px'"
              @click="onClick"
            />
          </Tooltip>
        </div>
      </template>
    </Header>
    <router-view />
    <Footer :logged-in="loggedIn" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LoginInfo } from "@/models/Login";
import { ButtonType } from "@/const/Button";
import { Icons } from "@/const/Icons";
import { TooltipPlacement } from "@/const/Tooltip";
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import IconButton from "@/components/atoms/IconButton.vue";
import Tooltip from "@/components/atoms/Tooltip.vue";
import GlobalNavi from "@/views/common/GlobalNavi.vue";

@Component({
  components: {
    Header,
    Footer,
    IconButton,
    Tooltip,
    GlobalNavi,
  },
})
export default class App extends Vue {
  buttonType = ButtonType;
  icons = Icons;
  tooltipPlacement = TooltipPlacement;

  get loggedInInfo(): LoginInfo {
    return this.$store.state.auth.loggedInInfo;
  }

  get loggedIn(): boolean {
    return this.$store.getters["auth/loggedIn"];
  }

  get showLoginInfoName(): string {
    if (this.loggedInInfo.name.length > 0) {
      return this.loggedInInfo.name;
    }

    return this.loggedInInfo.id;
  }

  async created() {
    await this.$store.dispatch("initialize");
  }

  onClick() {
    this.$store.dispatch("auth/logout");
    this.$router.push("/login");
  }
}
</script>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;

  &__logout {
    position: absolute;
    top: 50%;
    right: 40px;
    margin-top: -(30px + $gnavi_height / 2);
  }
}
</style>
