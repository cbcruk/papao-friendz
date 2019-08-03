<template>
  <div class="Order">
    <div v-if="hasItems" class="Order-items" />
    <p v-else class="Order-blank">
      No order history
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { Item } from '../../store/modules/order/types'

const customerModule = namespace('customer')

@Component
export default class Order extends Vue {
  @Prop(Array)
  items!: Item[]

  @customerModule.Action('getOrders')
  getOrders!: () => void

  get hasItems() {
    return Boolean(this.items.length)
  }

  mounted() {
    this.getOrders()
  }
}
</script>

<style scoped>
.Order-blank {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 190px;
  color: var(--oc-gray-6);
}
</style>
