<template>
  <div class="header">
    <div
      class="header__inner"
      :class="{ 'header__inner--logged-in': loggedIn }"
    >
      <h1 class="header__logo" :class="{ 'header__logo--logged-in': loggedIn }">
        Style guide views
      </h1>
      <div v-if="loggedIn" class="header__sheet-name">{{ name }}</div>
    </div>
    <slot name="navi"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop({ type: Boolean, required: true })
  loggedIn!: boolean;

  @Prop({ type: String, default: "" })
  name!: string;
}
</script>

<style scoped lang="scss">
.header {
  position: relative;
  background-color: $is_color_white;

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:not(&--logged-in) {
      align-items: center;
      height: $header_height;
    }

    &--logged-in {
      padding-left: 40px;
      height: calc(#{$header_height} - 50px);
    }
  }

  &__logo {
    background: linear-gradient(180deg, $is_base_color300, $is_base_color100);
    background-clip: text; //テキストでくり抜く
    color: $is_base_color200;

    -webkit-text-fill-color: transparent;

    &:not(&--logged-in) {
      @include font-size(30);
    }

    &--logged-in {
      @include font-size(14);
    }
  }

  &__sheet-name {
    @include font-size(30);
  }
}
</style>
