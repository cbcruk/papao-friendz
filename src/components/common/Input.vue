<template>
  <label class="Input">
    <span class="Input-label">{{ label }}</span>
    <slot />
    <p
      v-show="error"
      class="Input-error"
      aria-live="polite"
    >
      {{ error }}
    </p>
  </label>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Input extends Vue {
  @Prop(String)
  label!: string

  @Prop(String)
  error!: string
}
</script>

<style scoped>
.Input {
  display: block;
}

.Input:not(:first-child) {
  margin-top: 20px;
}

.Input >>> input,
.Input >>> select {
  margin-top: 3px;
  font-weight: bold;
}

.Input-label {
  display: block;
  font-size: var(--font-12);
  color: var(--oc-gray-6);
}

.Input-error {
  margin-top: 5px;
  font-size: var(--font-12);
  color: var(--color-error);
}
</style>
