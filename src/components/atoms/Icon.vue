<template>
  <i :class="icon" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Icons } from "@/const/Icons";

@Component
export default class Icon extends Vue {
  @Prop({ type: String, required: true })
  icon!: Icons;
}
</script>
