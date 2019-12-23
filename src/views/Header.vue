<template>
  <div class="header">
    <h1 class="header__logo">Style guide views</h1>
    <GlobalNavi v-if="loggedIn" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import GlobalNavi from "@/views/GlobalNavi.vue";

@Component({
  components: {
    GlobalNavi
  }
})
export default class Header extends Vue {
  get loggedIn(): boolean {
    return this.$store.state.auth.spreadSheetsId.length;
  }
}
</script>

<style scoped lang="scss"></style>
