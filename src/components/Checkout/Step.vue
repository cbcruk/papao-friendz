<template>
  <div class="Step">
    <h2 class="Step-title">
      <span class="Step-title_order">{{ order }}</span>
      {{ title }}
    </h2>
    <div class="Step-body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Checkout extends Vue {
  @Prop(String)
  order!: string

  @Prop(String)
  title!: string
}
</script>

<style scoped>
.Step {
  padding: var(--default-padding);
}

.Step:not(:first-child) {
  border-top: 1px solid var(--oc-gray-4);
}

.Step-title {
  display: flex;
  align-items: flex-end;
  font-size: 1rem;
}

.Step-title_order {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--oc-black);
  margin-right: 0.5em;
  font-size: var(--font-12);
  color: var(--oc-white);
}

.Step-body {
  margin-top: 15px;
}
</style>
