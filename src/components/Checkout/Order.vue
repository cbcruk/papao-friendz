<template>
  <checkout-step order="1" title="ORDER PRODUCT">
    <div class="Order">
      <div class="Order-items">
        <order-item v-for="item in items" :key="item.id" :item="item">
          <item-quantity
            slot="quantity"
            :quantity="item.quantity"
            :patch-item="patchItem"
            class="Order-item_quantity"
          />
        </order-item>
      </div>

      <order-price class="Order-price" />
    </div>
  </checkout-step>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import CheckoutStep from './Step.vue'
import OrderItem from '@/components/Collection/Item.vue'
import ItemQuantity from './Order/Quantity.vue'
import OrderPrice from './Order/Price.vue'
import { OrderState } from '@/store/modules/order/types'

const orderModule = namespace('order')

type Items = OrderState['items']

@Component({
  components: {
    CheckoutStep,
    OrderItem,
    ItemQuantity,
    OrderPrice,
  },
})
export default class Order extends Vue {
  @orderModule.Getter('items')
  items!: Items

  @orderModule.Action('getShippingPrice')
  getShippingPrice!: () => void

  @orderModule.Action('patchItem')
  patchItem!: () => void

  @Watch('items', { immediate: true })
  onItemsChanged(items: Items) {
    this.getShippingPrice()
  }
}
</script>

<style scoped>
.Order {
  --gap: 15px;
}

.Order-item_quantity {
  display: block;
  margin-top: 8px;
}

.Order-price {
  padding-top: var(--gap);
  border-top: 1px solid var(--oc-gray-2);
  margin-top: var(--gap);
}
</style>
