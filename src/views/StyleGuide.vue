<template>
  <div class="style-guide">style guide</div>
</template>

<script lang="ts">
import { Component, Vue, Model, Prop } from "vue-property-decorator";
import { LoginInfo } from "@/models/Login";

@Component
export default class StyleGuide extends Vue {
  get spreadSheetsId(): string {
    return this.$store.state.auth.spreadSheetsId;
  }

  get spreadSheetsName(): string {
    return this.$store.state.auth.spreadSheetsName;
  }

  created() {
    if (this.spreadSheetsId) {
      const loginInfo: LoginInfo = {
        id: this.spreadSheetsId,
        name: this.spreadSheetsName
      };

      this.$store.dispatch("auth/login", loginInfo);
    }
  }
}
</script>
