<template>
  <div class="ScrollSnap">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ScrollSnap extends Vue {}
</script>

<style scoped>
.ScrollSnap {
  --offset: calc(var(--default-padding));
  --image-offset: 10px;
  --outer-width: calc(100% + var(--offset) * 2);
  --inner-width: calc(100% - var(--offset) * 2);
  --radius: 8px;
}

.ScrollSnap {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  transform: translateX(calc(var(--offset) * -1));
  width: var(--outer-width);
  white-space: nowrap;
}

.ScrollSnap > img {
  width: var(--inner-width);
  border-radius: var(--radius);
  scroll-snap-align: center;
}

.ScrollSnap > img:first-of-type {
  margin-left: var(--offset);
}
.ScrollSnap > img:last-of-type {
  margin-right: var(--offset);
}

.ScrollSnap > img:not(:first-child) {
  margin-left: var(--image-offset);
}
</style>
