<template>
  <div class="home">
    <input v-model="value" type="text" name="spreadSheetsId" placeholder="スプレットシートのIDを入力してください" />

    <button @click="onClick">送信</button>
    {{value}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model, Prop } from "vue-property-decorator";

@Component
export default class Login extends Vue{
  value: string = "";

  onClick()  {
    if (this.value.length > 0)    {
      this.$store.dispatch("auth/login", this.value);
      this.$store.dispatch("category/fetchCategoryClassInfo");
    }
  }
}
</script>
