<template>
  <div class="Price">
    <h3
      v-if="!isFooter"
      class="Price-title"
    >
      ORDER PRICE
    </h3>

    <div class="Price-group">
      <div class="Price-row Price-delivery">
        <span class="Price-label">Delivery</span> ${{ prices.delivery }}
      </div>
      <div class="Price-row Price-subTotal">
        <span class="Price-label">Subtotal</span> ${{ prices.subTotal }}
      </div>
      <div class="Price-row Price-total">
        <span class="Price-label">
          <strong>Total</strong>
          <span class="Price-label_bracket">(Including import duty)</span>
        </span>
        <strong>${{ prices.total }}</strong>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { Prices } from '@/store/modules/collection/types'

const orderModule = namespace('order')

@Component
export default class Price extends Vue {
  @Prop({
    type: Boolean,
    default: false,
  })
  isFooter!: boolean

  @orderModule.Getter('prices')
  prices!: Prices
}
</script>

<style scoped>
.Price {
  --row-height: 24px;
}

.Price-title:not(:first-child) {
  margin-top: 10px;
}

.Price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--row-height);
}

.Price-label_bracket {
  margin-left: 3px;
  font-size: var(--font-12);
  color: var(--oc-gray-6);
}
</style>
