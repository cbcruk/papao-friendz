<template>
  <button
    :class="{
      'Button': true,
      'button': true,
    }"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Button extends Vue {}
</script>

<style scoped>
.Button {
  width: 100%;
}
</style>
