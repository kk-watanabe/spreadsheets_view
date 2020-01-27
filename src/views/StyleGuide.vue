<template>
  <div class="style-guide">style guide</div>
</template>

<script lang="ts">
import { Component, Vue, Model, Prop } from "vue-property-decorator";
import { LoginInfo } from "@/models/Login";
import VueRouter from "vue-router";

@Component
export default class StyleGuide extends Vue {
  get loggedIn(): boolean {
    return this.$store.getters["auth/loggedIn"];
  }

  get spreadSheetsId(): string {
    return this.$store.state.auth.spreadSheetsId;
  }

  get spreadSheetsName(): string {
    return this.$store.state.auth.spreadSheetsName;
  }

  created() {
    if (!this.loggedIn) {
      this.$router.push("/login");
    }
  }
}
</script>
