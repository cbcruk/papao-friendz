<template>
  <checkout-step
    order="3"
    title="PAYMENT METHOD"
  >
    <div class="Payment">
      <label class="Payment-item">
        <input
          v-model="checked"
          type="radio"
          name="payment"
          value="paypal"
          class="Payment-item_input"
        >
        <icon-circle
          width="16"
          height="16"
          :is-checked="checked === 'paypal'"
        />
        <icon-paypal
          width="95"
          height="23"
          class="Payment-icon_paypal"
        />
      </label>
    </div>
  </checkout-step>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import CheckoutStep from './Step.vue'
import IconPaypal from '@/components/common/Icons/Paypal.vue'
import IconCircle from '@/components/common/Icons/Circle.vue'

@Component({
  components: {
    CheckoutStep,
    IconPaypal,
    IconCircle,
  },
})
export default class PaymentMethod extends Vue {
  checked = ''
}
</script>

<style scoped>
.Payment-item {
  display: flex;
  align-items: center;
}

.Payment-item_input {
  position: absolute;
  opacity: 0;
}

.Payment-icon_paypal {
  margin-left: 5px;
}
</style>
