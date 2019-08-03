<template>
  <div class="Summary">
    <div class="Summary-price">
      <p class="Summary-price_row Summary-price_delivery">
        <span>Delivery</span> ${{ prices.delivery }}
      </p>
      <p class="Summary-price_row Summary-price_total">
        <span>Total</span> ${{ prices.total }}
      </p>
    </div>

    <button
      type="button"
      class="button Summary-submit"
      :disabled="!hasCheckedItems"
      @click="onSubmit"
    >
      CHECK OUT
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { Prices } from '@/store/modules/collection/types'

const orderModule = namespace('order')

@Component
export default class Summary extends Vue {
  @Prop(Object)
  prices!: Prices

  @Prop(Boolean)
  hasCheckedItems!: boolean

  @orderModule.Action('setItems')
  setItems!: () => void

  async onSubmit() {
    await this.setItems()

    this.$router.push('/checkout')
  }
}
</script>

<style scoped>
.Summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-right: var(--default-padding);
  padding-left: var(--default-padding);
}

.Summary-price {
  flex: 1;
}

.Summary-price_row {
  display: flex;
  justify-content: space-between;
}

.Summary-price_delivery {
  color: var(--oc-gray-6);
}

.Summary-price_total {
  font-weight: bold;
}

.Summary-submit {
  width: 140px;
  height: 35px;
  margin-left: 50px;
  font-size: var(--font-12);
}
</style>
