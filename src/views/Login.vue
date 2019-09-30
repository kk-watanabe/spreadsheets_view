<template>
  <div class="home">
    <InputPart v-model="value" placeholder="スプレットシートのIDを入力してください" />

    <Button>送信</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model, Prop } from "vue-property-decorator";
import InputPart from "@/components/atoms/form/InputPart.vue";
import Button from "@/components/atoms/Button.vue";

@Component({
  components: {
    InputPart,
    Button
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
