<template>
  <nav class="global-navi">
    <div class="global-navi__inner">
      <div
        v-for="category in categories"
        class="global-navi__item"
        :key="category.id"
      >
        <RouterLink :to="'/' + category.name">{{ category.name }}</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Category } from "@/models/Category";

@Component
export default class GlobalNavi extends Vue {
  get categories(): Category[] {
    return this.$store.state.category.categories;
  }
}
</script>

<style scoped lang="scss">
.global-navi {
  background-color: $is_base_color200;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__item {
    padding-right: 15px;
    padding-left: 15px;
  }
}
</style>
