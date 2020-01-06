<template>
  <div class="footer">
    <a v-if="loggedIn" href="#container" class="footer__pagetop">ページTOP</a>
    <small class="footer__copyright">© 2019 Style guide views.</small>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  @Prop({ type: Boolean, required: true })
  loggedIn!: boolean;
}
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: $footer_height;
  background-color: $is_base_color100;
  &__copyright {
    color: $is_color_white;

    @include font-size(11);
  }
}
</style>
