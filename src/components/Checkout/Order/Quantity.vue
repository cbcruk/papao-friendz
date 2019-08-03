<template>
  <label class="Quantity">
    <select class="Quantity-select" :value="quantity" @change="onChange">
      <option v-for="n in 10" :key="n" :value="n">
        {{ n }}
      </option>
    </select>
  </label>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Quantity extends Vue {
  @Prop(Number)
  id!: number

  @Prop(Number)
  quantity!: number

  @Prop(Function)
  patchItem!: (params: { id: number; quantity: number }) => void

  onChange(e: Event) {
    const target = e.target as HTMLInputElement

    this.patchItem({
      id: this.id,
      quantity: parseInt(target.value, 10),
    })
  }
}
</script>

<style scoped>
.Quantity-select {
  width: auto;
  height: auto;
  padding: 0;
  background-color: var(--oc-white);
}
</style>
