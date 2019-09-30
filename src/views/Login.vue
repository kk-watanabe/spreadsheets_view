<template>
  <div class="home">
    <InputPart v-model="value" placeholder="スプレットシートのIDを入力してください" />

    <button @click="onClick">送信</button>
    {{value}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model, Prop } from "vue-property-decorator";
import InputPart from "@/components/atoms/form/InputPart.vue";

@Component({
  components: {
    InputPart
  }
})
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
