<template>
  <nav class="global-navi">
    <div class="global-navi__wrapper">
      <div v-for="category in categories" class="global-navi__item" :key="category.id">
        <RouterLink :to="'/' + category.name">{{ category.name }}</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Category } from "@/models/Category";

@Component
export default class GlobalNavi extends Vue{
  get categories(): Category[]  {
    console.log("test")
    return this.$store.state.category.categories;
  }
}
</script>

<style scoped lang="scss">
</style>
