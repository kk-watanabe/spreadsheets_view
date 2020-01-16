<template>
  <div id="app" class="app">
    <Header>
      <template v-slot:navi>
        <GlobalNavi v-if="loggedIn" />
      </template>
    </Header>
    <router-view />
    <Footer :logged-in="loggedIn" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import GlobalNavi from "@/views/common/GlobalNavi.vue";

@Component({
  components: {
    Header,
    Footer,
    GlobalNavi
  }
})
export default class App extends Vue {
  get loggedIn(): boolean {
    return this.$store.getters["auth/loggedIn"];
  }
}
</script>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;
}
</style>
