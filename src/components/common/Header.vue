<template>
  <div class="header">
    <h1 class="header__logo">Style guide views</h1>
    <slot name="navi"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.header {
  position: relative;
  background-color: $is_color_white;

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $header_height;
    background: linear-gradient(180deg, $is_base_color300, $is_base_color100);
    background-clip: text; //テキストでくり抜く
    color: $is_base_color200;

    -webkit-text-fill-color: transparent;
    @include font-size(30);
  }
}
</style>
